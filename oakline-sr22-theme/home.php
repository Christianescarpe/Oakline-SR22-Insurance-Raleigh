<?php
/**
 * The template for displaying the blog posts index
 */
get_header(); ?>

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
      <?php
      $images = array(
        'hero-driver.webp',
        'insurance-calculator.webp',
        'reinstated-driving.webp',
        'customer-handshake.webp'
      );
      $idx = 0;
      if (have_posts()) :
        while (have_posts()) : the_post();
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
            <h2 class="blog-card-title" style="font-size: 18px; margin-bottom: 12px;">
              <a href="<?php the_permalink(); ?>" style="color: inherit; text-decoration: none;"><?php the_title(); ?></a>
            </h2>
            <div class="blog-card-desc"><?php echo wp_trim_words(get_the_excerpt(), 24); ?></div>
            <a href="<?php the_permalink(); ?>" class="blog-card-link">Read Full Guide &rarr;</a>
          </div>
        </article>
      <?php
        endwhile;
      else :
        echo '<p>No guides published yet.</p>';
      endif;
      ?>
    </div>
  </div>
</section>

<?php get_footer(); ?>
