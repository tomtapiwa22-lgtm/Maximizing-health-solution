<section class="hero">
  <div class="hero-gradient"></div>
  <div class="container">
    <div class="hero-grid">
      <div class="hero-text">
        <p class="tagline">Welcome to Maxi-Mize Health Solutions</p>
        <h1>Your Health, Your Dignity, Our Care</h1>
        <p class="hero-desc">
          Compassionate support tailored to you. We listen, we understand, 
          and we’re here every step of the way — because your wellbeing matters most.
        </p>
        <div class="hero-buttons">
          <a href="/contact" class="btn-primary">Get in Touch</a>
          <a href="/our-care" class="btn-secondary">Our Services</a>
        </div>
        <p class="hero-note">No pressure, no obligation — just honest care</p>
      </div>
      <div class="hero-image">
        <img 
          src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=600&h=500" 
          alt="Compassionate care and support"
          loading="lazy"
        />
      </div>
    </div>
  </div>
</section>

<section class="features">
  <div class="container">
    <div class="section-head">
      <p class="section-tagline">Why Choose Us</p>
      <h2>Care Built Around You</h2>
      <p>Trusted, transparent, and truly personal — support that sees the whole you.</p>
    </div>
    <div class="features-grid">
      <div class="feature-card">
        <div class="icon">🤝</div>
        <h3>Compassion First</h3>
        <p>Kindness is our foundation. We meet you where you are, with respect and warmth always.</p>
      </div>
      <div class="feature-card">
        <div class="icon">📋</div>
        <h3>Tailored Support</h3>
        <p>Every journey is unique. Your care plan is built around your life, your goals, your wishes.</p>
      </div>
      <div class="feature-card">
        <div class="icon">🛡️</div>
        <h3>Trusted & Reliable</h3>
        <p>Transparent, dependable, and fully accountable. You can rest easy knowing you’re in safe hands.</p>
      </div>
      <div class="feature-card">
        <div class="icon">💙</div>
        <h3>Always Available</h3>
        <p>Here when you need us. Call, email, or message — we respond promptly and with care.</p>
      </div>
    </div>
  </div>
</section>

<section class="quote-section">
  <div class="container quote-inner">
    <blockquote>
      "We don't just provide care — we stand beside you. Your confidence, comfort, 
      and peace of mind are at the heart of everything we do."
    </blockquote>
  </div>
</section>

<section class="cta-section">
  <div class="container cta-inner">
    <h2>Ready to talk?</h2>
    <p>Reaching out takes courage — and we’re honoured you’d consider us. Let’s see how we can help.</p>
    <div class="cta-buttons">
      <a href="tel:07727694903" class="btn-phone">📞 07727 694903</a>
      <a href="/contact" class="btn-primary">Send a Message</a>
    </div>
  </div>
</section>

<style>
  :root {
    --navy: #0a2540;
    --blue: #1e40af;
    --blue-light: #3b82f6;
    --sky: #e0f2fe;
    --pale: #f0f7ff;
    --slate: #475569;
    --light: #f8fafc;
    --accent: #0ea5e9;
    --shadow-soft: 0 8px 30px rgba(30, 64, 175, 0.08);
    --shadow-lift: 0 16px 50px rgba(30, 64, 175, 0.12);
    --radius: 14px;
    --radius-lg: 20px;
  }

  * { margin: 0; padding: 0; box-sizing: border-box; }
  .container { max-width: 1200px; margin: 0 auto; padding: 0 1.5rem; }

  /* Hero */
  .hero {
    position: relative;
    padding: 5rem 1.5rem 7rem;
    overflow: hidden;
  }
  .hero-gradient {
    position: absolute; inset: 0;
    background: linear-gradient(135deg, var(--pale) 0%, var(--sky) 100%);
    z-index: -1;
  }
  .hero-grid {
    display: grid;
    grid-template-columns: 1.1fr 0.9fr;
    gap: 4rem;
    align-items: center;
  }
  .tagline {
    color: var(--blue);
    font-weight: 600;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    font-size: 0.9rem;
    margin-bottom: 1rem;
  }
  .hero-text h1 {
    font-size: clamp(2.4rem, 5vw, 3.4rem);
    line-height: 1.15;
    color: var(--navy);
    margin-bottom: 1.5rem;
  }
  .hero-desc {
    font-size: 1.15rem;
    line-height: 1.7;
    color: var(--slate);
    margin-bottom: 2rem;
  }
  .hero-buttons {
    display: flex; gap: 1.2rem; margin-bottom: 1rem; flex-wrap: wrap;
  }
  .btn-primary {
    padding: 0.9rem 2.2rem;
    background: var(--blue);
    color: white;
    border-radius: 50px;
    font-weight: 600;
    text-decoration: none;
    transition: all 0.3s ease;
    box-shadow: var(--shadow-soft);
  }
  .btn-primary:hover {
    background: var(--blue-light);
    transform: translateY(-2px);
    box-shadow: var(--shadow-lift);
  }
  .btn-secondary {
    padding: 0.9rem 2.2rem;
    border: 2px solid var(--blue);
    color: var(--blue);
    border-radius: 50px;
    font-weight: 600;
    text-decoration: none;
    transition: all 0.3s ease;
  }
  .btn-secondary:hover {
    background: var(--blue);
    color: white;
  }
  .hero-note {
    font-size: 0.9rem;
    color: var(--slate);
    opacity: 0.8;
  }
  .hero-image img {
    width: 100%;
    border-radius: var(--radius-lg);
    box-shadow: var(--shadow-lift);
    object-fit: cover;
  }

  /* Features */
  .features { padding: 5rem 1.5rem 6rem; background: white; }
  .section-head { text-align: center; max-width: 700px; margin: 0 auto 4rem; }
  .section-tagline {
    color: var(--blue);
    font-weight: 600;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    font-size: 0.9rem;
    margin-bottom: 0.8rem;
  }
  .section-head h2 {
    font-size: 2.2rem;
    color: var(--navy);
    margin-bottom: 1rem;
  }
  .section-head p { color: var(--slate); font-size: 1.1rem; line-height: 1.7; }
  .features-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: 2rem;
  }
  .feature-card {
    background: var(--pale);
    padding: 2.2rem;
    border-radius: var(--radius-lg);
    border: 1px solid rgba(30, 64, 175, 0.08);
    transition: all 0.35s ease;
  }
  .feature-card:hover {
    transform: translateY(-6px);
    box-shadow: var(--shadow-lift);
    border-color: var(--blue-light);
  }
  .icon { font-size: 2rem; margin-bottom: 1rem; }
  .feature-card h3 {
    color: var(--navy);
    font-size: 1.2rem;
    margin-bottom: 0.8rem;
  }
  .feature-card p { color: var(--slate); line-height: 1.7; }

  /* Quote */
  .quote-section {
    background: linear-gradient(135deg, var(--blue), var(--blue-light));
    padding: 5rem 1.5rem;
    text-align: center;
  }
  .quote-inner { max-width: 800px; }
  blockquote {
    color: white;
    font-size: 1.4rem;
    line-height: 1.6;
    font-style: italic;
  }

  /* CTA */
  .cta-section {
    padding: 5rem 1.5rem;
    background: var(--pale);
    text-align: center;
  }
  .cta-inner h2 {
    font-size: 2.2rem;
    color: var(--navy);
    margin-bottom: 1rem;
  }
  .cta-inner p {
    max-width: 600px;
    margin: 0 auto 2rem;
    color: var(--slate);
    font-size: 1.1rem;
    line-height: 1.7;
  }
  .cta-buttons {
    display: flex; gap: 1.2rem; justify-content: center; flex-wrap: wrap;
  }
  .btn-phone {
    padding: 0.9rem 2.2rem;
    background: white;
    color: var(--blue);
    border: 2px solid var(--blue);
    border-radius: 50px;
    font-weight: 600;
    text-decoration: none;
    transition: all 0.3s ease;
  }
  .btn-phone:hover {
    background: var(--blue);
    color: white;
  }

  /* Responsive */
  @media (max-width: 900px) {
    .hero-grid { grid-template-columns: 1fr; gap: 2.5rem; text-align: center; }
    .hero-buttons, .cta-buttons { justify-content: center; }
  }
</style>
