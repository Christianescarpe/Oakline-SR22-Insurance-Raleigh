const fs = require('fs');

const data = JSON.parse(fs.readFileSync('all_sheets_data.json', 'utf8'));

console.log('=== SEO CONTENT PAGES ===');
data['SEO Content'].forEach((row, i) => {
  console.log(`${i+1}. [${row.Page}] URL: ${row['Page URL']}`);
  console.log(`   Internal Links: "${row['Internal Link 1']}", "${row['Internal Link 2']}", "${row['Internal Link 3']}"`);
  console.log(`   External Link: "${row['External Link']}"`);
});

console.log('\n=== BLOG CONTENT POSTS ===');
data['Blog Content'].forEach((row, i) => {
  console.log(`${i+1}. [${row.Page}] URL: ${row['Page URL']}`);
  console.log(`   Target Keyword: ${row['Target Keyword']}`);
  console.log(`   Internal Links: "${row['Internal Link 1']}", "${row['Internal Link 2']}", "${row['Internal Link 3']}"`);
  console.log(`   External Link: "${row['External Link']}"`);
});
