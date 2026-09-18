const https = require('https');
const fs = require('fs');

const url = 'https://docs.google.com/spreadsheets/d/1nsdusQVIa5NroC__wHOR0dS13o6579PL-R7HiSy5Q0o/export?format=xlsx';

function download(u) {
  https.get(u, res => {
    if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
      return download(res.headers.location);
    }
    const file = fs.createWriteStream('Oakline_SEO_Content.xlsx');
    res.pipe(file);
    file.on('finish', () => {
      file.close();
      console.log('Downloaded xlsx, size:', fs.statSync('Oakline_SEO_Content.xlsx').size);
    });
  });
}

download(url);
