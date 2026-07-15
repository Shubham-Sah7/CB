const fs = require('fs');
const path = require('path');

const filePath = '/Users/shubhamsah/dev/CrossBoo/app/app/page.tsx';
const codePath = '/Users/shubhamsah/dev/CrossBoo/app/scratch/pulse_code.txt';

let content = fs.readFileSync(filePath, 'utf8');
const replacementCode = fs.readFileSync(codePath, 'utf8');

// Find the index of activeProduct === "pulse"
const pulseStartIndex = content.indexOf('activeProduct === "pulse" && (');
if (pulseStartIndex === -1) {
  console.error("Could not find start of activeProduct === pulse block");
  process.exit(1);
}

// Find the end of the conditional block, which is the matching )} before </main>
const mainIndex = content.lastIndexOf('</main>');
if (mainIndex === -1) {
  console.error("Could not find </main> tag");
  process.exit(1);
}

// We want to replace everything from pulseStartIndex to the matching )} right before mainIndex.
// Let's search backward from mainIndex for )}
const endSearchStr = ')}';
const pulseEndIndex = content.lastIndexOf(endSearchStr, mainIndex);
if (pulseEndIndex === -1) {
  console.error("Could not find closing )} before </main>");
  process.exit(1);
}

const beforePulse = content.slice(0, pulseStartIndex);
const afterPulse = content.slice(pulseEndIndex + endSearchStr.length);

const newContent = beforePulse + replacementCode + afterPulse;
fs.writeFileSync(filePath, newContent, 'utf8');

console.log("Successfully replaced the Pulse block!");
