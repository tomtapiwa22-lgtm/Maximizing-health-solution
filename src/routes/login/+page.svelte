<svelte:head>
  <title>Login — Maximizing Health Solution</title>
  <meta name="description" content="Sign in to your account" />
</svelte:head>

<div class="login-page">
  <nav class="navbar">
    <div class="container">
      <a href="/" class="brand">
        <span class="logo-icon">♡</span>
        <span class="logo-text">Maximizing Health</span>
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

      <p class="login-note">Need help? <a href="/contact">Contact us</a> — we don't use public registration. Accounts are created securely for you.</p>
    </div>
  </main>
</div>

<script>
  let email = '';
  let password = '';
  let selectedRole = 'client';

  function handleLogin() {
    // Later: add real auth here; for now navigate to correct dashboard
    window.location.href = `/dashboard/${selectedRole}`;
  }
</script>

<style>
  :root {
    --primary: #14b8a6;
    --primary-soft: #ccfbf1;
    --accent: #f43f5e;
    --dark: #0f172a;
    --mid: #475569;
    --light: #f8fafc;
    --shadow-lift: 0 20px 60px rgba(20, 184, 166, 0.12);
    --radius: 16px;
  }

  * { margin: 0; padding: 0; box-sizing: border-box; font-family: system-ui, sans-serif; }

  .login-page { min-height: 100vh; background: linear-gradient(135deg, #ccfbf1, #f0fdfa); }
  .navbar { background: rgba(255,255,255,0.85); backdrop-filter: blur(12px); border-bottom: 1px solid rgba(20, 184, 166, 0.08); padding: 1rem 0; }
  .container { max-width: 1200px; margin: 0 auto; padding: 0 1.5rem; }
  .brand { display: flex; align-items: center; gap: 0.6rem; text-decoration: none; color: inherit; }
  .logo-icon { font-size: 1.5rem; color: var(--accent); }
  .logo-text { font-size: 1.35rem; font-weight: 700; color: var(--primary); }

  .login-container { display: flex; align-items: center; justify-content: center; padding: 4rem 1.5rem; min-height: calc(100vh - 80px); }
  .login-card {
    background: white; padding: 3rem 2.5rem; border-radius: var(--radius);
    box-shadow: var(--shadow-lift); width: 100%; max-width: 440px;
  }
  .login-card h1 { font-size: 1.8rem; color: var(--dark); margin-bottom: 0.5rem; text-align: center; }
  .login-subtitle { text-align: center; color: var(--mid); margin-bottom: 2rem; }

  .login-form { display: flex; flex-direction: column; gap: 1.5rem; }
  .form-group { display: flex; flex-direction: column; gap: 0.5rem; }
  .form-group label { font-weight: 600; color: var(--dark); font-size: 0.95rem; }
  .form-group input, .form-group select {
    padding: 0.9rem 1rem; border: 2px solid #e2e8f0; border-radius: 10px;
    font-size: 1rem; transition: border-color 0.3s;
  }
  .form-group input:focus, .form-group select:focus { outline: none; border-color: var(--primary); }

  .btn-primary {
    padding: 0.95rem; border-radius: 50px; font-weight: 700; font-size: 1rem;
    background: var(--primary); color: white; border: none; cursor: pointer;
    transition: all 0.3s ease; margin-top: 0.5rem;
  }
  .btn-primary:hover { transform: translateY(-2px); box-shadow: 0 10px 25px rgba(20, 184, 166, 0.25); }

  .login-note { margin-top: 1.5rem; font-size: 0.9rem; color: var(--mid); text-align: center; line-height: 1.5; }
  .login-note a { color: var(--primary); font-weight: 600; text-decoration: none; }
</style>
