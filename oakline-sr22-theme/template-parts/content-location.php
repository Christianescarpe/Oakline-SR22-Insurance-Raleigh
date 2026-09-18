<?php
/**
 * Template part for displaying Location Pages
 * Matches the Insurx Homepage Design (media_1789716352948.jpg)
 * Every tagged H2 is placed in a distinct section
 */

$parsed = oakline_parse_h2_sections(get_the_content());
$intro_html = $parsed['intro'];
$sections = $parsed['sections'];

// Clean H1 from intro to avoid duplication if rendering directly
$clean_intro = preg_replace('/<h1[^>]*>.*?<\/h1>/si', '', $intro_html);
$location_title = get_the_title();
?>

<!-- SECTION 0: Location Hero (Matches Homepage Hero) -->
<section class="insurx-hero">
  <div class="container">
    <div class="insurx-hero-grid">
      <div class="insurx-hero-content">
        <span class="gold-badge">TAILORED SOLUTIONS</span>
        <h1>SR-22 Insurance in <?php echo esc_html($location_title); ?></h1>
        <div class="hero-intro-text" style="font-size: 17.5px; color: #f1f5f9; line-height: 1.65; margin-bottom: 24px;">
          <?php echo $clean_intro; ?>
        </div>

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
        <img src="<?php echo esc_url(get_template_directory_uri() . '/assets/images/hero-driver.webp'); ?>" alt="<?php echo esc_attr($location_title); ?> SR-22 Insurance">
        <span class="gold-badge" style="margin-bottom: 10px;"><?php echo esc_html($location_title); ?> Service</span>
        <h3 style="font-size: 20px; font-weight: 800; margin-bottom: 8px; color: #0f172a;">Fast License Reinstatement</h3>
        <p style="color: #64748b; font-size: 14px; margin-bottom: 16px;">Oakline provides immediate SR-22 quotes, electronic NCDMV filings, and affordable high-risk rates for <?php echo esc_html($location_title); ?> motorists.</p>
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

<?php if (!empty($sections)) : ?>
  <!-- SECTION 1 (First H2): Dark Midnight Showcase Section -->
  <?php $first_sec = array_shift($sections); ?>
  <section class="section-dark-showcase">
    <div class="container">
      <div style="max-width: 860px; margin-bottom: 36px;">
        <span class="gold-badge">LOCAL EXPERTISE</span>
        <div class="dark-showcase-content">
          <?php echo $first_sec; ?>
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
          <a href="<?php echo esc_url(home_url('/what-is-sr22/')); ?>">SR-22 Basics &rarr;</a>
        </div>

        <div class="dark-feature-card">
          <div class="dark-card-icon-bubble">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
          </div>
          <div>
            <h3>Error-Free Submissions</h3>
            <p>Direct electronic filing with the NCDMV eliminates processing delays and clerical rejections.</p>
          </div>
          <a href="<?php echo esc_url(home_url('/how-to-get-an-sr22-in-raleigh/')); ?>">Filing Steps &rarr;</a>
        </div>

        <div class="dark-feature-card">
          <div class="dark-card-icon-bubble">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg>
          </div>
          <div>
            <h3>Non-Owner Savings</h3>
            <p>Inexpensive driver-only liability protection if you do not own a personal vehicle.</p>
          </div>
          <a href="<?php echo esc_url(home_url('/non-owners-sr22-insurance/')); ?>">Non-Owner Guide &rarr;</a>
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
  </section>

  <!-- SUBSEQUENT SECTIONS: Each H2 in its own distinct section -->
  <?php foreach ($sections as $i => $sec) :
    $bg_class = ($i % 2 === 0) ? 'section-bg-white' : 'section-bg-light';
    $badge_class = ($i % 2 === 0) ? 'gold-badge' : 'teal-badge';
  ?>
    <section class="content-h2-section <?php echo esc_attr($bg_class); ?>">
      <div class="container">
        <div class="h2-section-inner">
          <div class="h2-section-card">
            <span class="<?php echo esc_attr($badge_class); ?>">NCDMV COMPLIANCE</span>
            <div class="h2-section-body">
              <?php echo $sec; ?>
            </div>
          </div>
        </div>
      </div>
    </section>
  <?php endforeach; ?>
<?php endif; ?>

<!-- SECTION: Grey Callout Banner -->
<section class="section-grey-callout">
  <div class="container">
    <span class="gold-badge" style="background: rgba(254, 243, 199, 0.9);">FAST LICENSE RESTORATION</span>
    <h2>Need Immediate Reinstatement Support?</h2>
    <p>Oakline SR22 Insurance Raleigh serves <?php echo esc_html($location_title); ?> and the entire Triangle with same-day electronic DMV certificates, low down payments, and honest guidance.</p>
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
      <p style="font-size: 16px; color: var(--text-muted);">In addition to <?php echo esc_html($location_title); ?>, Oakline provides same-day SR-22 electronic DMV filings across all neighboring Triangle communities.</p>
    </div>

    <div class="locations-grid">
      <div class="location-card">
        <div>
          <div class="location-city">Raleigh</div>
          <div class="location-state">Glenwood South Office</div>
        </div>
        <a href="<?php echo esc_url(home_url('/')); ?>" class="location-link">View Raleigh Info &rarr;</a>
      </div>
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
          <div class="location-city">Durham</div>
          <div class="location-state">Durham County, NC</div>
        </div>
        <a href="<?php echo esc_url(home_url('/durham-nc/')); ?>" class="location-link">View Durham Info &rarr;</a>
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
