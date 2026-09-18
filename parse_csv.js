const fs = require('fs');

const html = fs.readFileSync('sheet_page.html', 'utf8');

// Search for bootstrap or sheet names or sheets in google doc html
const re = /bootstrapData\s*=\s*({.+?});/s;
// Or let's search for sheet names in the html
const tabMatches = html.match(/"[^"]*Sheet\d*[^"]*"/g);
console.log('Tab matches preview:', tabMatches ? tabMatches.slice(0, 20) : null);

// Let's search for "gid" or "sheetId" or "title"
const titleMatches = html.match(/"title":"([^"]+)"/g);
console.log('Title matches:', titleMatches);

// Let's check sheet_export.csv
const csv = fs.readFileSync('sheet_export.csv', 'utf8');
console.log('CSV length:', csv.length);
console.log('First 500 chars:\n', csv.substring(0, 500));
