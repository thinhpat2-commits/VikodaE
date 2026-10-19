const fs = require('fs');
const readline = require('readline');

async function extract() {
  const rl = readline.createInterface({
    input: fs.createReadStream('C:/Users/USER/.gemini/antigravity-ide/brain/32f7f072-5188-4851-bf8f-8a92a5667aa1/.system_generated/logs/transcript_full.jsonl'),
    crlfDelay: Infinity
  });

  for await (const line of rl) {
    if (line.includes('"step_index":698')) {
      const data = JSON.parse(line);
      const content = data.tool_calls?.[0]?.args?.CodeContent;
      if (content) {
        fs.writeFileSync('scratch/step698_code.txt', content);
        console.log('Saved step 698 code, length:', content.length);
      }
      break;
    }
  }
}

extract();
