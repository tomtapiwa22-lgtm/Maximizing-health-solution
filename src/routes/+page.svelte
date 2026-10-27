<script>
  const handleLogin = () => {
    window.location.href = '/login';
  };
</script>

<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --primary: #06b69f; /* matches your brand teal */
    --primary-dark: #0d9488;
    --accent: #f97316;
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
  }

  /* Header & Navigation */
  header {
    padding: 1rem 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: var(--white);
  }

  .logo {
    font-size: 1.3rem;
    font-weight: 700;
    color: var(--primary);
    text-decoration: none;
  }

  nav a {
    margin: 0 1rem;
    color: var(--dark);
    text-decoration: none;
    font-weight: 500;
    transition: var(--transition);
  }

  nav a:hover {
    color: var(--primary);
  }

  .nav-cta {
    background: var(--primary);
    color: white !important;
    padding: 0.6rem 1.5rem;
    border-radius: 999px;
  }

  .nav-cta:hover {
    background: var(--primary-dark);
    transform: translateY(-2px);
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
  }

  .login-btn:hover {
    background: var(--primary);
    color: white;
    transform: translateY(-2px);
    box-shadow: var(--shadow-md);
  }

  /* Hero Section */
  .hero {
    background: linear-gradient(135deg, #2dd4bf 0%, var(--primary-dark) 100%);
    padding: 6rem 1.5rem;
    text-align: center;
    color: white;
    animation: fadeInUp 0.8s ease-out;
  }

  .hero h1 {
    font-size: clamp(2.2rem, 5vw, 3.5rem);
    margin-bottom: 1rem;
  }

  .hero p {
    font-size: 1.15rem;
    max-width: 600px;
    margin: 0 auto 2rem;
    opacity: 0.9;
  }

  .hero-btn {
    display: inline-block;
    background: white;
    color: var(--primary-dark);
    padding: 0.9rem 2.4rem;
    border-radius: 999px;
    font-weight: 600;
    text-decoration: none;
    transition: var(--transition);
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  }

  .hero-btn:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 20px rgba(0,0,0,0.15);
  }

  /* Features Section */
  .features {
    padding: 4.5rem 1.5rem;
    background: white;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
  }

  .features h2 {
    text-align: center;
    font-size: clamp(1.8rem, 4vw, 2.5rem);
    margin-bottom: 3rem;
    color: var(--dark);
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
  }

  .card {
    background: var(--light);
    padding: 2.2rem 1.8rem;
    border-radius: var(--radius);
    transition: var(--transition);
    opacity: 0;
    animation: fadeInUp 0.6s ease-out forwards;
  }

  .card:nth-child(1) { animation-delay: 0.1s; }
  .card:nth-child(2) { animation-delay: 0.2s; }
  .card:nth-child(3) { animation-delay: 0.3s; }

  .card:hover {
    transform: translateY(-6px);
    box-shadow: var(--shadow-lg);
  }

  .card h3 {
    color: var(--primary);
    font-size: 1.2rem;
    margin-bottom: 0.8rem;
  }

  .card p {
    color: var(--muted);
    line-height: 1.6;
  }

  /* Footer */
  footer {
    background: var(--dark);
    color: white;
    padding: 2rem;
    text-align: center;
    font-size: 0.9rem;
    opacity: 0.8;
  }

  /* Animations */
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(25px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  /* Mobile */
  @media (max-width: 768px) {
    header {
      flex-wrap: wrap;
      gap: 1rem;
      padding: 1rem;
    }
    nav {
      order: 3;
      width: 100%;
      margin-top: 0.5rem;
    }
    nav a {
      margin: 0 0.5rem;
    }
    .hero {
      padding: 4rem 1.25rem;
    }
    .features {
      padding: 3rem 1.25rem;
    }
  }
</style>

<!-- Header / Navigation -->
<header>
  <a href="/" class="logo">Maxi-Mize Health Solutions</a>
  <nav>
    <a href="/">Home</a>
    <a href="/services">Our Services</a>
    <a href="/about">About Us</a>
    <a href="/contact" class="nav-cta">Get In Touch</a>
  </nav>
  <button class="login-btn" on:click={handleLogin}>Log In</button>
</header>

<!-- Hero Section -->
<section class="hero">
  <h1>Your Health, Our Priority</h1>
  <p>Providing compassionate care and wellness solutions to help you live your best life.</p>
  <a href="/contact" class="hero-btn">Get In Touch</a>
</section>

<!-- Features Section -->
<section class="features">
  <div class="container">
    <h2>How We Can Help</h2>
    <div class="grid">
      <div class="card">
        <h3>Personal Care</h3>
        <p>Individualised support tailored to your unique health needs.</p>
      </div>
      <div class="card">
        <h3>Wellness Plans</h3>
        <p>Holistic approaches to improve your overall well-being.</p>
      </div>
      <div class="card">
        <h3>Professional Support</h3>
        <p>Experienced team dedicated to your health journey.</p>
      </div>
    </div>
  </div>
</section>

<!-- Footer -->
<footer>
  © 2026 Maxi-Mize Health Solutions — Your Health, Your Dignity, Our Care
</footer>
