<svelte:head>
  <title>Maximizing Health Solution</title>
  <meta name="description" content="Your trusted partner for better health and wellness — because every life matters" />
</svelte:head>

<nav class="navbar">
  <div class="container">
    <a href="/" class="brand">
      <span class="logo-icon">♡</span>
      <span class="logo-text">Maximizing Health</span>
    </a>
    <ul class="nav-links">
      <li><a href="/" class="active">Home</a></li>
      <li><a href="/services">Services</a></li>
      <li><a href="/about">About</a></li>
      <li><a href="/contact">Contact</a></li>
      <li class="nav-divider" aria-hidden="true"></li>
      <li><a href="/login" class="btn-login">Login</a></li>
    </ul>
    <button class="mobile-menu-toggle" aria-label="Toggle menu">☰</button>
  </div>
</nav>

<section class="hero">
  <div class="hero-overlay"></div>
  <div class="hero-content">
    <p class="hero-intro">Not just health care — heart care</p>
    <h1>Your Health, Your Dignity, Our Purpose</h1>
    <p class="hero-subtext">Every person is unique. Every story matters. We stand beside you with compassion, clarity, and unwavering care — because your life deserves nothing less.</p>
    <div class="hero-buttons">
      <a href="/contact" class="btn-primary">Begin Your Journey</a>
      <a href="/about" class="btn-secondary">Meet Our Heart</a>
    </div>
  </div>
  <div class="hero-shape"></div>
</section>

<section class="values">
  <div class="container">
    <div class="values-header">
      <p class="values-tagline">Guided by what truly counts</p>
      <h2>More Than Wellness — It’s Personal</h2>
      <p class="values-lead">We don’t just treat conditions — we see the whole you. Your hopes, your comfort, your peace of mind — these are at the centre of everything we do.</p>
    </div>
    <div class="grid">
      <div class="value-card">
        <div class="card-icon">🤍</div>
        <h3>Compassion First</h3>
        <p>Kindness isn’t extra — it’s the foundation. We listen deeply and meet you where you are, with respect and warmth in every conversation.</p>
      </div>
      <div class="value-card">
        <div class="card-icon">✦</div>
        <h3>Tailored to You</h3>
        <p>No two journeys are the same. Your plan is built around your life, your goals, and what makes you feel most like you.</p>
      </div>
      <div class="value-card">
        <div class="card-icon">🛡</div>
        <h3>Safe & Trusted</h3>
        <p>Transparency, dignity, and reliability. You can rest easy knowing you’re supported by a team that honours your trust above all else.</p>
      </div>
    </div>
  </div>
</section>

<section class="impact">
  <div class="impact-inner">
    <div class="impact-content">
      <h2>“You matter. Your health matters. We are here to help you thrive.”</h2>
      <p>Every step we take is with one aim: to give you the confidence and care to live fully, every single day.</p>
      <a href="/services" class="btn-soft">See How We Support You →</a>
    </div>
  </div>
</section>

<section class="callout">
  <div class="container">
    <h2>Ready to take the next gentle step?</h2>
    <p>Reaching out takes courage — and we’re honoured you’d consider us to walk this path with you.</p>
    <a href="/contact" class="btn-primary">Get In Touch Today</a>
  </div>
</section>

<footer class="footer">
  <div class="container">
    <p class="footer-heart">Caring deeply. Supporting fully. Always.</p>
    <p>&copy; 2026 Maximizing Health Solution. All rights reserved.</p>
  </div>
</footer>

<style>
  :root {
    --primary: #14b8a6;
    --primary-light: #5eead4;
    --primary-soft: #ccfbf1;
    --accent: #f43f5e;
    --dark: #0f172a;
    --mid: #475569;
    --light: #f8fafc;
    --shadow-soft: 0 10px 30px rgba(20, 184, 166, 0.08);
    --shadow-lift: 0 20px 60px rgba(20, 184, 166, 0.12);
    --radius: 16px;
    --radius-lg: 24px;
  }

  * { margin: 0; padding: 0; box-sizing: border-box; font-family: system-ui, -apple-system, Segoe UI, Roboto, sans-serif; }

  /* Navigation */
  .navbar {
    background: rgba(255,255,255,0.85);
    backdrop-filter: blur(12px);
    position: sticky; top: 0; z-index: 100;
    border-bottom: 1px solid rgba(20, 184, 166, 0.08);
  }
  .container { max-width: 1200px; margin: 0 auto; padding: 0 1.5rem; }
  .navbar .container {
    display: flex; justify-content: space-between; align-items: center;
    padding-top: 1rem; padding-bottom: 1rem;
  }
  .brand {
    display: flex; align-items: center; gap: 0.6rem;
    text-decoration: none; color: inherit;
  }
  .logo-icon { font-size: 1.5rem; color: var(--accent); }
  .logo-text { font-size: 1.35rem; font-weight: 700; color: var(--primary); letter-spacing: -0.02em; }
  .nav-links {
    display: flex; list-style: none; gap: 1.8rem; align-items: center;
  }
  .nav-divider { width: 1px; height: 24px; background: #e2e8f0; }
  .nav-links a {
    text-decoration: none; color: var(--mid); font-weight: 500;
    transition: color 0.3s ease;
  }
  .nav-links a:hover, .nav-links a.active { color: var(--primary); }
  .btn-login {
    padding: 0.6rem 1.5rem; border-radius: 50px;
    border: 1.5px solid var(--primary); color: var(--primary) !important;
    font-weight: 600; transition: all 0.3s ease;
  }
  .btn-login:hover {
    background: var(--primary); color: white !important;
    transform: translateY(-2px); box-shadow: var(--shadow-soft);
  }
  .mobile-menu-toggle { display: none; background: none; border: none; font-size: 1.5rem; cursor: pointer; }

  /* Hero */
  .hero {
    position: relative; overflow: hidden;
    background: linear-gradient(135deg, #0d9488 0%, #5eead4 50%, #ccfbf1 100%);
    padding: 6rem 1.5rem 8rem; text-align: center;
  }
  .hero-overlay {
    position: absolute; inset: 0;
    background: radial-gradient(circle at 30% 30%, rgba(255,255,255,0.25), transparent 60%);
  }
  .hero-content {
    position: relative; z-index: 1; max-width: 900px; margin: 0 auto;
  }
  .hero-intro {
    color: #0f766e; font-weight: 600; letter-spacing: 0.15em; text-transform: uppercase;
    font-size: 0.95rem; margin-bottom: 1rem;
  }
  .hero h1 {
    font-size: clamp(2.4rem, 6vw, 3.8rem); line-height: 1.1; color: var(--dark);
    margin-bottom: 1.5rem; font-weight: 800;
  }
  .hero-subtext {
    font-size: 1.2rem; line-height: 1.7; color: #134e4a;
    max-width: 700px; margin: 0 auto 2.5rem;
  }
  .hero-buttons {
    display: flex; gap: 1.2rem; justify-content: center; flex-wrap: wrap;
  }
  .btn-primary {
    padding: 0.95rem 2.4rem; border-radius: 50px; font-weight: 700;
    text-decoration: none; transition: all 0.3s ease;
    background: var(--dark); color: white;
    box-shadow: 0 10px 25px rgba(15, 23, 42, 0.15);
  }
  .btn-primary:hover {
    transform: translateY(-3px); box-shadow: var(--shadow-lift);
  }
  .btn-secondary {
    padding: 0.95rem 2.4rem; border-radius: 50px; font-weight: 700;
    text-decoration: none; background: transparent; color: var(--dark);
    border: 2px solid rgba(15, 23, 42, 0.15); transition: all 0.3s ease;
  }
  .btn-secondary:hover {
    border-color: var(--primary); color: var(--primary);
    transform: translateY(-3px);
  }
  .hero-shape {
    position: absolute; bottom: 0; left: 0; right: 0; height: 80px;
    background: linear-gradient(to bottom right, white 50%, #f0fdfa 50%);
    clip-path: polygon(0 100%, 100% 100%, 100% 0);
  }

  /* Values Section */
  .values { padding: 5rem 1.5rem 6rem; background: white; }
  .values-header { text-align: center; max-width: 750px; margin: 0 auto 4rem; }
  .values-tagline {
    color: var(--accent); font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase;
    font-size: 0.9rem; margin-bottom: 0.8rem;
  }
  .values h2 { font-size: 2.3rem; color: var(--dark); margin-bottom: 1rem; }
  .values-lead { font-size: 1.1rem; color: var(--mid); line-height: 1.7; }
  .grid {
    display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem;
  }
  .value-card {
    background: linear-gradient(180deg, #f0fdfa, white);
    padding: 2.5rem; border-radius: var(--radius-lg);
    border: 1px solid var(--primary-soft);
    transition: all 0.4s ease;
  }
  .value-card:hover {
    transform: translateY(-8px); box-shadow: var(--shadow-lift);
    border-color: var(--primary-light);
  }
  .card-icon { font-size: 2rem; margin-bottom: 1rem; }
  .value-card h3 {
    color: var(--primary); font-size: 1.3rem; margin-bottom: 1rem;
  }
  .value-card p { color: var(--mid); line-height: 1.7; }

  /* Impact Quote Section */
  .impact {
    background: linear-gradient(135deg, #0f766e, #14b8a6);
    padding: 5rem 1.5rem;
  }
  .impact-inner {
    max-width: 800px; margin: 0 auto; text-align: center;
  }
  .impact h2 {
    color: white; font-size: 2rem; line-height: 1.4; margin-bottom: 1.5rem;
    font-weight: 700;
  }
  .impact p {
    color: #ccfbf1; font-size: 1.1rem; margin-bottom: 2rem; line-height: 1.7;
  }
  .btn-soft {
    color: white; font-weight: 600; text-decoration: none;
    border-bottom: 2px solid rgba(255,255,255,0.3);
    padding-bottom: 0.2rem; transition: all 0.3s ease;
  }
  .btn-soft:hover { border-bottom-color: white; }

  /* Callout */
  .callout {
    padding: 5rem 1.5rem; text-align: center; background: #f0fdfa;
  }
  .callout h2 { font-size: 2rem; color: var(--dark); margin-bottom: 1rem; }
  .callout p { max-width: 600px; margin: 0 auto 2rem; color: var(--mid); font-size: 1.1rem; line-height: 1.7; }

  /* Footer */
  .footer {
    background: var(--dark); color: white; text-align: center;
    padding: 3rem 1.5rem;
  }
  .footer-heart { color: var(--primary-light); margin-bottom: 0.5rem; font-weight: 500; }
  .footer p { opacity: 0.7; font-size: 0.95rem; }

  /* Responsive */
  @media (max-width: 768px) {
    .nav-links { gap: 1rem; }
    .nav-divider { display: none; }
    .hero { padding: 4rem 1.5rem 6rem; }
    .impact h2 { font-size: 1.5rem; }
  }
</style>
