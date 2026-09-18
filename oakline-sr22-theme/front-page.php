<?php
/**
 * The template for displaying the Front Page
 * Follows the Insurx Homepage Design (media_1789716352948.jpg)
 */
get_header(); ?>

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
          <a href="<?php echo esc_url(home_url('/how-to-get-an-sr22-in-raleigh/')); ?>" class="btn-outline-white">
            Reinstatement Guide
          </a>
        </div>
      </div>

      <div class="insurx-hero-card">
        <img src="<?php echo esc_url(get_template_directory_uri() . '/assets/images/hero-driver.webp'); ?>" alt="Oakline SR-22 Insurance Raleigh Driver">
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
      <p style="font-size: 16.5px; color: #cbd5e1; line-height: 1.7;">Mistakes on state insurance paperwork can delay driver license reinstatement for weeks. Oakline submits certificates promptly and correctly so your documentation moves forward smoothly. If you're wondering how the certification works, our <a href="<?php echo esc_url(home_url('/what-is-sr22/')); ?>" style="color: #34d399; font-weight: 700; text-decoration: underline;">comprehensive guide to SR-22 filing rules</a> explains what certificates entail and why North Carolina mandates proof of liability.</p>
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
        <a href="<?php echo esc_url(home_url('/what-is-sr22/')); ?>">Read SR-22 Rules &rarr;</a>
      </div>

      <div class="dark-feature-card">
        <div class="dark-card-icon-bubble">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
        </div>
        <div>
          <h3>Accurate DMV Filings</h3>
          <p>Prevent paperwork mistakes that delay license reinstatement for weeks with verified electronic submissions.</p>
        </div>
        <a href="<?php echo esc_url(home_url('/how-to-get-an-sr22-in-raleigh/')); ?>">Filing Guide &rarr;</a>
      </div>

      <div class="dark-feature-card">
        <div class="dark-card-icon-bubble">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg>
        </div>
        <div>
          <h3>Compassionate Support</h3>
          <p>Direct, respectful guidance evaluating your background, timeline, and budget.</p>
        </div>
        <a href="<?php echo esc_url(home_url('/non-owners-sr22-insurance/')); ?>">Non-Owner Plans &rarr;</a>
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
          <p>If you've received official notice from the NCDMV, our <a href="<?php echo esc_url(home_url('/how-to-get-an-sr22-in-raleigh/')); ?>">Raleigh license reinstatement instructions</a> outlines every stage from quote evaluation to license reinstatement.</p>
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
          <p>Not every motorist who requires financial responsibility certification owns an automobile. If you don't own a car but must satisfy state DMV requirements to lift a suspension, non-owner insurance provides an economical solution. Review our <a href="<?php echo esc_url(home_url('/non-owners-sr22-insurance/')); ?>">non-owner SR-22 policy options</a> to discover how driver-only liability coverage functions and how much you can save on premiums.</p>
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
        <a href="<?php echo esc_url(home_url('/cary-nc/')); ?>" class="location-link">View Cary Info &rarr;</a>
      </div>

      <div class="location-card">
        <div>
          <div class="location-city">Apex</div>
          <div class="location-state">Wake County, NC</div>
        </div>
        <a href="<?php echo esc_url(home_url('/apex-nc/')); ?>" class="location-link">View Apex Info &rarr;</a>
      </div>

      <div class="location-card">
        <div>
          <div class="location-city">Wake Forest</div>
          <div class="location-state">Wake County, NC</div>
        </div>
        <a href="<?php echo esc_url(home_url('/wake-forest-nc/')); ?>" class="location-link">View Wake Forest Info &rarr;</a>
      </div>

      <div class="location-card">
        <div>
          <div class="location-city">Garner</div>
          <div class="location-state">Wake County, NC</div>
        </div>
        <a href="<?php echo esc_url(home_url('/garner-nc/')); ?>" class="location-link">View Garner Info &rarr;</a>
      </div>

      <div class="location-card">
        <div>
          <div class="location-city">Holly Springs</div>
          <div class="location-state">Wake County, NC</div>
        </div>
        <a href="<?php echo esc_url(home_url('/holly-springs-nc/')); ?>" class="location-link">View Holly Springs Info &rarr;</a>
      </div>

      <div class="location-card">
        <div>
          <div class="location-city">Morrisville</div>
          <div class="location-state">Wake County, NC</div>
        </div>
        <a href="<?php echo esc_url(home_url('/morrisville-nc/')); ?>" class="location-link">View Morrisville Info &rarr;</a>
      </div>

      <div class="location-card">
        <div>
          <div class="location-city">Clayton</div>
          <div class="location-state">Johnston County, NC</div>
        </div>
        <a href="<?php echo esc_url(home_url('/clayton-nc/')); ?>" class="location-link">View Clayton Info &rarr;</a>
      </div>

      <div class="location-card">
        <div>
          <div class="location-city">Fuquay-Varina</div>
          <div class="location-state">Wake County, NC</div>
        </div>
        <a href="<?php echo esc_url(home_url('/fuquay-varina-nc/')); ?>" class="location-link">View Fuquay-Varina Info &rarr;</a>
      </div>

      <div class="location-card">
        <div>
          <div class="location-city">Knightdale</div>
          <div class="location-state">Wake County, NC</div>
        </div>
        <a href="<?php echo esc_url(home_url('/knightdale-nc/')); ?>" class="location-link">View Knightdale Info &rarr;</a>
      </div>

      <div class="location-card">
        <div>
          <div class="location-city">Durham</div>
          <div class="location-state">Durham County, NC</div>
        </div>
        <a href="<?php echo esc_url(home_url('/durham-nc/')); ?>" class="location-link">View Durham Info &rarr;</a>
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
          <p>Insurance regulations can be confusing when dealing with DMV paperwork. Browse our <a href="<?php echo esc_url(home_url('/faq/')); ?>">helpful SR-22 questions and answers</a> page for immediate clarity, or visit our <a href="<?php echo esc_url(home_url('/contact-us/')); ?>">Raleigh contact office</a> to connect directly with an insurance professional.</p>
          <div style="margin-top: 20px;">
            <a href="<?php echo esc_url(home_url('/faq/')); ?>" class="btn-dark" style="margin-right: 12px;">Visit FAQ Hub</a>
            <a href="<?php echo esc_url(home_url('/contact-us/')); ?>" class="btn-emerald">Contact Office</a>
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
            <a href="<?php echo esc_url(home_url('/contact-us/')); ?>" class="btn-dark">Visit Raleigh Office</a>
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
      <?php
      $images = array(
        'hero-driver.webp',
        'insurance-calculator.webp',
        'reinstated-driving.webp',
        'customer-handshake.webp',
        'hero-driver.webp',
        'insurance-calculator.webp',
      );
      $recent_posts = new WP_Query(array(
        'post_type' => 'post',
        'posts_per_page' => 6,
      ));
      $idx = 0;
      if ($recent_posts->have_posts()) :
        while ($recent_posts->have_posts()) : $recent_posts->the_post();
          $target_kw = get_post_meta(get_the_ID(), '_oakline_target_keyword', true);
          $img_file = $images[$idx % count($images)];
          $idx++;
      ?>
        <article class="blog-card">
          <div class="blog-card-img-placeholder">
            <img src="<?php echo esc_url(get_template_directory_uri() . '/assets/images/' . $img_file); ?>" alt="<?php the_title_attribute(); ?>" style="width: 100%; height: 100%; object-fit: cover;">
            <?php if ($target_kw) : ?>
              <span class="blog-card-keyword"><?php echo esc_html($target_kw); ?></span>
            <?php endif; ?>
          </div>
          <div class="blog-card-body">
            <h3 class="blog-card-title"><?php the_title(); ?></h3>
            <div class="blog-card-desc"><?php echo wp_trim_words(get_the_excerpt(), 18); ?></div>
            <a href="<?php the_permalink(); ?>" class="blog-card-link">Read Full Guide &rarr;</a>
          </div>
        </article>
      <?php
        endwhile;
        wp_reset_postdata();
      endif;
      ?>
    </div>
  </div>
</section>

<?php get_footer(); ?>
