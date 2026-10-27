<svelte:head>
  <title>Login — Maxi-Mize Health Solutions</title>
  <meta name="description" content="Sign in to your account" />
</svelte:head>

<div class="login-page">
  <main class="login-container">
    <div class="login-card">
      <h1>Welcome Back</h1>
      <p class="subtext">Sign in to access your dashboard</p>

      <form on:submit|preventDefault={handleLogin}>
        <div class="form-group">
          <label>Email Address</label>
          <input type="email" bind:value={email} placeholder="your@email.com" required />
        </div>

        <div class="form-group">
          <label>Password</label>
          <input type="password" bind:value={password} placeholder="••••••••" required />
        </div>

        <div class="form-group">
          <label>I am signing in as</label>
          <select bind:value={selectedRole}>
            <option value="client">Client</option>
            <option value="carer">Carer</option>
            <option value="admin">Administrator</option>
          </select>
        </div>

        <button type="submit" class="signin-btn">Sign In</button>
      </form>

      <p class="help-text">Need help? <a href="/contact">Contact us</a></p>
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
    --blue-50: #f0f9ff;
    --blue-500: #0ea5e9;
    --blue-600: #0284c7;
    --blue-700: #0369a1;
    --dark: #0c4a6e;
    --grey: #64748b;
    --white: #ffffff;
    --radius: 12px;
  }

  .login-page {
    min-height: calc(100vh - 140px);
    background: var(--blue-50);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2rem 1rem;
  }

  .login-card {
    background: var(--white);
    padding: 2.5rem;
    border-radius: var(--radius);
    box-shadow: 0 4px 20px rgba(14, 165, 233, 0.12);
    width: 100%;
    max-width: 420px;
  }

  .login-card h1 {
    text-align: center;
    color: var(--dark);
    margin-bottom: 0.5rem;
    font-size: 1.75rem;
  }

  .subtext {
    text-align: center;
    color: var(--grey);
    margin-bottom: 2rem;
  }

  .form-group {
    margin-bottom: 1.25rem;
  }

  .form-group label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: 500;
    color: var(--dark);
  }

  .form-group input,
  .form-group select {
    width: 100%;
    padding: 0.85rem 1rem;
    border: 2px solid #e2e8f0;
    border-radius: 8px;
    font-size: 1rem;
    transition: border-color 0.2s;
  }

  .form-group input:focus,
  .form-group select:focus {
    outline: none;
    border-color: var(--blue-500);
  }

  .signin-btn {
    width: 100%;
    padding: 0.9rem;
    background: var(--blue-600);
    color: var(--white);
    border: none;
    border-radius: 8px;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: background 0.2s, transform 0.2s;
  }

  .signin-btn:hover {
    background: var(--blue-700);
    transform: translateY(-2px);
  }

  .help-text {
    margin-top: 1.5rem;
    text-align: center;
    color: var(--grey);
    font-size: 0.9rem;
  }

  .help-text a {
    color: var(--blue-600);
    text-decoration: none;
    font-weight: 500;
  }
</style>
