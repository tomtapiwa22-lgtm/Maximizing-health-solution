<script>
  console.log('✅ [+page.svelte] Script executed');
  
  if (typeof document !== 'undefined') {
    setTimeout(() => {
      console.log('🎨 [+page.svelte] Checking styles...');
      const bodyStyle = getComputedStyle(document.body);
      console.log('📋 Body font:', bodyStyle.fontFamily);
      console.log('📋 Body background:', bodyStyle.backgroundColor);
      
      // Test if CSS variables are available
      const testEl = document.querySelector('.hero');
      if (testEl) {
        const heroStyle = getComputedStyle(testEl);
        console.log('📋 Hero background found:', heroStyle.background !== 'none' ? '✅ YES' : '❌ NO');
      } else {
        console.log('❌ [+page.svelte] Hero element not found yet');
      }
    }, 50);
  }
</script>

<svelte:head>
  <title>Maximizing Health Solution</title>
  <meta name="description" content="Your trusted partner for better health and wellness" />
</svelte:head>

<nav class="navbar">
  <div class="container">
    <h1 class="logo">Maximizing Health</h1>
    <ul class="nav-links">
      <li><a href="/" class="active">Home</a></li>
      <li><a href="/services">Services</a></li>
      <li><a href="/about">About</a></li>
      <li><a href="/contact">Contact</a></li>
    </ul>
  </div>
</nav>

<section class="hero">
  <div class="hero-content">
    <h1>Your Health, Our Priority</h1>
    <p>Providing compassionate care and wellness solutions to help you live your best life.</p>
    <a href="/contact" class="btn-primary">Get In Touch</a>
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

<footer class="footer">
  <div class="container">
    <p>&copy; 2026 Maximizing Health Solution. All rights reserved.</p>
  </div>
</footer>



