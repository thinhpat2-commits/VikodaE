const fs = require('fs');
const path = 'C:/Users/USER/.gemini/antigravity-ide/brain/32f7f072-5188-4851-bf8f-8a92a5667aa1/.system_generated/logs/transcript.jsonl';
const lines = fs.readFileSync(path, 'utf8').trim().split('\n');
console.log('Lines count:', lines.length);

for (let i = Math.max(0, lines.length - 10); i < lines.length; i++) {
  try {
    const d = JSON.parse(lines[i]);
    console.log(`\n=== Step ${d.step_index} [${d.type}] [status: ${d.status}] ===`);
    if (d.content) console.log(d.content.slice(0, 500));
    if (d.tool_calls) console.log('Tool calls:', JSON.stringify(d.tool_calls).slice(0, 300));
  } catch(e) {}
}
