import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import fs from 'fs';
import {defineConfig, loadEnv} from 'vite';

export default defineConfig(({mode}) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    plugins: [
      react(), 
      tailwindcss(),
      {
        name: 'asset-saver',
        configureServer(server) {
          server.middlewares.use('/api/save-asset', async (req, res) => {
            if (req.method === 'POST') {
              let body = '';
              req.on('data', chunk => body += chunk);
              req.on('end', async () => {
                try {
                  const { filename, base64 } = JSON.parse(body);
                  const cleanBase64 = base64.replace(/^data:image\/\w+;base64,/, '');
                  const inputBuffer = Buffer.from(cleanBase64, 'base64');
                  const targetPath = path.resolve(process.cwd(), 'public/assets', filename);

                  let finalBuffer: any = inputBuffer;
                  try {
                    const { removeBackground } = await import('@imgly/background-removal-node');
                    const sharpModule = await import('sharp');
                    const sharp = sharpModule.default;
                    console.log(`[AI Cutout] Running neural background removal for ${filename} (${inputBuffer.length} bytes)...`);
                    
                    // Create Blob with explicit image/png MIME type required by imgly in Node.js
                    const blobInput = new Blob([inputBuffer], { type: 'image/png' });
                    const blob = await removeBackground(blobInput);
                    const cutoutBuffer = Buffer.from(await blob.arrayBuffer());
                    
                    // Autotrim excess transparent borders with Sharp
                    const trimmed = await sharp(cutoutBuffer).trim().png().toBuffer();
                    finalBuffer = Buffer.from(trimmed);
                    console.log(`[AI Cutout] SUCCESS: Cleaned, background removed & trimmed ${filename} (result: ${finalBuffer.length} bytes)`);
                  } catch (aiErr: any) {
                    console.error(`[AI Cutout] Neural error:`, aiErr.message || aiErr);
                    try {
                      const sharpModule = await import('sharp');
                      const sharp = sharpModule.default;
                      const resBuf = await sharp(inputBuffer).png().toBuffer();
                      finalBuffer = Buffer.from(resBuf);
                    } catch (fallbackErr: any) {
                      finalBuffer = inputBuffer;
                    }
                  }

                  fs.mkdirSync(path.dirname(targetPath), { recursive: true });
                  fs.writeFileSync(targetPath, finalBuffer);

                  // Also sync to dist/assets if dist exists
                  const distAssetsDir = path.resolve(process.cwd(), 'dist/assets');
                  if (fs.existsSync(distAssetsDir)) {
                    fs.writeFileSync(path.resolve(distAssetsDir, filename), finalBuffer);
                  }

                  const resultBase64 = 'data:image/png;base64,' + finalBuffer.toString('base64');
                  res.setHeader('Content-Type', 'application/json');
                  res.end(JSON.stringify({ success: true, filename, base64: resultBase64 }));
                } catch (e: any) {
                  res.statusCode = 500;
                  res.end(JSON.stringify({ error: e.message }));
                }
              });
            }
          });
        }
      }
    ],
    define: {
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY || process.env.GEMINI_API_KEY || ''),
    },
    resolve: {
      alias: {
        '@': path.resolve(import.meta.dirname, '.'),
      },
    },
    server: {
      hmr: process.env.DISABLE_HMR !== 'true',
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
