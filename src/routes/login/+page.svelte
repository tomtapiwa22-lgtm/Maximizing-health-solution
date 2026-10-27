<svelte:head>
  <title>Login — Maximizing Health Solution</title>
  <meta name="description" content="Sign in to your account" />
</svelte:head>

<div class="login-page">
  <nav class="navbar">
    <div class="container">
      <a href="/" class="brand">
        <span class="logo-icon">♡</span>
        <span class="logo-text">Maxi-Mize Health Solutions</span>
      </a>
    </div>
  </nav>

  <main class="login-container">
    <div class="login-card">
      <h1>Welcome Back</h1>
      <p class="login-subtitle">Sign in to access your dashboard</p>

      <form class="login-form" on:submit|preventDefault={handleLogin}>
        <div class="form-group">
          <label for="email">Email Address</label>
          <input type="email" id="email" bind:value={email} placeholder="your@email.com" required />
        </div>

        <div class="form-group">
          <label for="password">Password</label>
          <input type="password" id="password" bind:value={password} placeholder="••••••••" required />
        </div>

        <div class="form-group">
          <label for="role">I am signing in as</label>
          <select id="role" bind:value={selectedRole}>
            <option value="client">Client — I receive care & support</option>
            <option value="carer">Carer — I provide support</option>
            <option value="admin">Administrator — I manage the system</option>
          </select>
        </div>

        <button type="submit" class="btn-primary">Sign In</button>
      </form>

      <p class="login-note">Need help? <a href="/contact">Contact us</a> — accounts are created securely for you.</p>
    </div>
  </main>
</div>

<script>
  let email = '';
  let password = '';
  let selectedRole = 'client';

  function handleLogin() {
    window.location.href = `/dashboard/${selectedRole}`;
  }
</script>

<style>
  :root {
    --primary-light: #0ea5e9;
    --primary: #0284c7;
    --primary-dark: #0369a1;
    --accent-soft: #e0f2fe;
    --dark: #0c4a6e;
    --mid: #475569;
    --light: #f8fafc;
    --card-bg: #ffffff;
    --shadow-lift: 0 20px 60px rgba(14, 165, 233, 0.15);
    --shadow-subtle: 0 4px 20px rgba(2, 132, 199, 0.12);
    --radius: 16px;
    --transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  * { margin: 0; padding: 0; box-sizing: border-box; font-family: system-ui, -apple-system, sans-serif; }

  .login-page {
    min-height: 100vh;
    background: linear-gradient(135deg, #e0f2fe 0%, #f0f9ff 50%, #f8fafc 100%);
  }

  .navbar {
    background: rgba(255, 255, 255, 0.85);
    backdrop-filter: blur(12px);
    border-bottom: 1px solid rgba(14, 165, 233, 0.1);
    padding: 1rem 0;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1.5rem;
  }

  .brand {
    display: flex;
    align-items: center;
    gap: 0.6rem;
    text-decoration: none;
    color: inherit;
  }

  .logo-icon {
    font-size: 1.5rem;
    color: var(--primary);
  }

  .logo-text {
    font-size: 1.35rem;
    font-weight: 700;
    color: var(--primary);
  }

  .login-container {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 4rem 1.5rem;
    min-height: calc(100vh - 80px);
  }

  .login-card {
    background: var(--card-bg);
    padding: 3rem 2.5rem;
    border-radius: var(--radius);
    box-shadow: var(--shadow-lift);
    width: 100%;
    max-width: 440px;
    animation: fadeInUp 0.6s ease-out;
  }

  .login-card h1 {
    font-size: 1.8rem;
    color: var(--dark);
    margin-bottom: 0.5rem;
    text-align: center;
    font-weight: 700;
  }

  .login-subtitle {
    text-align: center;
    color: var(--mid);
    margin-bottom: 2rem;
    line-height: 1.5;
  }

  .login-form {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  .form-group {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .form-group label {
    font-weight: 600;
    color: var(--dark);
    font-size: 0.95rem;
  }

  .form-group input,
  .form-group select {
    padding: 0.9rem 1rem;
    border: 2px solid #e2e8f0;
    border-radius: 10px;
    font-size: 1rem;
    transition: var(--transition);
    background: white;
  }

  .form-group input:focus,
  .form-group select:focus {
    outline: none;
    border-color: var(--primary);
    box-shadow: 0 0 0 3px rgba(2, 132, 199, 0.1);
  }

  .btn-primary {
    padding: 0.95rem;
    border-radius: 999px;
    font-weight: 700;
    font-size: 1rem;
    background: linear-gradient(135deg, var(--primary-light), var(--primary));
    color: white;
    border: none;
    cursor: pointer;
    transition: var(--transition);
    margin-top: 0.5rem;
  }

  .btn-primary:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 25px rgba(2, 132, 199, 0.3);
  }

  .login-note {
    margin-top: 1.5rem;
    font-size: 0.9rem;
    color: var(--mid);
    text-align: center;
    line-height: 1.5;
  }

  .login-note a {
    color: var(--primary);
    font-weight: 600;
    text-decoration: none;
    transition: var(--transition);
  }

  .login-note a:hover {
    color: var(--primary-dark);
    text-decoration: underline;
  }

  @keyframes fadeInUp {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }

  @media (max-width: 480px) {
    .login-card { padding: 2rem 1.5rem; }
    .login-card h1 { font-size: 1.5rem; }
  }
</style>
