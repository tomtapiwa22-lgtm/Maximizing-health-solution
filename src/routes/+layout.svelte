<style>
  :root {
    --blue-50: #f0f9ff;
    --blue-100: #e0f2fe;
    --blue-500: #0ea5e9;
    --blue-600: #0284c7;
    --blue-700: #0369a1;
    --dark: #0c4a6e;
    --text: #334155;
    --white: #ffffff;
    --shadow-sm: 0 2px 8px rgba(14, 165, 233, 0.08);
    --shadow-md: 0 6px 20px rgba(14, 165, 233, 0.12);
    --radius: 12px;
    --transition: all 0.3s ease;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: system-ui, -apple-system, sans-serif;
    color: var(--text);
    line-height: 1.6;
  }

  .site-wrapper {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

  .container {
    max-width: 1100px;
    margin: 0 auto;
    padding: 0 1.5rem;
  }

  /* Header — NO TEAL */
  .site-header {
    padding: 1.2rem 0;
    background: rgba(255, 255, 255, 0.9);
    backdrop-filter: blur(10px);
    border-bottom: 1px solid var(--blue-100);
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
    font-size: 1.25rem;
    font-weight: 700;
    color: var(--blue-600);
    text-decoration: none;
  }

  .main-nav {
    display: flex;
    align-items: center;
    gap: 1rem;
    flex-wrap: wrap;
  }

  .nav-link {
    color: var(--text);
    text-decoration: none;
    font-weight: 500;
    padding: 0.5rem 0.25rem;
    transition: var(--transition);
  }

  .nav-link:hover {
    color: var(--blue-600);
  }

  .cta-button {
    background: var(--blue-600);
    color: var(--white);
    padding: 0.6rem 1.5rem;
    border-radius: 999px;
    text-decoration: none;
    font-weight: 600;
    transition: var(--transition);
  }

  .cta-button:hover {
    background: var(--blue-700);
    transform: translateY(-2px);
    box-shadow: var(--shadow-md);
  }

  .login-btn {
    border: 2px solid var(--blue-500);
    color: var(--blue-600);
    background: transparent;
    padding: 0.6rem 1.5rem;
    border-radius: 999px;
    font-weight: 600;
    text-decoration: none;
    transition: var(--transition);
  }

  .login-btn:hover {
    background: var(--blue-500);
    color: var(--white);
    transform: translateY(-2px);
  }

  .page-content {
    flex: 1;
  }

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

  @media (max-width: 768px) {
    .site-header .container {
      justify-content: center;
      text-align: center;
    }
    .main-nav {
      width: 100%;
      justify-content: center;
      margin-top: 0.5rem;
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
        <a href="/login" class="login-btn">Log In</a>
      </nav>
    </div>
  </header>

  <main class="page-content">
    <slot />
  </main>

  <footer class="site-footer">
    <div class="container">
      <p>© 2026 Maxi-Mize Health Solutions — Your Health, Our Priority</p>
    </div>
  </footer>
</div>
