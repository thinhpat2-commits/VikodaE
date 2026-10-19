const fs = require('fs');
const code = fs.readFileSync('src/components/AssetStudioModal.tsx', 'utf8');

const regex = /id:\s*'([^']+)',\s*filename:\s*'([^']+)',\s*nameVi:\s*'([^']+)'[\s\S]*?currentSrc:\s*'([^']+)'/g;
let match;
let count = 0;
while ((match = regex.exec(code)) !== null) {
  count++;
  const id = match[1];
  const filename = match[2];
  const nameVi = match[3];
  const currentSrc = match[4];
  const currentSrcFilename = currentSrc.split('/').pop().split('?')[0];
  const isMatch = filename === currentSrcFilename;
  if (!isMatch) {
    console.log(`MISMATCH [${count}] ${nameVi} (${id}):`);
    console.log(`   filename:   ${filename}`);
    console.log(`   currentSrc: ${currentSrc} (file: ${currentSrcFilename})\n`);
  }
}
console.log(`Total checked: ${count}`);
