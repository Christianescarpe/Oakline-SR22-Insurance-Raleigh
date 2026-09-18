const XLSX = require('xlsx');
const fs = require('fs');

const wb = XLSX.readFile('Oakline_SEO_Content.xlsx');
console.log('Sheet names:', wb.SheetNames);

const output = {};
for (const name of wb.SheetNames) {
  const ws = wb.Sheets[name];
  const json = XLSX.utils.sheet_to_json(ws, { defval: '' });
  output[name] = json;
  console.log(`\n--- Sheet: ${name} (${json.length} rows) ---`);
  if (json.length > 0) {
    console.log('Columns:', Object.keys(json[0]));
    console.log('Row 0 sample:', JSON.stringify(json[0], null, 2).slice(0, 500));
  }
}

fs.writeFileSync('all_sheets_data.json', JSON.stringify(output, null, 2));
console.log('\nWrote all_sheets_data.json');
