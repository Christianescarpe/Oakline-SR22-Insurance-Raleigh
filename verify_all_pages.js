const http = require('http');
const fs = require('fs');
const path = require('path');
const requestHandler = require('./server.js');

const data = JSON.parse(fs.readFileSync(path.join(__dirname, 'all_sheets_data.json'), 'utf8'));

// Test URLs list
const testUrls = [];

// 1. SEO Content
data['SEO Content'].forEach(p => {
  testUrls.push({
    url: p['Page URL'],
    type: 'SEO Page',
    pageName: p.Page,
    seoTitle: p['SEO Title'],
    metaDesc: p['Meta Description'],
    html: p['Page Content (HTML)']
  });
});

// 2. Blog index
testUrls.push({
  url: '/blog/',
  type: 'Blog Index',
  pageName: 'Blog Index',
  seoTitle: 'Insurance Blog & Reinstatement Guides | Oakline SR22 Insurance Raleigh',
  metaDesc: 'Read guides on SR-22 insurance costs, driver license reinstatement, non-owner policies, and DMV compliance requirements.',
  html: ''
});

// 3. Blog Content
data['Blog Content'].forEach(b => {
  testUrls.push({
    url: b['Page URL'],
    type: 'Blog Post',
    pageName: b.Page,
    seoTitle: b['SEO Title'],
    metaDesc: b['Meta Description'],
    html: b['Page Content (HTML)']
  });
});

function fetchPage(port, pathUrl) {
  return new Promise((resolve, reject) => {
    http.get(`http://localhost:${port}${pathUrl}`, res => {
      let body = '';
      res.on('data', chunk => body += chunk);
      res.on('end', () => {
        resolve({ statusCode: res.statusCode, body });
      });
    }).on('error', err => reject(err));
  });
}

async function runVerification() {
  const server = requestHandler.server;
  await new Promise((resolve, reject) => {
    server.once('error', reject);
    server.listen(0, () => resolve());
  });
  const port = server.address().port;
  console.log(`Starting verification of ${testUrls.length} pages on isolated port ${port}...\n`);
  let passed = 0;
  let failed = 0;

  for (const item of testUrls) {
    try {
      const res = await fetchPage(port, item.url);
      if (res.statusCode !== 200) {
        console.error(`FAIL: ${item.url} returned status ${res.statusCode}`);
        failed++;
        continue;
      }

      // Check title
      const titleMatch = res.body.match(/<title>([^<]+)<\/title>/);
      const titleFound = titleMatch ? titleMatch[1] : '';
      if (titleFound !== item.seoTitle) {
        console.warn(`WARN [Title Mismatch]: ${item.url}`);
        console.warn(`   Expected: "${item.seoTitle}"`);
        console.warn(`   Found:    "${titleFound}"`);
      }

      // Check meta description
      const descMatch = res.body.match(/<meta name="description" content="([^"]+)"/);
      const descFound = descMatch ? descMatch[1] : '';
      if (descFound !== item.metaDesc) {
        console.warn(`WARN [Meta Description Mismatch]: ${item.url}`);
        console.warn(`   Expected: "${item.metaDesc}"`);
        console.warn(`   Found:    "${descFound}"`);
      }

      // Check phone number link
      if (!res.body.includes('tel:+19842051805') || !res.body.includes('(984) 205-1805')) {
        console.warn(`WARN [Phone Link missing]: ${item.url}`);
      }

      // Check Google Search Console verification meta tag
      if (!res.body.includes('name="google-site-verification" content="VCJGx2cffT1IY6_QZEKkcK4uMx9PGYDzdnZo6sYk5yg"')) {
        console.error(`FAIL [Google verification tag missing]: ${item.url}`);
        failed++;
        continue;
      }

      // Check Google Map embed in footer
      if (!res.body.includes('maps/embed?pb=!1m14!1m8!1m3!1d3236.4445834838666')) {
        console.error(`FAIL [Google Map embed missing]: ${item.url}`);
        failed++;
        continue;
      }

      console.log(`PASS [200 OK]: ${item.type} "${item.pageName}" -> ${item.url}`);
      passed++;
    } catch (e) {
      console.error(`ERROR fetching ${item.url}:`, e.message);
      failed++;
    }
  }

  console.log(`\n========================================`);
  console.log(`Verification Complete: ${passed} Passed, ${failed} Failed`);
  console.log(`========================================\n`);

  server.close();

  if (failed === 0) {
    process.exit(0);
  } else {
    process.exit(1);
  }
}

// Wait a moment for server then verify
setTimeout(runVerification, 1500);
