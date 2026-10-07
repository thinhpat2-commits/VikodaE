const fs = require('fs');

// We have 100 distinct unit specs in unitSpecs.json
const specs = JSON.parse(fs.readFileSync('src/data/unitSpecs.json', 'utf8'));

// Now we build a dictionary of 100 UNIQUE pedagogical data sets!
// Every single unit will have its OWN custom dialogues, questions, answers, and audio scripts
// directly tied to its specific topic (e.g. Unit 6 = Small Talk, Unit 7 = Business Cards, Unit 8 = Welcome Visitors, etc.)
