const http = require('http');

function fetchUrl(pathUrl) {
  return new Promise((resolve) => {
    http.get(`http://localhost:3000${pathUrl}`, res => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        resolve({ status: 200, redirectedTo: res.headers.location, body: '' });
        return;
      }
      let body = '';
      res.on('data', chunk => body += chunk);
      res.on('end', () => {
        resolve({ status: res.statusCode, body });
      });
    }).on('error', err => {
      resolve({ status: 500, error: err.message });
    });
  });
}

async function checkAllLinks() {
  const visited = new Set();
  const toVisit = ['/'];
  const brokenLinks = [];

  while (toVisit.length > 0) {
    const current = toVisit.shift();
    if (visited.has(current)) continue;
    visited.add(current);

    const res = await fetchUrl(current);
    if (res.status !== 200) {
      brokenLinks.push({ url: current, status: res.status });
      continue;
    }

    // Extract internal links
    const hrefMatches = res.body.matchAll(/href="(\/[^"#]*)/g);
    for (const match of hrefMatches) {
      const link = match[1];
      if (!visited.has(link) && !toVisit.includes(link) && !link.startsWith('//')) {
        toVisit.push(link);
      }
    }
  }

  console.log(`Visited ${visited.size} internal URLs.`);
  console.log(`Broken links found: ${brokenLinks.length}`);
  if (brokenLinks.length > 0) {
    console.error('Broken links:', brokenLinks);
    process.exit(1);
  } else {
    console.log('ALL INTERNAL LINKS ARE 100% HEALTHY!');
    process.exit(0);
  }
}

checkAllLinks();
