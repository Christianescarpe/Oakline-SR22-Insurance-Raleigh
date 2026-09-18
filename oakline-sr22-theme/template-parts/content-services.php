<?php
/**
 * Template part for displaying Services Pages
 * Matches the Insurx Services Design (media_1789716352947.jpg)
 * Every tagged H2 is placed in a distinct section
 */

$parsed = oakline_parse_h2_sections(get_the_content());
$intro_html = $parsed['intro'];
$sections = $parsed['sections'];

// Clean H1 from intro to avoid duplication
$clean_intro = preg_replace('/<h1[^>]*>.*?<\/h1>/si', '', $intro_html);
$service_title = get_the_title();
?>

<!-- SECTION 0: Services Hero & Breadcrumb Banner -->
<section class="insurx-hero" style="padding: 50px 0 70px;">
  <div class="container">
    <div style="font-size: 13px; color: #cbd5e1; margin-bottom: 16px;">
      <a href="<?php echo esc_url(home_url('/')); ?>" style="color: #cbd5e1;">Home</a> &nbsp;/&nbsp; 
      <a href="<?php echo esc_url(home_url('/what-is-sr22/')); ?>" style="color: #cbd5e1;">Services</a> &nbsp;/&nbsp; 
      <span style="color: #ffffff;"><?php echo esc_html($service_title); ?></span>
    </div>

    <div class="insurx-hero-grid">
      <div class="insurx-hero-content">
        <span class="gold-badge">SERVICES</span>
        <h1><?php echo esc_html($service_title); ?></h1>
        <div class="hero-intro-text" style="font-size: 17.5px; color: #f1f5f9; line-height: 1.65; margin-bottom: 24px;">
          <?php echo $clean_intro; ?>
        </div>

        <div class="insurx-hero-actions">
          <a href="tel:+19842051805" class="btn-emerald">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            Call (984) 205-1805
          </a>
          <a href="<?php echo esc_url(home_url('/contact-us/')); ?>" class="btn-outline-white">
            Visit Raleigh Office
          </a>
        </div>
      </div>

      <div class="insurx-hero-card">
        <img src="<?php echo esc_url(get_template_directory_uri() . '/assets/images/insurance-calculator.webp'); ?>" alt="<?php echo esc_attr($service_title); ?> Advisor">
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
        <a href="<?php echo esc_url(home_url('/what-is-sr22/')); ?>" style="font-weight: 700; font-size: 13.5px; color: var(--primary); margin-top: 14px;">Learn Details &rarr;</a>
      </div>

      <div class="matrix-cell highlight-emerald">
        <div>
          <svg class="matrix-cell-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="8.5" cy="7" r="4"/></svg>
          <h3>Non-Owner SR-22</h3>
          <p>Driver-only liability protection if you do not own a vehicle. Fulfills state DMV requirements at lowest monthly rates.</p>
        </div>
        <a href="<?php echo esc_url(home_url('/non-owners-sr22-insurance/')); ?>" style="font-weight: 700; font-size: 13.5px; color: #ffffff; margin-top: 14px;">View Non-Owner &rarr;</a>
      </div>

      <div class="matrix-cell">
        <div>
          <svg class="matrix-cell-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>
          <h3>License Reinstatement</h3>
          <p>Complete step-by-step guidance navigating court requirements, DMV fees, and mandatory state timeframes.</p>
        </div>
        <a href="<?php echo esc_url(home_url('/how-to-get-an-sr22-in-raleigh/')); ?>" style="font-weight: 700; font-size: 13.5px; color: var(--primary); margin-top: 14px;">Step-by-Step Guide &rarr;</a>
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
        <a href="<?php echo esc_url(home_url('/faq/')); ?>" style="font-weight: 700; font-size: 13.5px; color: var(--primary); margin-top: 14px;">Questions Answered &rarr;</a>
      </div>

      <div class="matrix-cell">
        <div>
          <svg class="matrix-cell-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
          <h3>Continuous Monitoring</h3>
          <p>Automated payment monitoring to prevent unintended policy lapses that would restart state mandates.</p>
        </div>
        <a href="<?php echo esc_url(home_url('/contact-us/')); ?>" style="font-weight: 700; font-size: 13.5px; color: var(--primary); margin-top: 14px;">Contact Office &rarr;</a>
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
        <img src="<?php echo esc_url(get_template_directory_uri() . '/assets/images/customer-handshake.webp'); ?>" alt="Oakline Insurance Customer Support Handshake">
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
<?php if (!empty($sections)) : ?>
  <?php foreach ($sections as $i => $sec) :
    $bg_class = ($i % 2 === 0) ? 'section-bg-white' : 'section-bg-light';
    $badge_class = ($i % 2 === 0) ? 'teal-badge' : 'gold-badge';
  ?>
    <section class="content-h2-section <?php echo esc_attr($bg_class); ?>">
      <div class="container">
        <div class="h2-section-inner">
          <div class="h2-section-card">
            <span class="<?php echo esc_attr($badge_class); ?>">SR-22 GUIDE</span>
            <div class="h2-section-body">
              <?php echo $sec; ?>
            </div>
          </div>
        </div>
      </div>
    </section>
  <?php endforeach; ?>
<?php endif; ?>

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
