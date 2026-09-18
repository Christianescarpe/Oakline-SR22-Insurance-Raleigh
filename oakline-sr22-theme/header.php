<?php
/**
 * Header template adapting the Insurx design system
 */
?><!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
  <meta charset="<?php bloginfo('charset'); ?>">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="google-site-verification" content="VCJGx2cffT1IY6_QZEKkcK4uMx9PGYDzdnZo6sYk5yg" />
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<?php wp_body_open(); ?>

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
      <a href="<?php echo esc_url(home_url('/')); ?>" class="site-brand">
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
          <li class="nav-item <?php echo is_front_page() ? 'active' : ''; ?>">
            <a href="<?php echo esc_url(home_url('/')); ?>" class="nav-link">Home</a>
          </li>
          <li class="nav-item has-dropdown <?php echo is_page(array('what-is-sr22', 'how-to-get-an-sr22-in-raleigh', 'non-owners-sr22-insurance')) ? 'active' : ''; ?>">
            <a href="<?php echo esc_url(home_url('/what-is-sr22/')); ?>" class="nav-link">
              SR22 Insurance
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9l6 6 6-6"/></svg>
            </a>
            <ul class="dropdown-menu">
              <li class="dropdown-item"><a href="<?php echo esc_url(home_url('/what-is-sr22/')); ?>">What is SR-22?</a></li>
              <li class="dropdown-item"><a href="<?php echo esc_url(home_url('/how-to-get-an-sr22-in-raleigh/')); ?>">Reinstatement Guide</a></li>
              <li class="dropdown-item"><a href="<?php echo esc_url(home_url('/non-owners-sr22-insurance/')); ?>">Non-Owners SR-22 Insurance</a></li>
            </ul>
          </li>
          <li class="nav-item has-dropdown">
            <a href="<?php echo esc_url(home_url('/cary-nc/')); ?>" class="nav-link">
              Locations
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9l6 6 6-6"/></svg>
            </a>
            <ul class="dropdown-menu">
              <li class="dropdown-item"><a href="<?php echo esc_url(home_url('/cary-nc/')); ?>">Cary, NC</a></li>
              <li class="dropdown-item"><a href="<?php echo esc_url(home_url('/apex-nc/')); ?>">Apex, NC</a></li>
              <li class="dropdown-item"><a href="<?php echo esc_url(home_url('/wake-forest-nc/')); ?>">Wake Forest, NC</a></li>
              <li class="dropdown-item"><a href="<?php echo esc_url(home_url('/garner-nc/')); ?>">Garner, NC</a></li>
              <li class="dropdown-item"><a href="<?php echo esc_url(home_url('/holly-springs-nc/')); ?>">Holly Springs, NC</a></li>
              <li class="dropdown-item"><a href="<?php echo esc_url(home_url('/morrisville-nc/')); ?>">Morrisville, NC</a></li>
              <li class="dropdown-item"><a href="<?php echo esc_url(home_url('/clayton-nc/')); ?>">Clayton, NC</a></li>
              <li class="dropdown-item"><a href="<?php echo esc_url(home_url('/fuquay-varina-nc/')); ?>">Fuquay-Varina, NC</a></li>
              <li class="dropdown-item"><a href="<?php echo esc_url(home_url('/knightdale-nc/')); ?>">Knightdale, NC</a></li>
              <li class="dropdown-item"><a href="<?php echo esc_url(home_url('/durham-nc/')); ?>">Durham, NC</a></li>
            </ul>
          </li>
          <li class="nav-item <?php echo is_page('faq') ? 'active' : ''; ?>">
            <a href="<?php echo esc_url(home_url('/faq/')); ?>" class="nav-link">FAQ</a>
          </li>
          <li class="nav-item <?php echo (is_home() || is_singular('post')) ? 'active' : ''; ?>">
            <a href="<?php echo esc_url(home_url('/blog/')); ?>" class="nav-link">Blog</a>
          </li>
          <li class="nav-item <?php echo is_page('contact-us') ? 'active' : ''; ?>">
            <a href="<?php echo esc_url(home_url('/contact-us/')); ?>" class="nav-link">Contact</a>
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
</header>
