<?php
/**
 * The template for displaying single blog posts (each H2 in a distinct section)
 */
get_header(); ?>

<!-- Post Hero & Breadcrumbs -->
<section class="insurx-hero" style="padding: 45px 0 55px;">
  <div class="container">
    <div style="font-size: 13px; color: #cbd5e1; margin-bottom: 16px;">
      <a href="<?php echo esc_url(home_url('/')); ?>" style="color: #cbd5e1;">Home</a> &nbsp;/&nbsp; 
      <a href="<?php echo esc_url(home_url('/blog/')); ?>" style="color: #cbd5e1;">Blog</a> &nbsp;/&nbsp; 
      <span style="color: #ffffff;"><?php the_title(); ?></span>
    </div>

    <div style="max-width: 860px;">
      <?php
      $target_kw = get_post_meta(get_the_ID(), '_oakline_target_keyword', true);
      if ($target_kw) :
      ?>
        <span class="gold-badge" style="margin-bottom: 12px;"><?php echo esc_html($target_kw); ?></span>
      <?php else : ?>
        <span class="gold-badge" style="margin-bottom: 12px;">INSURANCE GUIDE</span>
      <?php endif; ?>

      <h1 style="font-size: 36px; font-weight: 800; color: #ffffff; line-height: 1.25; margin-bottom: 12px;"><?php the_title(); ?></h1>
      <div style="color: #cbd5e1; font-size: 14px;">
        Published by Oakline SR22 Insurance Raleigh &bull; License Restoration Specialists
      </div>
    </div>
  </div>
</section>

<?php
while (have_posts()) : the_post();
  echo oakline_render_content_by_h2_sections(get_the_content());
endwhile;
?>

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
        <?php
        $recent = new WP_Query(array(
          'post_type' => 'post',
          'posts_per_page' => 3,
          'post__not_in' => array(get_the_ID())
        ));
        $images = array('hero-driver.webp', 'insurance-calculator.webp', 'reinstated-driving.webp');
        $i = 0;
        if ($recent->have_posts()) :
          while ($recent->have_posts()) : $recent->the_post();
            $img = $images[$i % count($images)];
            $target_kw_rec = get_post_meta(get_the_ID(), '_oakline_target_keyword', true);
            $i++;
        ?>
          <article class="blog-card">
            <div class="blog-card-img-placeholder">
              <img src="<?php echo esc_url(get_template_directory_uri() . '/assets/images/' . $img); ?>" alt="<?php the_title_attribute(); ?>" style="width: 100%; height: 100%; object-fit: cover;">
              <?php if ($target_kw_rec) : ?>
                <span class="blog-card-keyword"><?php echo esc_html($target_kw_rec); ?></span>
              <?php endif; ?>
            </div>
            <div class="blog-card-body">
              <h4 style="font-size: 16px; font-weight: 700; margin-bottom: 10px; line-height: 1.4;">
                <a href="<?php the_permalink(); ?>" style="color: inherit; text-decoration: none;"><?php the_title(); ?></a>
              </h4>
              <a href="<?php the_permalink(); ?>" class="blog-card-link">Read Guide &rarr;</a>
            </div>
          </article>
        <?php
          endwhile;
          wp_reset_postdata();
        endif;
        ?>
      </div>
    </div>
  </div>
</section>

<?php get_footer(); ?>
