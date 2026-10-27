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

<style>
  :root {
    --primary: #2dd4bf;
    --dark: #1e293b;
    --light: #f8fafc;
  }

  * { margin: 0; padding: 0; box-sizing: border-box; font-family: system-ui, sans-serif; }

  .navbar { background: white; box-shadow: 0 2px 4px rgba(0,0,0,0.1); padding: 1rem 0; position: sticky; top: 0; }
  .container { max-width: 1200px; margin: 0 auto; padding: 0 1.5rem; }
  .navbar .container { display: flex; justify-content: space-between; align-items: center; }
  .logo { font-size: 1.4rem; color: var(--primary); }
  .nav-links { display: flex; list-style: none; gap: 2rem; }
  .nav-links a { text-decoration: none; color: var(--dark); font-weight: 500; transition: color 0.3s; }
  .nav-links a:hover, .nav-links a.active { color: var(--primary); }

  .hero { background: linear-gradient(135deg, #2dd4bf 0%, #0d9488 100%); color: white; padding: 5rem 1.5rem; text-align: center; }
  .hero-content { max-width: 800px; margin: 0 auto; }
  .hero h1 { font-size: 3rem; margin-bottom: 1.5rem; }
  .hero p { font-size: 1.2rem; margin-bottom: 2rem; opacity: 0.9; }
  .btn-primary { display: inline-block; background: white; color: #0d9488; padding: 0.8rem 2rem; border-radius: 50px; font-weight: 600; text-decoration: none; transition: transform 0.3s; }
  .btn-primary:hover { transform: translateY(-3px); }

  .features { padding: 5rem 1.5rem; background: #f0fdfa; }
  .features h2 { text-align: center; font-size: 2.2rem; color: var(--dark); margin-bottom: 3rem; }
  .grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem; }
  .card { background: white; padding: 2rem; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.05); transition: transform 0.3s; }
  .card:hover { transform: translateY(-5px); }
  .card h3 { color: var(--primary); margin-bottom: 1rem; font-size: 1.3rem; }
  .card p { color: #64748b; line-height: 1.6; }

  .footer { background: var(--dark); color: white; text-align: center; padding: 2rem; margin-top: 2rem; }
</style>
