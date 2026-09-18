const fs = require('fs');

const data = JSON.parse(fs.readFileSync('all_sheets_data.json', 'utf8'));

for (const sheetName of Object.keys(data)) {
  console.log(`\n=== Checking ${sheetName} ===`);
  data[sheetName].forEach((row, i) => {
    const html = row['Page Content (HTML)'] || '';
    const checks = [
      { col: 'Internal Link 1', val: row['Internal Link 1'] },
      { col: 'Internal Link 2', val: row['Internal Link 2'] },
      { col: 'Internal Link 3', val: row['Internal Link 3'] },
      { col: 'External Link', val: row['External Link'] },
    ];

    checks.forEach(c => {
      if (!c.val || c.val === '[link removed]') return;
      // c.val is format: "anchor text" -> url
      const m = c.val.match(/"([^"]+)"\s*->\s*(.+)/);
      if (m) {
        const anchor = m[1].trim();
        const url = m[2].trim();
        const hasAnchor = html.includes(anchor);
        const hasUrl = html.includes(url);
        if (!hasAnchor || !hasUrl) {
          console.log(`[${row.Page}] ${c.col}: missing! anchor in HTML: ${hasAnchor}, url in HTML: ${hasUrl}. (${c.val})`);
        }
      } else {
        console.log(`[${row.Page}] ${c.col} format not matched: ${c.val}`);
      }
    });
  });
}
