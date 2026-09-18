<?php
/**
 * 404 template
 */
get_header(); ?>

<section class="section-main-content" style="text-align: center; padding: 100px 0;">
  <div class="container">
    <h1 style="font-size: 64px; color: var(--primary); margin-bottom: 20px;">404</h1>
    <h2 style="font-size: 28px; color: var(--secondary); margin-bottom: 16px;">Page Not Found</h2>
    <p style="color: var(--text-muted); font-size: 17px; max-width: 500px; margin: 0 auto 30px;">The requested page could not be located. Browse our resources below or return to the homepage.</p>
    <div style="display: flex; gap: 16px; justify-content: center;">
      <a href="<?php echo esc_url(home_url('/')); ?>" class="btn-primary">Return Home</a>
      <a href="<?php echo esc_url(home_url('/contact-us/')); ?>" class="btn-outline">Contact Us</a>
    </div>
  </div>
</section>

<?php get_footer(); ?>
