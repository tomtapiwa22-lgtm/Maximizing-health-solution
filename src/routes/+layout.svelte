<svelte:head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Maxi-Mize Health Solutions</title>
</svelte:head>

<div class="site-wrapper">
  <header class="site-header">
    <div class="container">
      <a href="/" class="brand">Maxi-Mize Health Solutions</a>
      <nav class="main-nav">
        <a href="/" class="nav-link">Home</a>
        <a href="/services" class="nav-link">Our Services</a>
        <a href="/about" class="nav-link">About Us</a>
        <a href="/contact" class="cta-button">Get in Touch</a>
      </nav>
    </div>
  </header>

  <main class="page-content">
    <slot />
  </main>

  <footer class="site-footer">
    <div class="container">
      <p>© 2026 Maxi-Mize Health Solutions — Your Health, Your Dignity, Our Care</p>
    </div>
  </footer>
</div>

<style global>
  /* ===== RESET & BASE ===== */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --primary: #2dd4bf;
    --primary-dark: #14b8a6;
    --dark: #0f172a;
    --light: #f0fdfa;
    --text-muted: #64748b;
  }

  html, body {
    background: var(--light);
    font-family: system-ui, -apple-system, sans-serif;
    color: var(--dark);
    line-height: 1.6;
    min-height: 100vh;
  }

  ul, ol { list-style: none; }
  a { text-decoration: none; color: inherit; }

  /* ===== LAYOUT ===== */
  .site-wrapper {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1.5rem;
  }

  /* ===== HEADER ===== */
  .site-header {
    background: white;
    box-shadow: 0 2px 4px rgba(0,0,0,0.05);
    padding: 1rem 0;
    position: sticky;
    top: 0;
    z-index: 100;
  }

  .site-header .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 1rem;
  }

  .brand {
    font-size: 1.35rem;
    font-weight: 700;
    color: var(--primary);
  }

  .main-nav {
    display: flex;
    align-items: center;
    gap: 1.5rem;
    flex-wrap: wrap;
  }

  .nav-link {
    color: var(--dark);
    font-weight: 500;
    transition: color 0.2s;
  }

  .nav-link:hover {
    color: var(--primary);
  }

  .cta-button {
    background: var(--primary);
    color: white !important;
    padding: 0.6rem 1.5rem;
    border-radius: 50px;
    font-weight: 600;
    transition: background 0.2s, transform 0.2s;
  }

  .cta-button:hover {
    background: var(--primary-dark);
    transform: translateY(-2px);
  }

  /* ===== PAGE CONTENT ===== */
  .page-content {
    flex: 1;
    width: 100%;
  }

  /* ===== HERO ===== */
  .hero {
    background: linear-gradient(135deg, #2dd4bf 0%, #0d9488 100%);
    color: white;
    padding: 5rem 1.5rem;
    text-align: center;
  }

  .hero-inner {
    max-width: 800px;
    margin: 0 auto;
  }

  .hero h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
  }

  .hero p {
    font-size: 1.2rem;
    margin-bottom: 2rem;
    opacity: 0.9;
  }

  .hero-btn {
    display: inline-block;
    background: white;
    color: #0d9488;
    padding: 0.9rem 2.2rem;
    border-radius: 50px;
    font-weight: 600;
    transition: transform 0.3s;
  }

  .hero-btn:hover {
    transform: translateY(-3px);
  }

  /* ===== FEATURES ===== */
  .features {
    padding: 5rem 1.5rem;
    background: white;
  }

  .features h2 {
    text-align: center;
    font-size: 2.2rem;
    color: var(--dark);
    margin-bottom: 3rem;
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
  }

  .card {
    background: var(--light);
    padding: 2rem;
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.05);
    transition: transform 0.3s;
  }

  .card:hover {
    transform: translateY(-5px);
  }

  .card h3 {
    color: var(--primary);
    margin-bottom: 1rem;
    font-size: 1.3rem;
  }

  .card p {
    color: var(--text-muted);
  }

  /* ===== FOOTER ===== */
  .site-footer {
    background: var(--dark);
    color: white;
    text-align: center;
    padding: 2rem 1.5rem;
  }

  /* ===== MOBILE ===== */
  @media (max-width: 768px) {
    .site-header .container {
      flex-direction: column;
      text-align: center;
    }
    .hero h1 {
      font-size: 2rem;
    }
  }
</style>
