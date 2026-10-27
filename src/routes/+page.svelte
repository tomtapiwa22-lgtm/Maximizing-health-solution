<style>
  /* Base */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --blue-50: #f0f9ff;
    --blue-100: #e0f2fe;
    --blue-500: #0ea5e9;
    --blue-600: #0284c7;
    --blue-700: #0369a1;
    --dark: #0c4a6e;
    --text: #334155;
    --white: #ffffff;
    --shadow: 0 10px 30px rgba(14, 165, 233, 0.15);
    --radius: 16px;
    --transition: all 0.3s ease;
  }

  body {
    font-family: system-ui, -apple-system, sans-serif;
    color: var(--text);
    line-height: 1.6;
  }

  /* Hero Section */
  .hero {
    background: linear-gradient(135deg, var(--blue-500) 0%, var(--blue-600) 100%);
    min-height: 85vh;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 3rem 1.5rem;
  }

  .hero-content {
    max-width: 700px;
    color: var(--white);
  }

  .hero h1 {
    font-size: clamp(2.2rem, 5vw, 3.5rem);
    margin-bottom: 1.5rem;
    font-weight: 700;
    line-height: 1.2;
  }

  .hero p {
    font-size: 1.15rem;
    margin-bottom: 2.5rem;
    opacity: 0.92;
  }

  .hero-btn {
    display: inline-block;
    background: var(--white);
    color: var(--blue-600);
    padding: 0.9rem 2.5rem;
    border-radius: 999px;
    font-weight: 600;
    text-decoration: none;
    transition: var(--transition);
    box-shadow: var(--shadow);
  }

  .hero-btn:hover {
    transform: translateY(-3px);
    box-shadow: 0 15px 35px rgba(2, 132, 199, 0.25);
  }

  /* Features Section */
  .features {
    padding: 5rem 1.5rem;
    background: var(--blue-50);
  }

  .container {
    max-width: 1100px;
    margin: 0 auto;
  }

  .features h2 {
    text-align: center;
    font-size: clamp(1.8rem, 4vw, 2.5rem);
    color: var(--dark);
    margin-bottom: 3rem;
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
  }

  .card {
    background: var(--white);
    padding: 2rem;
    border-radius: var(--radius);
    box-shadow: 0 4px 15px rgba(14, 165, 233, 0.08);
    transition: var(--transition);
    border-top: 4px solid var(--blue-500);
  }

  .card:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 25px rgba(14, 165, 233, 0.12);
  }

  .card h3 {
    color: var(--blue-700);
    font-size: 1.25rem;
    margin-bottom: 1rem;
  }

  .card p {
    color: var(--text);
    line-height: 1.7;
  }

  /* Mobile */
  @media (max-width: 768px) {
    .hero {
      min-height: 75vh;
      padding: 2rem 1rem;
    }
    .features {
      padding: 3rem 1rem;
    }
  }
</style>

<!-- Hero Section -->
<section class="hero">
  <div class="hero-content">
    <h1>Your Health, Our Priority</h1>
    <p>Compassionate care and wellness solutions tailored just for you.</p>
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
        <p>Individualised support designed around your unique health needs and goals.</p>
      </div>
      <div class="card">
        <h3>Wellness Plans</h3>
        <p>Holistic approaches covering physical, mental, and lifestyle well-being.</p>
      </div>
      <div class="card">
        <h3>Professional Support</h3>
        <p>Experienced team dedicated to your health journey every step of the way.</p>
      </div>
    </div>
  </div>
</section>
