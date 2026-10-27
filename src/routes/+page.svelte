<style>
  /* Hero Section */
  .hero {
    background: linear-gradient(135deg, #2dd4bf 0%, var(--primary-dark) 100%);
    padding: 5rem 1.5rem;
    text-align: center;
    color: white;
    animation: fadeInUp 0.8s ease-out;
  }

  .hero-content {
    max-width: 700px;
    margin: 0 auto;
  }

  .hero h1 {
    font-size: clamp(2.2rem, 5vw, 3.2rem);
    margin-bottom: 1rem;
  }

  .hero p {
    font-size: 1.1rem;
    margin-bottom: 2rem;
    opacity: 0.92;
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
    background: var(--white);
  }

  .features h2 {
    text-align: center;
    font-size: clamp(1.8rem, 4vw, 2.2rem);
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
    font-size: 0.95rem;
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
</style>

<section class="hero">
  <div class="hero-content">
    <h1>Your Health, Our Priority</h1>
    <p>Providing compassionate care and wellness solutions to help you live your best life.</p>
    <a href="/contact" class="hero-btn">Get In Touch</a>
  </div>
</section>

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
