const fs = require('fs');
const path = require('path');
const {
  renderHomePage,
  renderLocationPage,
  renderServicesPage,
  renderStandardPage,
  renderBlogPost,
  renderBlogIndex,
  renderNotFound,
  seoPagesMap,
  blogPostsMap,
  locationSlugs,
  servicesSlugs,
  data
} = require('./server.js');

const distDir = path.join(__dirname, 'dist');

console.log('--- Starting Oakline SR22 Insurance Raleigh Production Build ---');

// 1. Clean and initialize dist directory
if (fs.existsSync(distDir)) {
  fs.rmSync(distDir, { recursive: true, force: true });
}
fs.mkdirSync(distDir, { recursive: true });
console.log('Created dist directory.');

// Helper to write HTML file to directory
function writePage(subPath, htmlContent) {
  let targetPath;
  if (subPath === '/' || subPath === '') {
    targetPath = path.join(distDir, 'index.html');
  } else if (subPath.endsWith('.html')) {
    targetPath = path.join(distDir, subPath);
    const parentDir = path.dirname(targetPath);
    if (!fs.existsSync(parentDir)) fs.mkdirSync(parentDir, { recursive: true });
  } else {
    const cleanSub = subPath.replace(/^\//, '').replace(/\/$/, '');
    const dir = path.join(distDir, cleanSub);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    targetPath = path.join(dir, 'index.html');
  }
  fs.writeFileSync(targetPath, htmlContent, 'utf8');
}

// 2. Copy Static Assets
console.log('Copying static assets...');
const themeCss = fs.readFileSync(path.join(__dirname, 'oakline-sr22-theme', 'style.css'), 'utf8');
fs.writeFileSync(path.join(distDir, 'style.css'), themeCss, 'utf8');

// Copy images
const distImagesDir = path.join(distDir, 'assets', 'images');
fs.mkdirSync(distImagesDir, { recursive: true });
const srcImagesDir = path.join(__dirname, 'assets', 'images');
if (fs.existsSync(srcImagesDir)) {
  const images = fs.readdirSync(srcImagesDir);
  images.forEach(img => {
    fs.copyFileSync(path.join(srcImagesDir, img), path.join(distImagesDir, img));
  });
  console.log(`Copied ${images.length} images to dist/assets/images.`);
}

// Also copy theme zip and content export if present
if (fs.existsSync(path.join(__dirname, 'oakline-sr22-theme.zip'))) {
  fs.copyFileSync(
    path.join(__dirname, 'oakline-sr22-theme.zip'),
    path.join(distDir, 'oakline-sr22-theme.zip')
  );
}
if (fs.existsSync(path.join(__dirname, 'oakline-sr22-content-export.xml'))) {
  fs.copyFileSync(
    path.join(__dirname, 'oakline-sr22-content-export.xml'),
    path.join(distDir, 'oakline-sr22-content-export.xml')
  );
}

// 3. Render Homepage
console.log('Rendering Homepage...');
writePage('/', renderHomePage());

// 4. Render All SEO Pages
console.log('Rendering SEO Pages...');
data['SEO Content'].forEach(page => {
  const pageUrl = page['Page URL'];
  if (pageUrl === '/') return; // already rendered home

  const norm = pageUrl.replace(/\/$/, '') || pageUrl;
  if (locationSlugs.includes(norm) || locationSlugs.includes(norm + '/')) {
    writePage(pageUrl, renderLocationPage(page));
  } else if (servicesSlugs.includes(norm) || servicesSlugs.includes(norm + '/')) {
    writePage(pageUrl, renderServicesPage(page));
  } else {
    writePage(pageUrl, renderStandardPage(page));
  }
});

// 5. Render Blog Index
console.log('Rendering Blog Index...');
writePage('/blog/', renderBlogIndex());

// 6. Render All Blog Posts
console.log('Rendering Blog Posts...');
data['Blog Content'].forEach(post => {
  writePage(post['Page URL'], renderBlogPost(post));
});

// 7. Render 404 Page
console.log('Rendering 404 Page...');
writePage('404.html', renderNotFound());

console.log('========================================');
console.log('Production build completed successfully!');
console.log(`Output directory: ${distDir}`);
console.log('========================================');
