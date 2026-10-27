<script>
  // Login action — update with your actual route
  const handleLogin = () => {
    window.location.href = '/login';
  };
</script>

<style>
  /* Base Reset & Variables */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --primary: #0d9488;
    --primary-dark: #0f766e;
    --accent: #f97316;
    --accent-hover: #ea580c;
    --light: #f0fdfa;
    --dark: #1e293b;
    --muted: #64748b;
    --white: #ffffff;
    --shadow-sm: 0 2px 8px rgba(0,0,0,0.06);
    --shadow-md: 0 6px 20px rgba(13, 148, 136, 0.12);
    --shadow-lg: 0 12px 40px rgba(13, 148, 136, 0.18);
    --radius: 12px;
    --transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  body {
    font-family: 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif;
    line-height: 1.6;
    color: var(--dark);
  }

  /* Navigation */
  nav {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    padding: 1.5rem 2rem;
    display: flex;
    justify-content: flex-end;
    z-index: 10;
  }

  .login-btn {
    background: transparent;
    color: var(--primary-dark);
    border: 2px solid var(--primary);
    padding: 0.7rem 1.8rem;
    border-radius: var(--radius);
    font-weight: 600;
    font-size: 1rem;
    cursor: pointer;
    transition: var(--transition);
  }

  .login-btn:hover {
    background: var(--primary);
    color: var(--white);
    transform: translateY(-2px);
    box-shadow: var(--shadow-md);
  }

  /* Hero Section */
  .hero {
    background: linear-gradient(135deg, var(--light) 0%, #ccfbf1 100%);
    padding: 8rem 1.5rem 6rem;
    text-align: center;
    overflow: hidden;
  }

  .hero-inner {
    max-width: 800px;
    margin: 0 auto;
    animation: fadeInUp 0.8s ease-out;
  }

  .hero h1 {
    font-size: clamp(2.5rem, 5vw, 3.8rem);
    color: var(--primary-dark);
    margin-bottom: 1.2rem;
    line-height: 1.2;
  }

  .hero p {
    font-size: clamp(1.1rem, 2.5vw, 1.35rem);
    color: var(--muted);
    margin-bottom: 2.5rem;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
  }

  .hero-btn {
    display: inline-block;
    background: var(--accent);
    color: var(--white);
    padding: 1rem 2.6rem;
    border-radius: var(--radius);
    font-weight: 600;
    font-size: 1.05rem;
    text-decoration: none;
    transition: var(--transition);
    box-shadow: 0 4px 12px rgba(249, 115, 22, 0.25);
  }

  .hero-btn:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 20px rgba(249, 115, 22, 0.35);
    background: var(--accent-hover);
  }

  /* Features Section */
  .features {
    padding: 5rem 1.5rem;
    background: var(--white);
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
  }

  .features h2 {
    text-align: center;
    font-size: clamp(1.8rem, 4vw, 2.5rem);
    color: var(--primary-dark);
    margin-bottom: 3.5rem;
    position: relative;
  }

  .features h2::after {
    content: '';
    display: block;
    width: 60px;
    height: 4px;
    background: var(--accent);
    margin: 0.8rem auto 0;
    border-radius: 2px;
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
  }

  .card {
    background: var(--white);
    padding: 2.5rem 2rem;
    border-radius: var(--radius);
    box-shadow: var(--shadow-sm);
    border-top: 4px solid var(--primary);
    transition: var(--transition);
    opacity: 0;
    animation: fadeInUp 0.6s ease-out forwards;
  }

  .card:nth-child(1) { animation-delay: 0.1s; }
  .card:nth-child(2) { animation-delay: 0.2s; }
  .card:nth-child(3) { animation-delay: 0.3s; }

  .card:hover {
    transform: translateY(-8px);
    box-shadow: var(--shadow-lg);
  }

  .card h3 {
    font-size: 1.3rem;
    color: var(--primary-dark);
    margin-bottom: 1rem;
  }

  .card p {
    color: var(--muted);
    line-height: 1.7;
  }

  /* Animations */
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  /* Responsive */
  @media (max-width: 768px) {
    nav {
      padding: 1.2rem 1.5rem;
    }
    .login-btn {
      padding: 0.6rem 1.5rem;
    }
    .hero {
      padding: 7rem 1.25rem 4.5rem;
    }
    .features {
      padding: 3.5rem 1.25rem;
    }
    .card {
      padding: 2rem 1.5rem;
    }
  }
</style>

<!-- Navigation with Login -->
<nav>
  <button class="login-btn" on:click={handleLogin}>Log In</button>
</nav>

<!-- Hero Section -->
<section class="hero">
  <div class="hero-inner">
    <h1>Your Health, Our Priority</h1>
    <p>Providing compassionate care and wellness solutions to help you live your best life.</p>
    <a href="/contact" class="hero-btn">Get In Touch</a>
  </div>
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
