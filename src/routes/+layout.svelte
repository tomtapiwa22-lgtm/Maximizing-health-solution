<style>
  /* Hero Section */
  .hero {
    background: linear-gradient(135deg, #0ea5e9 0%, #0284c7 50%, #0369a1 100%);
    padding: 5rem 1.5rem;
    text-align: center;
    color: white;
    animation: fadeInUp 0.8s ease-out;
    position: relative;
    overflow: hidden;
  }

  .hero::before {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(circle at 20% 30%, rgba(255,255,255,0.12), transparent 50%),
                radial-gradient(circle at 80% 80%, rgba(255,255,255,0.08), transparent 40%);
    pointer-events: none;
  }

  .hero-content {
    max-width: 720px;
    margin: 0 auto;
    position: relative;
    z-index: 1;
  }

  .hero h1 {
    font-size: clamp(2.2rem, 5vw, 3.4rem);
    margin-bottom: 1.25rem;
    font-weight: 700;
    letter-spacing: -0.02em;
    line-height: 1.2;
  }

  .hero p {
    font-size: 1.15rem;
    margin-bottom: 2.5rem;
    opacity: 0.92;
    line-height: 1.7;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
  }

  .hero-btn {
    display: inline-block;
    background: white;
    color: #0284c7;
    padding: 0.95rem 2.5rem;
    border-radius: 999px;
    font-weight: 600;
    text-decoration: none;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: 0 4px 20px rgba(14, 165, 233, 0.25);
  }

  .hero-btn:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 30px rgba(14, 165, 233, 0.35);
  }

  /* Features Section */
  .features {
    padding: 5rem 1.5rem;
    background: #f8fafc;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
  }

  .features h2 {
    text-align: center;
    font-size: clamp(1.8rem, 4vw, 2.4rem);
    margin-bottom: 3.5rem;
    color: #0c4a6e;
    font-weight: 700;
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 2rem;
  }

  .card {
    background: white;
    padding: 2.5rem 2rem;
    border-radius: 16px;
    box-shadow: 0 2px 15px rgba(14, 165, 233, 0.06);
    transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
    opacity: 0;
    animation: fadeInUp 0.6s ease-out forwards;
    border-top: 4px solid transparent;
  }

  .card:nth-child(1) { animation-delay: 0.1s; border-color: #0ea5e9; }
  .card:nth-child(2) { animation-delay: 0.2s; border-color: #0284c7; }
  .card:nth-child(3) { animation-delay: 0.3s; border-color: #0369a1; }

  .card:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 40px rgba(14, 165, 233, 0.15);
  }

  .card h3 {
    color: #0369a1;
    font-size: 1.25rem;
    margin-bottom: 1rem;
    font-weight: 600;
  }

  .card p {
    color: #64748b;
    line-height: 1.7;
    font-size: 0.98rem;
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
    .hero {
      padding: 3.5rem 1.25rem;
    }
    .features {
      padding: 3.5rem 1.25rem;
    }
    .grid {
      gap: 1.5rem;
    }
    .card {
      padding: 2rem 1.5rem;
    }
  }
</style>

<section class="hero">
  <div class="hero-content">
    <h1>Your Health, Our Priority</h1>
    <p>Providing compassionate care and wellness solutions to help you live your best life. Professional support tailored to you.</p>
    <a href="/contact" class="hero-btn">Get In Touch</a>
  </div>
</section>

<section class="features">
  <div class="container">
    <h2>How We Can Help</h2>
    <div class="grid">
      <div class="card">
        <h3>Personal Care</h3>
        <p>Individualised support tailored to your unique health needs. We take the time to understand you and your goals.</p>
      </div>
      <div class="card">
        <h3>Wellness Plans</h3>
        <p>Holistic approaches to improve your overall well-being. Comprehensive care plans covering physical, mental, and lifestyle health.</p>
      </div>
      <div class="card">
        <h3>Professional Support</h3>
        <p>Experienced team dedicated to your health journey. Qualified professionals committed to delivering excellence in every interaction.</p>
      </div>
    </div>
  </div>
</section>
