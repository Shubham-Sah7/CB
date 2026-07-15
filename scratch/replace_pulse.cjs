const fs = require('fs');

const filePath = '/Users/shubhamsah/dev/CrossBoo/app/app/page.tsx';
const codePath = '/Users/shubhamsah/dev/CrossBoo/app/scratch/pulse_code.txt';

let content = fs.readFileSync(filePath, 'utf8');
const replacementCode = fs.readFileSync(codePath, 'utf8');

// Find the index of the start of the block
const searchStr = '{activeProduct === "pulse" && (';
const startIndex = content.indexOf(searchStr);
if (startIndex === -1) {
  console.error("Could not find start index");
  process.exit(1);
}

// Let's find the matching closing curly brace '}' for the block
let braceCount = 0;
let closeBraceIndex = -1;
for (let i = startIndex; i < content.length; i++) {
  if (content[i] === '{') {
    braceCount++;
  } else if (content[i] === '}') {
    braceCount--;
    if (braceCount === 0) {
      closeBraceIndex = i;
      break;
    }
  }
}

if (closeBraceIndex === -1) {
  console.error("Could not find matching closing brace");
  process.exit(1);
}

console.log("Replacing block from index", startIndex, "to", closeBraceIndex);

const beforePulse = content.slice(0, startIndex);
const afterPulse = content.slice(closeBraceIndex + 1);

// Prepend '{' to the replacementCode which already ends with '}'
const wrappedReplacement = '{' + replacementCode;

const newContent = beforePulse + wrappedReplacement + afterPulse;
fs.writeFileSync(filePath, newContent, 'utf8');

console.log("Successfully replaced the Pulse block using curly brace matching!");
