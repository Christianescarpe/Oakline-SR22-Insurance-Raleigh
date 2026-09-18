const https = require('https');
const fs = require('fs');

const url = 'https://docs.google.com/spreadsheets/d/1nsdusQVIa5NroC__wHOR0dS13o6579PL-R7HiSy5Q0o/edit?usp=sharing';

function get(u) {
  https.get(u, res => {
    if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
      return get(res.headers.location);
    }
    let data = '';
    res.on('data', c => data += c);
    res.on('end', () => {
      fs.writeFileSync('sheet_page.html', data);
      console.log('Downloaded HTML, size:', data.length);
      const matches = data.match(/"name":"([^"]+)"/g) || [];
      console.log('Matches:', matches);
      const gids = data.match(/gid=([0-9]+)/g) || [];
      console.log('GIDs:', [...new Set(gids)]);
    });
  });
}

get(url);
