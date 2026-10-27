<style>
  /* Global Reset & Variables */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --primary: #06b69f;
    --primary-dark: #0d9488;
    --light: #f0fdfa;
    --dark: #0f172a;
    --muted: #64748b;
    --white: #ffffff;
    --shadow-sm: 0 2px 8px rgba(0,0,0,0.06);
    --shadow-md: 0 6px 20px rgba(6, 182, 159, 0.15);
    --shadow-lg: 0 12px 40px rgba(6, 182, 159, 0.2);
    --radius: 12px;
    --transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  body {
    font-family: 'Segoe UI', Roboto, sans-serif;
    line-height: 1.6;
    color: var(--dark);
    background: var(--white);
  }

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

  /* Header */
  .site-header {
    padding: 1.2rem 0;
    background: var(--white);
    box-shadow: var(--shadow-sm);
    position: relative;
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
    font-size: 1.25rem;
    font-weight: 700;
    color: var(--primary);
    text-decoration: none;
  }

  .main-nav {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .nav-link {
    color: var(--dark);
    text-decoration: none;
    font-weight: 500;
    padding: 0.5rem 0.25rem;
    transition: var(--transition);
  }

  .nav-link:hover {
    color: var(--primary);
  }

  .cta-button {
    background: var(--primary);
    color: var(--white);
    padding: 0.6rem 1.5rem;
    border-radius: 999px;
    text-decoration: none;
    font-weight: 600;
    transition: var(--transition);
  }

  .cta-button:hover {
    background: var(--primary-dark);
    transform: translateY(-2px);
    box-shadow: var(--shadow-md);
  }

  .login-btn {
    border: 2px solid var(--primary);
    color: var(--primary-dark);
    background: transparent;
    padding: 0.6rem 1.5rem;
    border-radius: var(--radius);
    font-weight: 600;
    cursor: pointer;
    transition: var(--transition);
    font-size: 0.95rem;
  }

  .login-btn:hover {
    background: var(--primary);
    color: var(--white);
    transform: translateY(-2px);
    box-shadow: var(--shadow-md);
  }

  /* Main Content */
  .page-content {
    flex: 1;
  }

  /* Footer */
  .site-footer {
    background: var(--dark);
    color: var(--white);
    padding: 2rem 0;
    text-align: center;
    margin-top: auto;
  }

  .site-footer p {
    opacity: 0.8;
    font-size: 0.9rem;
  }

  /* Mobile */
  @media (max-width: 768px) {
    .site-header .container {
      justify-content: center;
      text-align: center;
    }
    .main-nav {
      order: 3;
      width: 100%;
      justify-content: center;
      flex-wrap: wrap;
    }
  }
</style>

<div class="site-wrapper">
  <header class="site-header">
    <div class="container">
      <a href="/" class="brand">Maxi-Mize Health Solutions</a>
      <nav class="main-nav">
        <a href="/" class="nav-link">Home</a>
        <a href="/services" class="nav-link">Our Services</a>
        <a href="/about" class="nav-link">About Us</a>
        <a href="/contact" class="cta-button">Get in Touch</a>
        <button class="login-btn" on:click={() => window.location.href = '/login'}>Log In</button>
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
