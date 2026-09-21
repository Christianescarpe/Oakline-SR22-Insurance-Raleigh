const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

const data = JSON.parse(fs.readFileSync(path.join(__dirname, 'all_sheets_data.json'), 'utf8'));
const themeCss = fs.readFileSync(path.join(__dirname, 'oakline-sr22-theme', 'style.css'), 'utf8');

// Map of all SEO pages by URL
const seoPagesMap = new Map();
data['SEO Content'].forEach(p => {
  const normUrl = p['Page URL'].replace(/\/$/, '') || '/';
  seoPagesMap.set(normUrl, p);
  if (normUrl !== '/') {
    seoPagesMap.set(normUrl + '/', p);
  }
});

// Map of all Blog posts by URL
const blogPostsMap = new Map();
data['Blog Content'].forEach(b => {
  const normUrl = b['Page URL'].replace(/\/$/, '');
  blogPostsMap.set(normUrl, b);
  blogPostsMap.set(normUrl + '/', b);
});

function parseH2Sections(html) {
  if (!html) return { intro: '', sections: [] };
  const parts = html.split(/(?=<h2>)/i);
  const intro = parts.shift() || '';
  const sections = parts.map(p => p.trim()).filter(Boolean);
  return { intro, sections };
}

function renderHeader(activeUrl) {
  return `
  <!-- Top Utility Bar -->
  <div class="top-bar">
    <div class="container">
      <div class="top-bar-inner">
        <div class="top-bar-info">
          <div class="top-bar-item">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
            <span>704 Glenwood Ave ste d, Raleigh, NC 27605</span>
          </div>
          <div class="top-bar-item">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            <a href="tel:+19842051805"><strong>(984) 205-1805</strong></a>
          </div>
        </div>
        <div>
          <span style="color: var(--accent-gold); font-weight: 700; font-size: 12px; letter-spacing: 0.5px;">SAME-DAY NCDMV FILING ADVISORS</span>
        </div>
      </div>
    </div>
  </div>

  <header class="site-header">
    <div class="container">
      <div class="header-inner">
        <a href="/" class="site-brand">
          <div class="brand-icon-insurx">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
            </svg>
          </div>
          <div class="brand-name">
            Oakline <span>SR22</span>
          </div>
        </a>

        <nav class="site-nav" id="siteNav">
          <ul class="nav-links">
            <li class="nav-item ${activeUrl === '/' ? 'active' : ''}">
              <a href="/" class="nav-link">Home</a>
            </li>
            <li class="nav-item has-dropdown ${['what-is-sr22', 'how-to-get-an-sr22-in-raleigh', 'non-owners-sr22-insurance'].some(s => activeUrl.includes(s)) ? 'active' : ''}">
              <a href="/what-is-sr22/" class="nav-link">
                SR22 Insurance
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9l6 6 6-6"/></svg>
              </a>
              <ul class="dropdown-menu">
                <li class="dropdown-item"><a href="/what-is-sr22/">What is SR-22?</a></li>
                <li class="dropdown-item"><a href="/how-to-get-an-sr22-in-raleigh/">Reinstatement Guide</a></li>
                <li class="dropdown-item"><a href="/non-owners-sr22-insurance/">Non-Owners SR-22 Insurance</a></li>
              </ul>
            </li>
            <li class="nav-item has-dropdown">
              <a href="/cary-nc/" class="nav-link">
                Locations
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9l6 6 6-6"/></svg>
              </a>
              <ul class="dropdown-menu">
                <li class="dropdown-item"><a href="/cary-nc/">Cary, NC</a></li>
                <li class="dropdown-item"><a href="/apex-nc/">Apex, NC</a></li>
                <li class="dropdown-item"><a href="/wake-forest-nc/">Wake Forest, NC</a></li>
                <li class="dropdown-item"><a href="/garner-nc/">Garner, NC</a></li>
                <li class="dropdown-item"><a href="/holly-springs-nc/">Holly Springs, NC</a></li>
                <li class="dropdown-item"><a href="/morrisville-nc/">Morrisville, NC</a></li>
                <li class="dropdown-item"><a href="/clayton-nc/">Clayton, NC</a></li>
                <li class="dropdown-item"><a href="/fuquay-varina-nc/">Fuquay-Varina, NC</a></li>
                <li class="dropdown-item"><a href="/knightdale-nc/">Knightdale, NC</a></li>
                <li class="dropdown-item"><a href="/durham-nc/">Durham, NC</a></li>
              </ul>
            </li>
            <li class="nav-item ${activeUrl.includes('/faq') ? 'active' : ''}">
              <a href="/faq/" class="nav-link">FAQ</a>
            </li>
            <li class="nav-item ${activeUrl.includes('/blog') ? 'active' : ''}">
              <a href="/blog/" class="nav-link">Blog</a>
            </li>
            <li class="nav-item ${activeUrl.includes('contact-us') ? 'active' : ''}">
              <a href="/contact-us/" class="nav-link">Contact</a>
            </li>
          </ul>
        </nav>

        <div style="display: flex; align-items: center; gap: 14px;">
          <a href="tel:+19842051805" class="btn-emerald">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            (984) 205-1805
          </a>
          <button class="mobile-nav-toggle" aria-label="Toggle navigation" onclick="document.getElementById('siteNav').classList.toggle('is-open')">
            &#9776;
          </button>
        </div>
      </div>
    </div>
  </header>`;
}

function renderFooter() {
  return `
  <footer class="site-footer">
    <div class="container">
      <div class="footer-top">
        <div class="footer-col">
          <h5>Oakline SR22 Insurance Raleigh</h5>
          <p>Helping high-risk North Carolina motorists secure dependable SR-22 and financial responsibility coverage quickly, affordably, and accurately across Raleigh and the Greater Triangle.</p>
          <div class="footer-contact-item">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
            <span>704 Glenwood Ave ste d, Raleigh, NC 27605</span>
          </div>
          <div class="footer-contact-item">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            <a href="tel:+19842051805" style="color: #ffffff; font-weight: 700;">(984) 205-1805</a>
          </div>
        </div>

        <div class="footer-col">
          <h5>Quick Links</h5>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/what-is-sr22/">What is SR-22?</a></li>
            <li><a href="/how-to-get-an-sr22-in-raleigh/">Raleigh Reinstatement Guide</a></li>
            <li><a href="/non-owners-sr22-insurance/">Non-Owners SR-22 Insurance</a></li>
            <li><a href="/faq/">Frequently Asked Questions</a></li>
            <li><a href="/blog/">Insurance Blog & Guides</a></li>
            <li><a href="/contact-us/">Contact Raleigh Office</a></li>
          </ul>
        </div>

        <div class="footer-col">
          <h5>Service Areas</h5>
          <ul>
            <li><a href="/cary-nc/">Cary, NC</a></li>
            <li><a href="/apex-nc/">Apex, NC</a></li>
            <li><a href="/wake-forest-nc/">Wake Forest, NC</a></li>
            <li><a href="/garner-nc/">Garner, NC</a></li>
            <li><a href="/holly-springs-nc/">Holly Springs, NC</a></li>
            <li><a href="/morrisville-nc/">Morrisville, NC</a></li>
            <li><a href="/clayton-nc/">Clayton, NC</a></li>
            <li><a href="/fuquay-varina-nc/">Fuquay-Varina, NC</a></li>
            <li><a href="/knightdale-nc/">Knightdale, NC</a></li>
            <li><a href="/durham-nc/">Durham, NC</a></li>
          </ul>
        </div>

        <div class="footer-col">
          <h5>Compliance & Filings</h5>
          <p>Oakline SR22 Insurance Raleigh assists drivers with same-day electronic certificate filings with the North Carolina Division of Motor Vehicles (NCDMV).</p>
          <p>North Carolina requires uninterrupted liability coverage during your certificate mandate. For official state mandates, refer to the <a href="https://www.ncdot.gov/dmv/title-registration/insurance-requirements/Pages/default.aspx" target="_blank" rel="noopener" style="color: #60a5fa; text-decoration: underline;">NCDMV insurance requirements portal</a>.</p>
          <div style="margin-top: 16px;">
            <a href="/contact-us/" class="btn-emerald" style="font-size: 13px; padding: 8px 16px;">Request Quote Today</a>
          </div>
        </div>
      </div>

      <!-- Google Maps Embed -->
      <div class="footer-map" style="margin: 40px 0 20px; border-radius: 12px; overflow: hidden; border: 1px solid #262e3d; box-shadow: 0 4px 20px rgba(0,0,0,0.3);">
        <div style="background: #151a23; padding: 12px 20px; border-bottom: 1px solid #262e3d; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 10px;">
          <div style="display: flex; align-items: center; gap: 8px; color: #ffffff; font-weight: 600; font-size: 14px;">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#00a877" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
            <span>Oakline SR22 Insurance Raleigh Office Location</span>
          </div>
          <span style="color: #94a3b8; font-size: 13px;">704 Glenwood Ave ste d, Raleigh, NC 27605</span>
        </div>
        <div style="position: relative; width: 100%; height: 350px;">
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3236.4445834838666!2d-78.6467983!3d35.7890175!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89ac5f369e31737f%3A0x95554583c034a8f9!2s!5e0!3m2!1sen!2sph!4v1789980367271!5m2!1sen!2sph" width="600" height="450" style="border:0; width: 100%; height: 100%; display: block;" allowfullscreen="" loading="lazy" referrerpolicy="strict-origin-when-cross-origin"></iframe>
        </div>
      </div>

      <div class="footer-bottom">
        <p>&copy; ${new Date().getFullYear()} Oakline SR22 Insurance Raleigh. All rights reserved.</p>
        <p>704 Glenwood Ave ste d, Raleigh, NC 27605 | Phone: <a href="tel:+19842051805">(984) 205-1805</a></p>
      </div>
    </div>
  </footer>`;
}

function renderFullPage(title, metaDesc, bodyHtml, activeUrl) {
  const freshCss = fs.readFileSync(path.join(__dirname, 'oakline-sr22-theme', 'style.css'), 'utf8');
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="google-site-verification" content="VCJGx2cffT1IY6_QZEKkcK4uMx9PGYDzdnZo6sYk5yg" />
  <title>${title}</title>
  <meta name="description" content="${metaDesc}">
  <link rel="stylesheet" href="/style.css">
  <style>${freshCss}</style>
</head>
<body>
  ${renderHeader(activeUrl)}
  ${bodyHtml}
  ${renderFooter()}
</body>
</html>`;
}

const blogImages = [
  '/assets/images/hero-driver.webp',
  '/assets/images/insurance-calculator.webp',
  '/assets/images/reinstated-driving.webp',
  '/assets/images/customer-handshake.webp',
  '/assets/images/hero-driver.webp',
  '/assets/images/insurance-calculator.webp'
];

function renderBlogCardsHtml(count = 6) {
  return data['Blog Content'].slice(0, count).map((b, idx) => `
    <article class="blog-card">
      <div class="blog-card-img-placeholder">
        <img src="${blogImages[idx % blogImages.length]}" alt="${b.Page}" style="width: 100%; height: 100%; object-fit: cover;">
        <span class="blog-card-keyword">${b['Target Keyword']}</span>
      </div>
      <div class="blog-card-body">
        <h3 class="blog-card-title">${b.Page}</h3>
        <div class="blog-card-desc">${b['Meta Description']}</div>
        <a href="${b['Page URL']}" class="blog-card-link">Read Full Guide &rarr;</a>
      </div>
    </article>
  `).join('');
}

function renderHomePage() {
  const homeData = data['SEO Content'][0];
  const title = homeData['SEO Title'];
  const metaDesc = homeData['Meta Description'];

  const bodyHtml = `
  <!-- SECTION 0: Hero Section (H1 + Lead Intro) -->
  <section class="insurx-hero">
    <div class="container">
      <div class="insurx-hero-grid">
        <div class="insurx-hero-content">
          <span class="gold-badge">TAILORED SOLUTIONS</span>
          <h1>SR-22 Insurance in Raleigh, North Carolina</h1>
          <p>Regaining your driver's license after a suspension in the Triangle shouldn't be complicated or stressful. At Oakline SR22 Insurance Raleigh, our focus is clear: helping high-risk North Carolina motorists secure dependable SR-22 and financial responsibility coverage quickly, affordably, and accurately. Whether you own a vehicle, borrow family transportation, or manage commercial operations, our dedicated Raleigh agents understand North Carolina DMV regulations and help you get back on the road without unnecessary hassle.</p>
          <p style="margin-top: -12px; margin-bottom: 28px; font-size: 15.5px; opacity: 0.95;">Visit our office at 704 Glenwood Ave ste d, Raleigh, NC 27605, or call <a href="tel:+19842051805" style="color: #ffffff; text-decoration: underline; font-weight: 700;">(984) 205-1805</a> right now to consult with a high-risk insurance advisor.</p>

          <div class="insurx-hero-actions">
            <a href="tel:+19842051805" class="btn-emerald">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              Call (984) 205-1805
            </a>
            <a href="/how-to-get-an-sr22-in-raleigh/" class="btn-outline-white">Reinstatement Guide</a>
          </div>
        </div>

        <div class="insurx-hero-card">
          <img src="/assets/images/hero-driver.webp" alt="Oakline SR-22 Insurance Raleigh Driver">
          <span class="gold-badge" style="margin-bottom: 10px;">Raleigh Office</span>
          <h3 style="font-size: 20px; font-weight: 800; margin-bottom: 8px; color: #0f172a;">Fast License Reinstatement</h3>
          <p style="color: #64748b; font-size: 14px; margin-bottom: 16px;">Visit our office at 704 Glenwood Ave ste d, Raleigh, NC 27605, or call <a href="tel:+19842051805">(984) 205-1805</a> right now to consult with a high-risk insurance advisor.</p>
          <div class="hero-card-contact">
            <div style="font-size: 11px; font-weight: 700; text-transform: uppercase; color: #64748b; margin-bottom: 4px;">Direct High-Risk Line</div>
            <a href="tel:+19842051805" style="font-size: 19px; font-weight: 800; color: var(--primary);">(984) 205-1805</a>
          </div>
          <div style="font-size: 12.5px; color: #64748b; line-height: 1.5;">
            <strong>Glenwood South Location:</strong><br>
            704 Glenwood Ave ste d, Raleigh, NC 27605<br>
            <span style="color: var(--primary); font-weight: 600;">Same-Day Quotes &amp; NCDMV Submissions</span>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- SECTION: 4-Stat Strip (Directly Below Hero) -->
  <section class="section-stats-strip">
    <div class="container">
      <div class="stats-strip-grid">
        <div class="stat-item-box">
          <div class="stat-icon-circle">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M20 6L9 17l-5-5"/></svg>
          </div>
          <div>
            <div class="stat-item-title">Same-Day Filing</div>
            <div class="stat-item-sub">Electronic NCDMV submission</div>
          </div>
        </div>
        <div class="stat-item-box">
          <div class="stat-icon-circle">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
          </div>
          <div>
            <div class="stat-item-title">Cheapest Rates</div>
            <div class="stat-item-sub">DWI &amp; suspension specialists</div>
          </div>
        </div>
        <div class="stat-item-box">
          <div class="stat-icon-circle">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="8.5" cy="7" r="4"/></svg>
          </div>
          <div>
            <div class="stat-item-title">Non-Owner Option</div>
            <div class="stat-item-sub">Driver-only economical coverage</div>
          </div>
        </div>
        <div class="stat-item-box">
          <div class="stat-icon-circle">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
          </div>
          <div>
            <div class="stat-item-title">Glenwood Ave Team</div>
            <div class="stat-item-sub">Local Raleigh NC advisors</div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- SECTION 1 (H2 #1): Why Raleigh Drivers Rely on Oakline (Dark Showcase) -->
  <section class="section-dark-showcase">
    <div class="container">
      <div style="max-width: 820px; margin-bottom: 36px;">
        <span class="gold-badge">EVERYDAY NEEDS</span>
        <h2 style="font-size: 34px; font-weight: 800; margin-bottom: 16px;">Why Raleigh Drivers Rely on Oakline</h2>
        <p style="font-size: 16.5px; color: #cbd5e1; line-height: 1.7; margin-bottom: 16px;">We bring extensive experience assisting drivers across Raleigh, Wake County, and neighboring communities who need prompt license restoration. Dealing with a suspended driver's license causes disruption to employment, family commitments, and daily life. That's why our process centers around direct, compassionate service. We evaluate your background, timeline, and budget before identifying an insurer that matches your precise situation.</p>
        <p style="font-size: 16.5px; color: #cbd5e1; line-height: 1.7;">Mistakes on state insurance paperwork can delay driver license reinstatement for weeks. Oakline submits certificates promptly and correctly so your documentation moves forward smoothly. If you're wondering how the certification works, our <a href="/what-is-sr22/" style="color: #34d399; font-weight: 700; text-decoration: underline;">comprehensive guide to SR-22 filing rules</a> explains what certificates entail and why North Carolina mandates proof of liability.</p>
      </div>

      <div class="dark-cards-grid">
        <div class="dark-feature-card">
          <div class="dark-card-icon-bubble">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
          </div>
          <div>
            <h3>Prompt Restoration</h3>
            <p>Extensive experience assisting Raleigh and Wake County drivers with prompt license restoration.</p>
          </div>
          <a href="/what-is-sr22/">Read SR-22 Rules &rarr;</a>
        </div>

        <div class="dark-feature-card">
          <div class="dark-card-icon-bubble">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
          </div>
          <div>
            <h3>Accurate DMV Filings</h3>
            <p>Prevent paperwork mistakes that delay license reinstatement for weeks with verified electronic submissions.</p>
          </div>
          <a href="/how-to-get-an-sr22-in-raleigh/">Filing Guide &rarr;</a>
        </div>

        <div class="dark-feature-card">
          <div class="dark-card-icon-bubble">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg>
          </div>
          <div>
            <h3>Compassionate Support</h3>
            <p>Direct, respectful guidance evaluating your background, timeline, and budget.</p>
          </div>
          <a href="/non-owners-sr22-insurance/">Non-Owner Plans &rarr;</a>
        </div>

        <div class="dark-feature-card">
          <div class="dark-card-icon-bubble">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
          </div>
          <div>
            <h3>Local Glenwood Team</h3>
            <p>Connect with a Raleigh specialist right now at (984) 205-1805 or visit our Glenwood South office.</p>
          </div>
          <a href="tel:+19842051805">Call Now &rarr;</a>
        </div>
      </div>
    </div>
  </section>

  <!-- SECTION 2 (H2 #2): Reasons North Carolina Drivers Must File SR-22 Proof -->
  <section class="content-h2-section section-bg-white" id="reasons">
    <div class="container">
      <div class="h2-section-inner">
        <div class="h2-section-card">
          <span class="gold-badge">STATE REQUIREMENTS</span>
          <h2 class="h2-section-heading">Reasons North Carolina Drivers Must File SR-22 Proof</h2>
          <div class="h2-section-body">
            <p>The state of North Carolina commonly requires financial responsibility documentation following serious motor vehicle violations, such as:</p>
            <ul>
              <li>Driving while impaired (DWI / DUI) convictions</li>
              <li>Operating a motor vehicle without adequate liability coverage</li>
              <li>Accumulating excessive DMV traffic violation points within a short timeframe</li>
              <li>Driving while license revoked (DWLR) or suspended</li>
              <li>Reinstating driving privileges following an at-fault uninsured accident</li>
            </ul>
            <p>If you've received official notice from the NCDMV, our <a href="/how-to-get-an-sr22-in-raleigh/">Raleigh license reinstatement instructions</a> outlines every stage from quote evaluation to license reinstatement.</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- SECTION 3 (H2 #3): Flexible Coverage for Vehicle Owners and Non-Owners -->
  <section class="content-h2-section section-bg-light">
    <div class="container">
      <div class="h2-section-inner">
        <div class="h2-section-card">
          <span class="teal-badge">POLICY OPTIONS</span>
          <h2 class="h2-section-heading">Flexible Coverage for Vehicle Owners and Non-Owners</h2>
          <div class="h2-section-body">
            <p>Not every motorist who requires financial responsibility certification owns an automobile. If you don't own a car but must satisfy state DMV requirements to lift a suspension, non-owner insurance provides an economical solution. Review our <a href="/non-owners-sr22-insurance/">non-owner SR-22 policy options</a> to discover how driver-only liability coverage functions and how much you can save on premiums.</p>
            <p>We also serve motorcyclists, commercial drivers, and people operating employer or rented vehicles across the Triangle. Regardless of your record, our team finds tailored solutions.</p>
            
            <div style="margin-top: 24px; padding: 20px; background: var(--bg-subtle); border-radius: var(--radius-md); border: 1px solid var(--border-color); display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 16px;">
              <div>
                <strong style="color: #0f172a; font-size: 15px;">Need Non-Owner SR-22 Insurance in Raleigh?</strong>
                <div style="color: var(--text-muted); font-size: 13.5px;">Driver-only coverage fulfills all NCDMV reinstatement mandates at lower costs.</div>
              </div>
              <a href="tel:+19842051805" class="btn-emerald">Call (984) 205-1805</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- SECTION 4 (H2 #4): Rapid Electronic DMV Filings (Grey Callout Banner) -->
  <section class="section-grey-callout">
    <div class="container">
      <span class="gold-badge" style="background: rgba(254, 243, 199, 0.9);">SAME-DAY SUBMISSION</span>
      <h2>Rapid Electronic DMV Filings</h2>
      <p>North Carolina requires uninterrupted liability coverage during your mandate. A coverage lapse triggers immediate DMV notice, leading to renewed suspensions and additional restoration fees. According to the <a href="https://www.ncdot.gov/dmv/title-registration/insurance-requirements/Pages/default.aspx" target="_blank" rel="noopener" style="color: #ffffff; text-decoration: underline; font-weight: 700;">official North Carolina DMV insurance mandate</a>, maintaining active proof of coverage is essential to keep your driver's license valid. Oakline monitors your renewal dates to ensure continuous compliance.</p>
      <div>
        <a href="tel:+19842051805" class="btn-emerald">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
          Call (984) 205-1805 for Immediate Filing
        </a>
      </div>
    </div>
  </section>

  <!-- SECTION 5 (H2 #5): Serving Raleigh and the Greater Triangle -->
  <section class="content-h2-section section-bg-white">
    <div class="container">
      <div style="text-align: center; max-width: 800px; margin: 0 auto 40px;">
        <span class="teal-badge">LOCAL COVERAGE</span>
        <h2 style="font-size: 32px; font-weight: 800; color: #0f172a; margin-bottom: 14px;">Serving Raleigh and the Greater Triangle</h2>
        <p style="font-size: 16.5px; color: var(--text-muted); line-height: 1.65;">From our Glenwood South office, Oakline SR22 Insurance Raleigh serves motorists throughout Wake County, Durham, and surrounding areas including Cary, Apex, Wake Forest, Garner, Holly Springs, Morrisville, Clayton, Fuquay-Varina, and Knightdale. We frequently turn around valid quotes and paperwork within the same business day.</p>
      </div>

      <div class="locations-grid">
        <div class="location-card">
          <div>
            <div class="location-city">Cary</div>
            <div class="location-state">Wake County, NC</div>
          </div>
          <a href="/cary-nc/" class="location-link">View Cary Info &rarr;</a>
        </div>
        <div class="location-card">
          <div>
            <div class="location-city">Apex</div>
            <div class="location-state">Wake County, NC</div>
          </div>
          <a href="/apex-nc/" class="location-link">View Apex Info &rarr;</a>
        </div>
        <div class="location-card">
          <div>
            <div class="location-city">Wake Forest</div>
            <div class="location-state">Wake County, NC</div>
          </div>
          <a href="/wake-forest-nc/" class="location-link">View Wake Forest Info &rarr;</a>
        </div>
        <div class="location-card">
          <div>
            <div class="location-city">Garner</div>
            <div class="location-state">Wake County, NC</div>
          </div>
          <a href="/garner-nc/" class="location-link">View Garner Info &rarr;</a>
        </div>
        <div class="location-card">
          <div>
            <div class="location-city">Holly Springs</div>
            <div class="location-state">Wake County, NC</div>
          </div>
          <a href="/holly-springs-nc/" class="location-link">View Holly Springs Info &rarr;</a>
        </div>
        <div class="location-card">
          <div>
            <div class="location-city">Morrisville</div>
            <div class="location-state">Wake County, NC</div>
          </div>
          <a href="/morrisville-nc/" class="location-link">View Morrisville Info &rarr;</a>
        </div>
        <div class="location-card">
          <div>
            <div class="location-city">Clayton</div>
            <div class="location-state">Johnston County, NC</div>
          </div>
          <a href="/clayton-nc/" class="location-link">View Clayton Info &rarr;</a>
        </div>
        <div class="location-card">
          <div>
            <div class="location-city">Fuquay-Varina</div>
            <div class="location-state">Wake County, NC</div>
          </div>
          <a href="/fuquay-varina-nc/" class="location-link">View Fuquay-Varina Info &rarr;</a>
        </div>
        <div class="location-card">
          <div>
            <div class="location-city">Knightdale</div>
            <div class="location-state">Wake County, NC</div>
          </div>
          <a href="/knightdale-nc/" class="location-link">View Knightdale Info &rarr;</a>
        </div>
        <div class="location-card">
          <div>
            <div class="location-city">Durham</div>
            <div class="location-state">Durham County, NC</div>
          </div>
          <a href="/durham-nc/" class="location-link">View Durham Info &rarr;</a>
        </div>
      </div>
    </div>
  </section>

  <!-- SECTION: Carrier Partner Logo Strip -->
  <section class="carrier-ticker-strip">
    <div class="container">
      <div style="text-align: center; font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; color: var(--text-light); margin-bottom: 20px;">
        Top Rated High-Risk Carriers &amp; NCDMV Transmission Networks
      </div>
      <div class="carrier-logos-grid">
        <div class="carrier-logo-item">Progressive</div>
        <div class="carrier-logo-item">National General</div>
        <div class="carrier-logo-item">Dairyland</div>
        <div class="carrier-logo-item">Kemper</div>
        <div class="carrier-logo-item">Bristol West</div>
        <div class="carrier-logo-item">Foremost</div>
      </div>
    </div>
  </section>

  <!-- SECTION 6 (H2 #6): Questions About NC Driving Requirements? -->
  <section class="content-h2-section section-bg-light">
    <div class="container">
      <div class="h2-section-inner">
        <div class="h2-section-card">
          <span class="gold-badge">HELP &amp; SUPPORT</span>
          <h2 class="h2-section-heading">Questions About NC Driving Requirements?</h2>
          <div class="h2-section-body">
            <p>Insurance regulations can be confusing when dealing with DMV paperwork. Browse our <a href="/faq/">helpful SR-22 questions and answers</a> page for immediate clarity, or visit our <a href="/contact-us/">Raleigh contact office</a> to connect directly with an insurance professional.</p>
            <div style="margin-top: 20px;">
              <a href="/faq/" class="btn-dark" style="margin-right: 12px;">Visit FAQ Hub</a>
              <a href="/contact-us/" class="btn-emerald">Contact Office</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- SECTION 7 (H2 #7): The Oakline Commitment -->
  <section class="content-h2-section section-bg-white">
    <div class="container">
      <div class="h2-section-inner">
        <div class="h2-section-card" style="border-left: 4px solid var(--primary);">
          <span class="teal-badge">OUR DEDICATION</span>
          <h2 class="h2-section-heading">The Oakline Commitment</h2>
          <div class="h2-section-body">
            <p>Unlike agencies that view high-risk filings as a sideline, SR-22 and financial responsibility certificates are Oakline's daily specialty. We know which underwriters offer the lowest rates for DWI convictions, which carriers transmit certificates quickest to the NCDMV, and how to prevent costly documentation errors. Our agents believe in honest, practical guidance—recommending non-owner policies whenever they save you money while fulfilling legal requirements.</p>
            <p>Stop by 704 Glenwood Ave ste d, Raleigh, NC 27605 or call Oakline SR22 Insurance Raleigh at <a href="tel:+19842051805">(984) 205-1805</a> today for your free, no-obligation quote.</p>
            <div style="margin-top: 24px; display: flex; align-items: center; gap: 16px; flex-wrap: wrap;">
              <a href="tel:+19842051805" class="btn-emerald">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                Call (984) 205-1805 Today
              </a>
              <a href="/contact-us/" class="btn-dark">Visit Raleigh Office</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- SECTION: Blog & Reinstatement Guides Showcase -->
  <section class="section-blog">
    <div class="container">
      <div style="text-align: center; max-width: 800px; margin: 0 auto 40px;">
        <span class="gold-badge">DRIVER GUIDES</span>
        <h2 style="font-size: 32px; font-weight: 800; color: #0f172a; margin-bottom: 12px;">Insurance &amp; License Reinstatement Guides</h2>
        <p style="font-size: 16px; color: var(--text-muted);">Practical guides and expert answers to help North Carolina drivers navigate high-risk auto insurance and certificate filings.</p>
      </div>

      <div class="blog-grid">
        ${renderBlogCardsHtml(6)}
      </div>
    </div>
  </section>`;

  return renderFullPage(title, metaDesc, bodyHtml, '/');
}

// LOCATION PAGES: Identical design as homepage (media_1789716352948.jpg)
function renderLocationPage(pageData) {
  const title = pageData['SEO Title'];
  const metaDesc = pageData['Meta Description'];
  const locationTitle = pageData.Page.replace(' (Location Page)', '');
  const pageUrl = pageData['Page URL'];
  const { intro, sections } = parseH2Sections(pageData['Page Content (HTML)']);
  const cleanIntro = intro.replace(/<h1[^>]*>.*?<\/h1>/si, '').trim();

  // First H2 is for the dark midnight showcase section
  const firstSec = sections.length > 0 ? sections[0] : '';
  const remainingSecs = sections.slice(1);

  const remainingSectionsHtml = remainingSecs.map((sec, i) => {
    const bgClass = (i % 2 === 0) ? 'section-bg-white' : 'section-bg-light';
    const badgeClass = (i % 2 === 0) ? 'gold-badge' : 'teal-badge';
    return `
    <section class="content-h2-section ${bgClass}">
      <div class="container">
        <div class="h2-section-inner">
          <div class="h2-section-card">
            <span class="${badgeClass}">NCDMV COMPLIANCE</span>
            <div class="h2-section-body">
              ${sec}
            </div>
          </div>
        </div>
      </div>
    </section>`;
  }).join('\n');

  const bodyHtml = `
  <!-- SECTION 0: Location Hero (Matches Homepage Hero) -->
  <section class="insurx-hero">
    <div class="container">
      <div class="insurx-hero-grid">
        <div class="insurx-hero-content">
          <span class="gold-badge">TAILORED SOLUTIONS</span>
          <h1>SR-22 Insurance in ${locationTitle}</h1>
          <div class="hero-intro-text" style="font-size: 17.5px; color: #f1f5f9; line-height: 1.65; margin-bottom: 24px;">
            ${cleanIntro}
          </div>

          <div class="insurx-hero-actions">
            <a href="tel:+19842051805" class="btn-emerald">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              Call (984) 205-1805
            </a>
            <a href="/how-to-get-an-sr22-in-raleigh/" class="btn-outline-white">Reinstatement Guide</a>
          </div>
        </div>

        <div class="insurx-hero-card">
          <img src="/assets/images/hero-driver.webp" alt="${locationTitle} SR-22 Insurance">
          <span class="gold-badge" style="margin-bottom: 10px;">${locationTitle} Service</span>
          <h3 style="font-size: 20px; font-weight: 800; margin-bottom: 8px; color: #0f172a;">Fast License Reinstatement</h3>
          <p style="color: #64748b; font-size: 14px; margin-bottom: 16px;">Oakline provides immediate SR-22 quotes, electronic NCDMV filings, and affordable high-risk rates for ${locationTitle} motorists.</p>
          <div class="hero-card-contact">
            <div style="font-size: 11px; font-weight: 700; text-transform: uppercase; color: #64748b; margin-bottom: 4px;">Direct High-Risk Line</div>
            <a href="tel:+19842051805" style="font-size: 19px; font-weight: 800; color: var(--primary);">(984) 205-1805</a>
          </div>
          <div style="font-size: 12.5px; color: #64748b; line-height: 1.5;">
            <strong>Triangle Regional Office:</strong><br>
            704 Glenwood Ave ste d, Raleigh, NC 27605<br>
            <span style="color: var(--primary); font-weight: 600;">Same-Day Quotes &amp; NCDMV Submissions</span>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- SECTION: 4-Stat Strip (Directly Below Hero) -->
  <section class="section-stats-strip">
    <div class="container">
      <div class="stats-strip-grid">
        <div class="stat-item-box">
          <div class="stat-icon-circle">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M20 6L9 17l-5-5"/></svg>
          </div>
          <div>
            <div class="stat-item-title">Same-Day Filing</div>
            <div class="stat-item-sub">Electronic NCDMV submission</div>
          </div>
        </div>
        <div class="stat-item-box">
          <div class="stat-icon-circle">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
          </div>
          <div>
            <div class="stat-item-title">Cheapest Rates</div>
            <div class="stat-item-sub">DWI &amp; suspension specialists</div>
          </div>
        </div>
        <div class="stat-item-box">
          <div class="stat-icon-circle">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="8.5" cy="7" r="4"/></svg>
          </div>
          <div>
            <div class="stat-item-title">Non-Owner Option</div>
            <div class="stat-item-sub">Driver-only economical coverage</div>
          </div>
        </div>
        <div class="stat-item-box">
          <div class="stat-icon-circle">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
          </div>
          <div>
            <div class="stat-item-title">Glenwood Ave Team</div>
            <div class="stat-item-sub">Local Raleigh NC advisors</div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- SECTION 1 (First H2): Dark Midnight Showcase Section -->
  ${firstSec ? `
  <section class="section-dark-showcase">
    <div class="container">
      <div style="max-width: 860px; margin-bottom: 36px;">
        <span class="gold-badge">LOCAL EXPERTISE</span>
        <div class="dark-showcase-content">
          ${firstSec}
        </div>
      </div>

      <div class="dark-cards-grid">
        <div class="dark-feature-card">
          <div class="dark-card-icon-bubble">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
          </div>
          <div>
            <h3>Rapid Restorations</h3>
            <p>Specialized assistance helping local motorists regain valid NC driving privileges quickly.</p>
          </div>
          <a href="/what-is-sr22/">SR-22 Basics &rarr;</a>
        </div>

        <div class="dark-feature-card">
          <div class="dark-card-icon-bubble">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
          </div>
          <div>
            <h3>Error-Free Submissions</h3>
            <p>Direct electronic filing with the NCDMV eliminates processing delays and clerical rejections.</p>
          </div>
          <a href="/how-to-get-an-sr22-in-raleigh/">Filing Steps &rarr;</a>
        </div>

        <div class="dark-feature-card">
          <div class="dark-card-icon-bubble">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg>
          </div>
          <div>
            <h3>Non-Owner Savings</h3>
            <p>Inexpensive driver-only liability protection if you do not own a personal vehicle.</p>
          </div>
          <a href="/non-owners-sr22-insurance/">Non-Owner Guide &rarr;</a>
        </div>

        <div class="dark-feature-card">
          <div class="dark-card-icon-bubble">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
          </div>
          <div>
            <h3>Immediate Quotes</h3>
            <p>Speak with a dedicated advisor right now at (984) 205-1805 for rate comparisons.</p>
          </div>
          <a href="tel:+19842051805">Call (984) 205-1805 &rarr;</a>
        </div>
      </div>
    </div>
  </section>` : ''}

  <!-- SUBSEQUENT SECTIONS: Each H2 in its own distinct section -->
  ${remainingSectionsHtml}

  <!-- SECTION: Grey Callout Banner -->
  <section class="section-grey-callout">
    <div class="container">
      <span class="gold-badge" style="background: rgba(254, 243, 199, 0.9);">FAST LICENSE RESTORATION</span>
      <h2>Need Immediate Reinstatement Support?</h2>
      <p>Oakline SR22 Insurance Raleigh serves ${locationTitle} and the entire Triangle with same-day electronic DMV certificates, low down payments, and honest guidance.</p>
      <div>
        <a href="tel:+19842051805" class="btn-emerald">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
          Call (984) 205-1805 for Immediate Filing
        </a>
      </div>
    </div>
  </section>

  <!-- SECTION: Carrier Partner Logo Strip -->
  <section class="carrier-ticker-strip">
    <div class="container">
      <div style="text-align: center; font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; color: var(--text-light); margin-bottom: 20px;">
        Top Rated High-Risk Carriers &amp; NCDMV Transmission Networks
      </div>
      <div class="carrier-logos-grid">
        <div class="carrier-logo-item">Progressive</div>
        <div class="carrier-logo-item">National General</div>
        <div class="carrier-logo-item">Dairyland</div>
        <div class="carrier-logo-item">Kemper</div>
        <div class="carrier-logo-item">Bristol West</div>
        <div class="carrier-logo-item">Foremost</div>
      </div>
    </div>
  </section>

  <!-- SECTION: Triangle Neighboring Service Areas Grid -->
  <section class="content-h2-section section-bg-white">
    <div class="container">
      <div style="text-align: center; max-width: 800px; margin: 0 auto 40px;">
        <span class="teal-badge">REGIONAL COVERAGE</span>
        <h2 style="font-size: 32px; font-weight: 800; color: #0f172a; margin-bottom: 14px;">Serving the Entire Raleigh Triangle</h2>
        <p style="font-size: 16px; color: var(--text-muted);">In addition to ${locationTitle}, Oakline provides same-day SR-22 electronic DMV filings across all neighboring Triangle communities.</p>
      </div>

      <div class="locations-grid">
        <div class="location-card">
          <div>
            <div class="location-city">Raleigh</div>
            <div class="location-state">Glenwood South Office</div>
          </div>
          <a href="/" class="location-link">View Raleigh Info &rarr;</a>
        </div>
        <div class="location-card">
          <div>
            <div class="location-city">Cary</div>
            <div class="location-state">Wake County, NC</div>
          </div>
          <a href="/cary-nc/" class="location-link">View Cary Info &rarr;</a>
        </div>
        <div class="location-card">
          <div>
            <div class="location-city">Apex</div>
            <div class="location-state">Wake County, NC</div>
          </div>
          <a href="/apex-nc/" class="location-link">View Apex Info &rarr;</a>
        </div>
        <div class="location-card">
          <div>
            <div class="location-city">Wake Forest</div>
            <div class="location-state">Wake County, NC</div>
          </div>
          <a href="/wake-forest-nc/" class="location-link">View Wake Forest Info &rarr;</a>
        </div>
        <div class="location-card">
          <div>
            <div class="location-city">Garner</div>
            <div class="location-state">Wake County, NC</div>
          </div>
          <a href="/garner-nc/" class="location-link">View Garner Info &rarr;</a>
        </div>
        <div class="location-card">
          <div>
            <div class="location-city">Holly Springs</div>
            <div class="location-state">Wake County, NC</div>
          </div>
          <a href="/holly-springs-nc/" class="location-link">View Holly Springs Info &rarr;</a>
        </div>
        <div class="location-card">
          <div>
            <div class="location-city">Morrisville</div>
            <div class="location-state">Wake County, NC</div>
          </div>
          <a href="/morrisville-nc/" class="location-link">View Morrisville Info &rarr;</a>
        </div>
        <div class="location-card">
          <div>
            <div class="location-city">Clayton</div>
            <div class="location-state">Johnston County, NC</div>
          </div>
          <a href="/clayton-nc/" class="location-link">View Clayton Info &rarr;</a>
        </div>
        <div class="location-card">
          <div>
            <div class="location-city">Fuquay-Varina</div>
            <div class="location-state">Wake County, NC</div>
          </div>
          <a href="/fuquay-varina-nc/" class="location-link">View Fuquay-Varina Info &rarr;</a>
        </div>
        <div class="location-card">
          <div>
            <div class="location-city">Durham</div>
            <div class="location-state">Durham County, NC</div>
          </div>
          <a href="/durham-nc/" class="location-link">View Durham Info &rarr;</a>
        </div>
      </div>
    </div>
  </section>

  <!-- SECTION: Blog & Reinstatement Guides Showcase -->
  <section class="section-blog">
    <div class="container">
      <div style="text-align: center; max-width: 800px; margin: 0 auto 40px;">
        <span class="gold-badge">DRIVER GUIDES</span>
        <h2 style="font-size: 32px; font-weight: 800; color: #0f172a; margin-bottom: 12px;">Insurance &amp; License Reinstatement Guides</h2>
        <p style="font-size: 16px; color: var(--text-muted);">Helpful answers and practical guides to help Triangle drivers navigate high-risk auto insurance and certificate filings.</p>
      </div>

      <div class="blog-grid">
        ${renderBlogCardsHtml(6)}
      </div>
    </div>
  </section>`;

  return renderFullPage(title, metaDesc, bodyHtml, pageUrl);
}

// SERVICES PAGES: Insurx Modular Service Matrix Design (media_1789716352947.jpg)
function renderServicesPage(pageData) {
  const title = pageData['SEO Title'];
  const metaDesc = pageData['Meta Description'];
  const serviceTitle = pageData.Page;
  const pageUrl = pageData['Page URL'];
  const { intro, sections } = parseH2Sections(pageData['Page Content (HTML)']);
  const cleanIntro = intro.replace(/<h1[^>]*>.*?<\/h1>/si, '').trim();

  const sectionsHtml = sections.map((sec, i) => {
    const bgClass = (i % 2 === 0) ? 'section-bg-white' : 'section-bg-light';
    const badgeClass = (i % 2 === 0) ? 'teal-badge' : 'gold-badge';
    return `
    <section class="content-h2-section ${bgClass}">
      <div class="container">
        <div class="h2-section-inner">
          <div class="h2-section-card">
            <span class="${badgeClass}">SR-22 GUIDE</span>
            <div class="h2-section-body">
              ${sec}
            </div>
          </div>
        </div>
      </div>
    </section>`;
  }).join('\n');

  const bodyHtml = `
  <!-- SECTION 0: Services Hero & Breadcrumb Banner -->
  <section class="insurx-hero" style="padding: 50px 0 70px;">
    <div class="container">
      <div style="font-size: 13px; color: #cbd5e1; margin-bottom: 16px;">
        <a href="/" style="color: #cbd5e1;">Home</a> &nbsp;/&nbsp; 
        <a href="/what-is-sr22/" style="color: #cbd5e1;">Services</a> &nbsp;/&nbsp; 
        <span style="color: #ffffff;">${serviceTitle}</span>
      </div>

      <div class="insurx-hero-grid">
        <div class="insurx-hero-content">
          <span class="gold-badge">SERVICES</span>
          <h1>${serviceTitle}</h1>
          <div class="hero-intro-text" style="font-size: 17.5px; color: #f1f5f9; line-height: 1.65; margin-bottom: 24px;">
            ${cleanIntro}
          </div>

          <div class="insurx-hero-actions">
            <a href="tel:+19842051805" class="btn-emerald">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              Call (984) 205-1805
            </a>
            <a href="/contact-us/" class="btn-outline-white">Visit Raleigh Office</a>
          </div>
        </div>

        <div class="insurx-hero-card">
          <img src="/assets/images/insurance-calculator.webp" alt="${serviceTitle} Advisor">
          <span class="gold-badge" style="margin-bottom: 10px;">Same-Day Filing</span>
          <h3 style="font-size: 20px; font-weight: 800; margin-bottom: 8px; color: #0f172a;">Direct NCDMV Submission</h3>
          <p style="color: #64748b; font-size: 14px; margin-bottom: 16px;">Oakline SR22 Insurance Raleigh transmits financial responsibility certificates electronically directly to state DMV databases.</p>
          <div class="hero-card-contact">
            <div style="font-size: 11px; font-weight: 700; text-transform: uppercase; color: #64748b; margin-bottom: 4px;">Direct High-Risk Line</div>
            <a href="tel:+19842051805" style="font-size: 19px; font-weight: 800; color: var(--primary);">(984) 205-1805</a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- SECTION: Modular Service Matrix Grid (from media_1789716352947.jpg) -->
  <section class="section-service-matrix">
    <div class="container">
      <div style="text-align: center; max-width: 760px; margin: 0 auto 40px;">
        <span class="gold-badge">COMPREHENSIVE COVERAGE</span>
        <h2 style="font-size: 32px; font-weight: 800; color: #0f172a; margin-bottom: 12px;">North Carolina Financial Responsibility Solutions</h2>
        <p style="font-size: 16px; color: var(--text-muted);">Specialized underwriting and electronic transmission options designed to lift license suspensions rapidly.</p>
      </div>

      <div class="service-matrix-grid">
        <div class="matrix-cell">
          <div>
            <svg class="matrix-cell-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            <h3>SR-22 DMV Filings</h3>
            <p>Official electronic certificates submitted directly to the NCDMV for rapid driver license restoration.</p>
          </div>
          <a href="/what-is-sr22/" style="font-weight: 700; font-size: 13.5px; color: var(--primary); margin-top: 14px;">Learn Details &rarr;</a>
        </div>

        <div class="matrix-cell highlight-emerald">
          <div>
            <svg class="matrix-cell-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="8.5" cy="7" r="4"/></svg>
            <h3>Non-Owner SR-22</h3>
            <p>Driver-only liability protection if you do not own a vehicle. Fulfills state DMV requirements at lowest monthly rates.</p>
          </div>
          <a href="/non-owners-sr22-insurance/" style="font-weight: 700; font-size: 13.5px; color: #ffffff; margin-top: 14px;">View Non-Owner &rarr;</a>
        </div>

        <div class="matrix-cell">
          <div>
            <svg class="matrix-cell-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>
            <h3>License Reinstatement</h3>
            <p>Complete step-by-step guidance navigating court requirements, DMV fees, and mandatory state timeframes.</p>
          </div>
          <a href="/how-to-get-an-sr22-in-raleigh/" style="font-weight: 700; font-size: 13.5px; color: var(--primary); margin-top: 14px;">Step-by-Step Guide &rarr;</a>
        </div>

        <div class="matrix-cell">
          <div>
            <svg class="matrix-cell-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            <h3>Same-Day Turnaround</h3>
            <p>Quotes prepared and bound immediately, with electronic certificates submitted within hours.</p>
          </div>
          <a href="tel:+19842051805" style="font-weight: 700; font-size: 13.5px; color: var(--primary); margin-top: 14px;">Call Now &rarr;</a>
        </div>

        <div class="matrix-cell">
          <div>
            <svg class="matrix-cell-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
            <h3>DWI Underwriting</h3>
            <p>We work directly with carriers that offer competitive rates for DWI / DUI convictions and points.</p>
          </div>
          <a href="/faq/" style="font-weight: 700; font-size: 13.5px; color: var(--primary); margin-top: 14px;">Questions Answered &rarr;</a>
        </div>

        <div class="matrix-cell">
          <div>
            <svg class="matrix-cell-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
            <h3>Continuous Monitoring</h3>
            <p>Automated payment monitoring to prevent unintended policy lapses that would restart state mandates.</p>
          </div>
          <a href="/contact-us/" style="font-weight: 700; font-size: 13.5px; color: var(--primary); margin-top: 14px;">Contact Office &rarr;</a>
        </div>
      </div>
    </div>
  </section>

  <!-- SECTION: We Guide Your Insurance Journey + 95% Circle Badge (from media_1789716352947.jpg) -->
  <section class="section-guide-journey">
    <div class="container">
      <div class="journey-grid">
        <div>
          <span class="gold-badge">HOW WE WORK</span>
          <h2 style="font-size: 34px; font-weight: 800; color: #0f172a; margin-bottom: 16px; line-height: 1.25;">We Guide Your Insurance Journey</h2>
          <p style="font-size: 16px; color: var(--text-muted); line-height: 1.65; margin-bottom: 24px;">At Oakline SR22 Insurance Raleigh, we eliminate the complexity and stress of state financial responsibility mandates. Our specialists examine your history, identify underwriters with the lowest rates, and ensure 100% compliant electronic submissions.</p>

          <div class="journey-features">
            <div class="journey-feat-item">
              <h4>No Judgment Service</h4>
              <p>Respectful, professional assistance tailored to your budget and timeline.</p>
            </div>
            <div class="journey-feat-item">
              <h4>Direct NCDMV Interfacing</h4>
              <p>Electronic filings sent straight to North Carolina DMV databases.</p>
            </div>
            <div class="journey-feat-item">
              <h4>Multiple Top Carriers</h4>
              <p>Comparison shop across specialized high-risk providers for cheap rates.</p>
            </div>
            <div class="journey-feat-item">
              <h4>Lapse Prevention</h4>
              <p>Active monitoring to protect your driving record from costly restarts.</p>
            </div>
          </div>
        </div>

        <div class="journey-media-box">
          <img src="/assets/images/customer-handshake.webp" alt="Oakline Insurance Customer Support Handshake">
          <div class="satisfaction-ring-badge">
            <div class="ring-num">95%</div>
            <div class="ring-label">Satisfaction</div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- SECTION: Carrier Partner Logo Strip -->
  <section class="carrier-ticker-strip">
    <div class="container">
      <div style="text-align: center; font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; color: var(--text-light); margin-bottom: 20px;">
        Top Rated High-Risk Carriers &amp; NCDMV Transmission Networks
      </div>
      <div class="carrier-logos-grid">
        <div class="carrier-logo-item">Progressive</div>
        <div class="carrier-logo-item">National General</div>
        <div class="carrier-logo-item">Dairyland</div>
        <div class="carrier-logo-item">Kemper</div>
        <div class="carrier-logo-item">Bristol West</div>
        <div class="carrier-logo-item">Foremost</div>
      </div>
    </div>
  </section>

  <!-- DISTINCT CONTENT SECTIONS: Every tagged H2 from sheet in its own section -->
  ${sectionsHtml}

  <!-- SECTION: Personalized Quote Request Form (from media_1789716352947.jpg) -->
  <section class="section-quote-form">
    <div class="container">
      <div class="quote-form-grid">
        <div>
          <span class="gold-badge">FAST QUOTE</span>
          <h2 style="font-size: 32px; font-weight: 800; color: #0f172a; margin-bottom: 14px;">Restore Your License Without Delay</h2>
          <p style="font-size: 16px; color: var(--text-muted); line-height: 1.65; margin-bottom: 24px;">Our Glenwood South team provides immediate phone evaluations and direct state certificate transmissions. Reach out today for your confidential, free rate quote.</p>
          
          <div style="background: var(--bg-subtle); padding: 24px; border-radius: var(--radius-md); border: 1px solid var(--border-color); margin-bottom: 20px;">
            <div style="font-size: 12px; font-weight: 700; text-transform: uppercase; color: var(--text-light); margin-bottom: 4px;">Direct Phone Support</div>
            <a href="tel:+19842051805" style="font-size: 24px; font-weight: 800; color: var(--primary);">(984) 205-1805</a>
            <div style="font-size: 13px; color: var(--text-muted); margin-top: 6px;">704 Glenwood Ave ste d, Raleigh, NC 27605</div>
          </div>
        </div>

        <div class="quote-form-card">
          <h2>Request SR-22 Quote</h2>
          <form onsubmit="event.preventDefault(); alert('Thank you! An Oakline advisor will contact you shortly.');">
            <div class="quote-form-row">
              <div class="quote-form-field">
                <label style="display:block; font-size: 13px; font-weight: 600; margin-bottom: 6px;">First &amp; Last Name</label>
                <input type="text" placeholder="John Doe" required>
              </div>
              <div class="quote-form-field">
                <label style="display:block; font-size: 13px; font-weight: 600; margin-bottom: 6px;">Phone Number</label>
                <input type="tel" placeholder="(984) 000-0000" required>
              </div>
            </div>
            <div class="quote-form-field">
              <label style="display:block; font-size: 13px; font-weight: 600; margin-bottom: 6px;">Coverage Type</label>
              <select>
                <option>Vehicle Owner SR-22</option>
                <option>Non-Owner (Driver-Only) SR-22</option>
                <option>Motorcycle SR-22</option>
                <option>Out-of-State DMV Filing</option>
              </select>
            </div>
            <div class="quote-form-field">
              <label style="display:block; font-size: 13px; font-weight: 600; margin-bottom: 6px;">City / Town</label>
              <input type="text" placeholder="Raleigh, NC">
            </div>
            <button type="submit" class="btn-emerald" style="width: 100%; justify-content: center; padding: 14px; font-size: 16px;">
              Get Free SR-22 Quote
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>

  <!-- SECTION: Blog & Reinstatement Guides Showcase -->
  <section class="section-blog">
    <div class="container">
      <div style="text-align: center; max-width: 800px; margin: 0 auto 40px;">
        <span class="gold-badge">HELPFUL GUIDES</span>
        <h2 style="font-size: 32px; font-weight: 800; color: #0f172a; margin-bottom: 12px;">Related License &amp; Insurance Guides</h2>
        <p style="font-size: 16px; color: var(--text-muted);">Explore practical guides to help North Carolina motorists navigate DMV rules and save money on auto coverage.</p>
      </div>

      <div class="blog-grid">
        ${renderBlogCardsHtml(6)}
      </div>
    </div>
  </section>`;

  return renderFullPage(title, metaDesc, bodyHtml, pageUrl);
}

// STANDARD PAGES: FAQ, Contact Us, etc.
function renderStandardPage(pageData) {
  const title = pageData['SEO Title'];
  const metaDesc = pageData['Meta Description'];
  const pageName = pageData.Page;
  const pageUrl = pageData['Page URL'];
  const { intro, sections } = parseH2Sections(pageData['Page Content (HTML)']);
  const cleanIntro = intro.replace(/<h1[^>]*>.*?<\/h1>/si, '').trim();

  const sectionsHtml = sections.map((sec, i) => {
    const bgClass = (i % 2 === 0) ? 'section-bg-white' : 'section-bg-light';
    const badgeClass = (i % 2 === 0) ? 'teal-badge' : 'gold-badge';
    return `
    <section class="content-h2-section ${bgClass}">
      <div class="container">
        <div class="h2-section-inner">
          <div class="h2-section-card">
            <span class="${badgeClass}">INFORMATION</span>
            <div class="h2-section-body">
              ${sec}
            </div>
          </div>
        </div>
      </div>
    </section>`;
  }).join('\n');

  const bodyHtml = `
  <!-- Breadcrumb & Hero Banner -->
  <section class="insurx-hero" style="padding: 50px 0 60px;">
    <div class="container">
      <div style="font-size: 13px; color: #cbd5e1; margin-bottom: 16px;">
        <a href="/" style="color: #cbd5e1;">Home</a> &nbsp;/&nbsp; 
        <span style="color: #ffffff;">${pageName}</span>
      </div>
      <div style="max-width: 820px;">
        <span class="gold-badge">OAKLINE RALEIGH</span>
        <h1>${pageName}</h1>
        ${cleanIntro ? `
          <div style="font-size: 17px; color: #f1f5f9; line-height: 1.65; margin-top: 18px;">
            ${cleanIntro}
          </div>` : ''}
      </div>
    </div>
  </section>

  <!-- DISTINCT H2 CONTENT SECTIONS -->
  ${sectionsHtml}

  <!-- Contact CTA Banner -->
  <section class="section-grey-callout">
    <div class="container">
      <span class="gold-badge" style="background: rgba(254, 243, 199, 0.9);">GET IN TOUCH</span>
      <h2>Need Immediate Assistance?</h2>
      <p>Contact our Raleigh team today at (984) 205-1805 or stop by our office at 704 Glenwood Ave ste d, Raleigh, NC 27605 for prompt, respectful service.</p>
      <div>
        <a href="tel:+19842051805" class="btn-emerald">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
          Call (984) 205-1805
        </a>
      </div>
    </div>
  </section>`;

  return renderFullPage(title, metaDesc, bodyHtml, pageUrl);
}

// BLOG POSTS
function renderBlogPost(postData) {
  const title = postData['SEO Title'];
  const metaDesc = postData['Meta Description'];
  const postUrl = postData['Page URL'];
  const postTitle = postData.Page;
  const targetKw = postData['Target Keyword'];
  const { intro, sections } = parseH2Sections(postData['Page Content (HTML)']);
  const cleanIntro = intro.replace(/<h1[^>]*>.*?<\/h1>/si, '').trim();

  const sectionsHtml = sections.map((sec, i) => {
    const bgClass = (i % 2 === 0) ? 'section-bg-white' : 'section-bg-light';
    return `
    <section class="content-h2-section ${bgClass}">
      <div class="container">
        <div class="h2-section-inner">
          <div class="h2-section-card">
            <div class="h2-section-body">
              ${sec}
            </div>
          </div>
        </div>
      </div>
    </section>`;
  }).join('\n');

  const bodyHtml = `
  <!-- Post Hero & Breadcrumbs -->
  <section class="insurx-hero" style="padding: 45px 0 55px;">
    <div class="container">
      <div style="font-size: 13px; color: #cbd5e1; margin-bottom: 16px;">
        <a href="/" style="color: #cbd5e1;">Home</a> &nbsp;/&nbsp; 
        <a href="/blog/" style="color: #cbd5e1;">Blog</a> &nbsp;/&nbsp; 
        <span style="color: #ffffff;">${postTitle}</span>
      </div>

      <div style="max-width: 860px;">
        <span class="gold-badge" style="margin-bottom: 12px;">${targetKw || 'INSURANCE GUIDE'}</span>
        <h1 style="font-size: 36px; font-weight: 800; color: #ffffff; line-height: 1.25; margin-bottom: 12px;">${postTitle}</h1>
        <div style="color: #cbd5e1; font-size: 14px;">
          Published by Oakline SR22 Insurance Raleigh &bull; License Restoration Specialists
        </div>
      </div>
    </div>
  </section>

  ${cleanIntro ? `
  <section class="content-h2-section section-bg-white">
    <div class="container">
      <div class="h2-section-inner">
        <div class="h2-section-card">
          <div class="h2-section-body" style="font-size: 17px; line-height: 1.75;">
            ${cleanIntro}
          </div>
        </div>
      </div>
    </div>
  </section>` : ''}

  ${sectionsHtml}

  <!-- Related Guides & Contact Section -->
  <section class="content-h2-section section-bg-light" style="border-top: 2px solid var(--primary);">
    <div class="container">
      <div class="h2-section-inner">
        <div style="background: var(--dark-bg); color: #ffffff; padding: 36px; border-radius: var(--radius-lg); margin-bottom: 40px; clip-path: polygon(0 0, calc(100% - 28px) 0, 100% 28px, 100% 100%, 0 100%);">
          <span class="gold-badge" style="margin-bottom: 10px;">DIRECT DMV FILING</span>
          <h3 style="color: #ffffff; font-size: 24px; font-weight: 800; margin-bottom: 12px;">Need SR-22 Reinstatement Support?</h3>
          <p style="font-size: 15px; color: #cbd5e1; margin-bottom: 20px; line-height: 1.6;">Oakline SR22 Insurance Raleigh provides free quotes and same-day electronic certificate filings with the state DMV. Call or visit our Glenwood South office today.</p>
          <a href="tel:+19842051805" class="btn-emerald">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            Call (984) 205-1805
          </a>
        </div>

        <div style="text-align: center; margin-bottom: 30px;">
          <span class="teal-badge">CONTINUE READING</span>
          <h3 style="font-size: 26px; font-weight: 800; color: #0f172a;">More Insurance &amp; Reinstatement Guides</h3>
        </div>
        
        <div class="blog-grid" style="grid-template-columns: repeat(3, 1fr);">
          ${renderBlogCardsHtml(3)}
        </div>
      </div>
    </div>
  </section>`;

  return renderFullPage(title, metaDesc, bodyHtml, postUrl);
}

// BLOG ARCHIVE
function renderBlogIndex() {
  const title = 'Insurance Blog & Reinstatement Guides | Oakline SR22 Insurance Raleigh';
  const metaDesc = 'Read guides on SR-22 insurance costs, driver license reinstatement, non-owner policies, and DMV compliance requirements.';

  const bodyHtml = `
  <section class="insurx-hero" style="padding: 55px 0 65px; text-align: center;">
    <div class="container">
      <span class="gold-badge">DRIVER GUIDES &amp; NEWS</span>
      <h1 style="font-size: 38px; font-weight: 800; color: #ffffff; margin-bottom: 14px;">Insurance &amp; Reinstatement Guides</h1>
      <p style="font-size: 17px; color: #cbd5e1; max-width: 680px; margin: 0 auto;">Comprehensive driver guides covering high-risk auto insurance, financial responsibility certificates, and DMV reinstatement requirements in North Carolina.</p>
    </div>
  </section>

  <section class="section-blog" style="padding: 70px 0 90px; background: #ffffff;">
    <div class="container">
      <div class="blog-grid">
        ${renderBlogCardsHtml(10)}
      </div>
    </div>
  </section>`;

  return renderFullPage(title, metaDesc, bodyHtml, '/blog/');
}

function renderNotFound() {
  const bodyHtml = `
  <section style="text-align: center; padding: 100px 0; background: #ffffff;">
    <div class="container">
      <h1 style="font-size: 64px; color: var(--primary); margin-bottom: 20px;">404</h1>
      <h2 style="font-size: 28px; color: #0f172a; margin-bottom: 16px;">Page Not Found</h2>
      <p style="color: var(--text-muted); font-size: 17px; max-width: 500px; margin: 0 auto 30px;">The requested page could not be located. Browse our resources below or return to the homepage.</p>
      <div style="display: flex; gap: 16px; justify-content: center;">
        <a href="/" class="btn-emerald">Return Home</a>
        <a href="/contact-us/" class="btn-dark">Contact Us</a>
      </div>
    </div>
  </section>`;

  return renderFullPage('404 Not Found | Oakline SR22 Insurance Raleigh', 'Page not found.', bodyHtml, '/404/');
}

const locationSlugs = [
  '/cary-nc', '/cary-nc/',
  '/apex-nc', '/apex-nc/',
  '/wake-forest-nc', '/wake-forest-nc/',
  '/garner-nc', '/garner-nc/',
  '/holly-springs-nc', '/holly-springs-nc/',
  '/morrisville-nc', '/morrisville-nc/',
  '/clayton-nc', '/clayton-nc/',
  '/fuquay-varina-nc', '/fuquay-varina-nc/',
  '/knightdale-nc', '/knightdale-nc/',
  '/durham-nc', '/durham-nc/'
];

const servicesSlugs = [
  '/what-is-sr22', '/what-is-sr22/',
  '/how-to-get-an-sr22-in-raleigh', '/how-to-get-an-sr22-in-raleigh/',
  '/non-owners-sr22-insurance', '/non-owners-sr22-insurance/'
];

function requestHandler(req, res) {
  const host = req.headers && req.headers.host ? req.headers.host : 'localhost:3000';
  const parsedUrl = new URL(req.url, `http://${host}`);
  let pathname = parsedUrl.pathname;

  // Static stylesheet
  if (pathname === '/style.css') {
    const freshCss = fs.readFileSync(path.join(__dirname, 'oakline-sr22-theme', 'style.css'), 'utf8');
    res.writeHead(200, { 'Content-Type': 'text/css; charset=utf-8' });
    res.end(freshCss);
    return;
  }

  // Static images
  if (pathname.includes('/assets/images/')) {
    const filename = path.basename(pathname);
    const imgPath = path.join(__dirname, 'assets', 'images', filename);
    if (fs.existsSync(imgPath)) {
      res.writeHead(200, { 'Content-Type': 'image/webp' });
      fs.createReadStream(imgPath).pipe(res);
      return;
    }
  }

  // Home route
  if (pathname === '/' || pathname === '') {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end(renderHomePage());
    return;
  }

  // Blog index
  if (pathname === '/blog' || pathname === '/blog/') {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end(renderBlogIndex());
    return;
  }

  // Location Pages: Same design as homepage
  if (locationSlugs.includes(pathname)) {
    const norm = pathname.replace(/\/$/, '') || pathname;
    const pageData = seoPagesMap.get(norm) || seoPagesMap.get(norm + '/');
    if (pageData) {
      res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
      res.end(renderLocationPage(pageData));
      return;
    }
  }

  // Services Pages: Insurx modular matrix design
  if (servicesSlugs.includes(pathname)) {
    const norm = pathname.replace(/\/$/, '') || pathname;
    const pageData = seoPagesMap.get(norm) || seoPagesMap.get(norm + '/');
    if (pageData) {
      res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
      res.end(renderServicesPage(pageData));
      return;
    }
  }

  // Standard SEO pages (FAQ, Contact)
  if (seoPagesMap.has(pathname)) {
    const pageData = seoPagesMap.get(pathname);
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end(renderStandardPage(pageData));
    return;
  }

  // Blog posts
  if (blogPostsMap.has(pathname)) {
    const postData = blogPostsMap.get(pathname);
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end(renderBlogPost(postData));
    return;
  }

  // Handle cross-references gracefully
  const oregonSlugs = [
    '/how-to-get-an-sr22-in-portland', '/how-to-get-an-sr22-in-portland/',
    '/gresham-or', '/gresham-or/',
    '/beaverton-or', '/beaverton-or/',
    '/hillsboro-or', '/hillsboro-or/',
    '/tigard-or', '/tigard-or/',
    '/lake-oswego-or', '/lake-oswego-or/'
  ];
  if (oregonSlugs.includes(pathname)) {
    res.writeHead(302, { 'Location': '/how-to-get-an-sr22-in-raleigh/' });
    res.end();
    return;
  }

  // 404
  res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
  res.end(renderNotFound());
}

const server = http.createServer(requestHandler);

requestHandler.server = server;
requestHandler.renderHomePage = renderHomePage;
requestHandler.renderLocationPage = renderLocationPage;
requestHandler.renderServicesPage = renderServicesPage;
requestHandler.renderStandardPage = renderStandardPage;
requestHandler.renderBlogPost = renderBlogPost;
requestHandler.renderBlogIndex = renderBlogIndex;
requestHandler.renderNotFound = renderNotFound;
requestHandler.seoPagesMap = seoPagesMap;
requestHandler.blogPostsMap = blogPostsMap;
requestHandler.locationSlugs = locationSlugs;
requestHandler.servicesSlugs = servicesSlugs;
requestHandler.data = data;

module.exports = requestHandler;

if (require.main === module) {
  const PORT = process.env.PORT || 3000;
  server.listen(PORT, () => {
    console.log(`Oakline SR22 Insurance Raleigh server running at http://localhost:${PORT}`);
  });
}
