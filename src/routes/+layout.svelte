<script lang="ts">
  // Shared logic here
</script>

<svelte:head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="description" content="Compassionate, person-centred health and care support" />
  <title>Maxi-Mize Health Solutions | Your Health, Your Dignity, Our Care</title>
</svelte:head>

<div class="site-wrapper">
  <header class="site-header">
    <div class="header-inner">
      <a href="/" class="brand">
        <span class="brand-name">Maxi-Mize Health Solutions</span>
      </a>
      <nav class="main-nav">
        <a href="/" class="nav-link">Home</a>
        <a href="/services" class="nav-link">Our Services</a>
        <a href="/about" class="nav-link">About Us</a>
        <a href="/contact" class="nav-link cta-button">Get in Touch</a>
      </nav>
    </div>
  </header>

  <main class="page-content">
    <slot />
  </main>

  <footer class="site-footer">
    <div class="footer-inner">
      <p>© 2026 Maxi-Mize Health Solutions — Your Health, Your Dignity, Our Care</p>
    </div>
  </footer>
</div>

<style global>
  :root {
    --primary: #0d9488;
    --primary-dark: #0f766e;
    --text-dark: #1f2937;
    --text-light: #6b7280;
    --bg-light: #f8fafc;
    --white: #ffffff;
    --shadow-sm: 0 1px 2px rgba(0,0,0,0.05);
    --radius: 10px;
  }

  * { margin: 0; padding: 0; box-sizing: border-box; }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    color: var(--text-dark);
    line-height: 1.6;
    background: var(--white);
  }

  .site-wrapper {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

  .site-header {
    background: var(--white);
    box-shadow: var(--shadow-sm);
    position: sticky;
    top: 0;
    z-index: 100;
  }

  .header-inner {
    max-width: 1200px;
    margin: 0 auto;
    padding: 1rem 1.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 1rem;
  }

  .brand {
    text-decoration: none;
    font-size: 1.25rem;
    font-weight: 700;
    color: var(--primary);
  }

  .main-nav {
    display: flex;
    align-items: center;
    gap: 1.5rem;
  }

  .nav-link {
    text-decoration: none;
    color: var(--text-dark);
    font-weight: 500;
    transition: color 0.2s;
  }

  .nav-link:hover {
    color: var(--primary);
  }

  .cta-button {
    background: var(--primary);
    color: white !important;
    padding: 0.6rem 1.25rem;
    border-radius: var(--radius);
    font-weight: 600;
    transition: background 0.2s, transform 0.2s;
  }

  .cta-button:hover {
    background: var(--primary-dark);
    transform: translateY(-1px);
  }

  .page-content {
    flex: 1;
    width: 100%;
  }

  .site-footer {
    background: var(--bg-light);
    padding: 2rem 1.5rem;
    margin-top: 4rem;
  }

  .footer-inner {
    max-width: 1200px;
    margin: 0 auto;
    text-align: center;
    color: var(--text-light);
  }

  @media (max-width: 768px) {
    .header-inner { flex-direction: column; text-align: center; }
    .main-nav { gap: 1rem; flex-wrap: wrap; justify-content: center; }
  }
</style>
