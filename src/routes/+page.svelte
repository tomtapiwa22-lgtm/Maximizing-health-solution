<svelte:head>
  <title>Home — Maxi-Mize Health Solutions</title>
  <meta name="description" content="Compassionate care and wellness solutions" />
  <style>
    /* Hard-reset all inherited styles — NO outside code affects this page */
    :global(body), :global(html) {
      all: initial !important;
      margin: 0 !important;
      padding: 0 !important;
      font-family: system-ui, -apple-system, sans-serif !important;
      background: transparent !important;
    }
  </style>
</svelte:head>

<!-- DEBUG PANEL — shows if ANY external styles are overriding ours -->
<div class="debug-panel" id="debugPanel">
  <strong>🔍 Style Debug Log</strong>
  <div id="debugLog"></div>
</div>

<div class="page-root">
  <!-- Hero Section -->
  <section class="hero-section" id="heroSection">
    <div class="hero-inner">
      <h1 class="hero-heading">Your Health, Our Priority</h1>
      <p class="hero-text">Compassionate care and wellness solutions tailored just for you.</p>
      <a href="/contact" class="hero-button">Get In Touch</a>
    </div>
  </section>

  <!-- Features Section -->
  <section class="features-section" id="featuresSection">
    <div class="features-container">
      <h2 class="features-heading">How We Can Help</h2>
      <div class="features-grid">
        <div class="feature-card" id="card1">
          <h3>Personal Care</h3>
          <p>Individualised support designed around your unique health needs.</p>
        </div>
        <div class="feature-card" id="card2">
          <h3>Wellness Plans</h3>
          <p>Holistic approaches covering physical, mental, and lifestyle well-being.</p>
        </div>
        <div class="feature-card" id="card3">
          <h3>Professional Support</h3>
          <p>Experienced team dedicated to your health journey every step of the way.</p>
        </div>
      </div>
    </div>
  </section>
</div>

<script>
  // 🔍 DEBUG: Detect if ANY styles come from outside this file
  import { onMount } from 'svelte';

  onMount(() => {
    const log = (msg) => {
      const el = document.getElementById('debugLog');
      if (el) el.innerHTML += `<div class="log-entry">${msg}</div>`;
      console.log('[STYLE-CHECK]', msg);
    };

    log('✅ Page mounted — running style integrity checks...');

    // Check hero background — MUST be our blue gradient
    setTimeout(() => {
      const hero = document.getElementById('heroSection');
      if (!hero) return;

      const bg = window.getComputedStyle(hero).backgroundImage;
      if (bg.includes('0ea5e9') || bg.includes('rgb(14, 165, 233)')) {
        log('✅ Hero background: CORRECT blue gradient');
      } else if (bg.includes('2dd4bf') || bg.includes('teal') || bg.includes('rgb(45, 212, 191)')) {
        log('❌ HERO OVERRIDE DETECTED — Old teal/green showing! Source: layout.css or cached old file');
      } else if (bg === 'none' || bg === '') {
        log('⚠️ Hero background empty — styles may not have loaded');
      } else {
        log(`⚠️ Unexpected background: ${bg.slice(0, 100)}...`);
      }

      // Check cards exist & visible
      const cards = document.querySelectorAll('.feature-card');
      log(`📋 Feature cards found: ${cards.length} (expected 3)`);
      if (cards.length !== 3) {
        log('❌ Cards missing — file may be incomplete or old version cached');
      }

      // Check card background
      if (cards[0]) {
        const cardBg = window.getComputedStyle(cards[0]).backgroundColor;
        if (cardBg === 'rgb(255, 255, 255)') {
          log('✅ Card background: white ✅');
        } else {
          log(`❌ Card background OVERRIDE: ${cardBg} — coming from external code`);
        }
      }

      log('✅ Check complete — if no ❌ above, page is clean!');
    }, 100);
  });
</script>

<style>
  /* ==============================================
     HARD-CODED — NO INHERITANCE FROM ANYWHERE ELSE
     ============================================== */

  :root {
    --blue-50: #f0f9ff;
    --blue-500: #0ea5e9;
    --blue-600: #0284c7;
    --blue-700: #0369a1;
    --dark: #0c4a6e;
    --text: #334155;
    --white: #ffffff;
    --radius: 16px;
    --shadow: 0 10px 30px rgba(14, 165, 233, 0.15);
  }

  /* Full reset — block ALL external styles */
  .page-root, .page-root * {
    all: unset !important;
    box-sizing: border-box !important;
    display: block !important;
    font-family: system-ui, -apple-system, sans-serif !important;
  }

  .page-root {
    display: block !important;
    line-height: 1.6 !important;
    color: var(--text) !important;
  }

  /* Debug Panel */
  .debug-panel {
    position: fixed !important;
    top: 10px !important;
    right: 10px !important;
    background: #fffbeb !important;
    border: 2px solid #f59e0b !important;
    border-radius: 12px !important;
    padding: 1rem !important;
    max-width: 350px !important;
    max-height: 300px !important;
    overflow-y: auto !important;
    z-index: 99999 !important;
    font-size: 12px !important;
    font-family: monospace !important;
  }
  .log-entry {
    margin: 4px 0 !important;
    padding: 2px 0 !important;
    border-bottom: 1px solid #fef3c7 !important;
  }

  /* Hero */
  .hero-section {
    background: linear-gradient(135deg, var(--blue-500) 0%, var(--blue-600) 100%) !important;
    padding: 5rem 1.5rem !important;
    text-align: center !important;
    color: var(--white) !important;
    display: block !important;
  }

  .hero-inner {
    max-width: 700px !important;
    margin: 0 auto !important;
  }

  .hero-heading {
    font-size: clamp(2.2rem, 5vw, 3.5rem) !important;
    margin-bottom: 1.5rem !important;
    font-weight: 700 !important;
    line-height: 1.2 !important;
    color: var(--white) !important;
  }

  .hero-text {
    font-size: 1.15rem !important;
    margin-bottom: 2rem !important;
    opacity: 0.92 !important;
    color: var(--white) !important;
  }

  .hero-button {
    display: inline-block !important;
    background: var(--white) !important;
    color: var(--blue-600) !important;
    padding: 0.9rem 2.5rem !important;
    border-radius: 999px !important;
    font-weight: 600 !important;
    text-decoration: none !important;
    box-shadow: var(--shadow) !important;
    transition: transform 0.3s ease !important;
  }

  .hero-button:hover {
    transform: translateY(-3px) !important;
  }

  /* Features */
  .features-section {
    padding: 4rem 1.5rem !important;
    background: var(--blue-50) !important;
    display: block !important;
  }

  .features-container {
    max-width: 1100px !important;
    margin: 0 auto !important;
  }

  .features-heading {
    text-align: center !important;
    font-size: 2rem !important;
    color: var(--dark) !important;
    margin-bottom: 3rem !important;
    font-weight: 700 !important;
  }

  .features-grid {
    display: grid !important;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)) !important;
    gap: 2rem !important;
  }

  .feature-card {
    background: var(--white) !important;
    padding: 2rem !important;
    border-radius: var(--radius) !important;
    border-top: 4px solid var(--blue-500) !important;
    box-shadow: 0 4px 15px rgba(14, 165, 233, 0.08) !important;
    transition: transform 0.3s ease !important;
  }

  .feature-card:hover {
    transform: translateY(-5px) !important;
  }

  .feature-card h3 {
    color: var(--blue-700) !important;
    font-size: 1.25rem !important;
    margin-bottom: 1rem !important;
    font-weight: 600 !important;
  }

  .feature-card p {
    color: var(--text) !important;
    line-height: 1.7 !important;
  }

  /* Mobile */
  @media (max-width: 768px) {
    .hero-section { padding: 3rem 1rem !important; }
    .features-section { padding: 3rem 1rem !important; }
    .debug-panel { display: none !important; } /* hide on phones */
  }
</style>
