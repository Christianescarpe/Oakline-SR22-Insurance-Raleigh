<?php
/**
 * Template part for displaying Standard Pages (FAQ, Contact Us, etc.)
 * Every tagged H2 is placed in a distinct section
 */

$parsed = oakline_parse_h2_sections(get_the_content());
$intro_html = $parsed['intro'];
$sections = $parsed['sections'];

$clean_intro = preg_replace('/<h1[^>]*>.*?<\/h1>/si', '', $intro_html);
$page_title = get_the_title();
?>

<!-- Breadcrumb & Hero Banner -->
<section class="insurx-hero" style="padding: 50px 0 60px;">
  <div class="container">
    <div style="font-size: 13px; color: #cbd5e1; margin-bottom: 16px;">
      <a href="<?php echo esc_url(home_url('/')); ?>" style="color: #cbd5e1;">Home</a> &nbsp;/&nbsp; 
      <span style="color: #ffffff;"><?php echo esc_html($page_title); ?></span>
    </div>
    <div style="max-width: 820px;">
      <span class="gold-badge">OAKLINE RALEIGH</span>
      <h1><?php echo esc_html($page_title); ?></h1>
      <?php if (!empty($clean_intro)) : ?>
        <div style="font-size: 17px; color: #f1f5f9; line-height: 1.65; margin-top: 18px;">
          <?php echo $clean_intro; ?>
        </div>
      <?php endif; ?>
    </div>
  </div>
</section>

<!-- DISTINCT H2 CONTENT SECTIONS -->
<?php if (!empty($sections)) : ?>
  <?php foreach ($sections as $i => $sec) :
    $bg_class = ($i % 2 === 0) ? 'section-bg-white' : 'section-bg-light';
    $badge_class = ($i % 2 === 0) ? 'teal-badge' : 'gold-badge';
  ?>
    <section class="content-h2-section <?php echo esc_attr($bg_class); ?>">
      <div class="container">
        <div class="h2-section-inner">
          <div class="h2-section-card">
            <span class="<?php echo esc_attr($badge_class); ?>">INFORMATION</span>
            <div class="h2-section-body">
              <?php echo $sec; ?>
            </div>
          </div>
        </div>
      </div>
    </section>
  <?php endforeach; ?>
<?php endif; ?>

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
</section>
