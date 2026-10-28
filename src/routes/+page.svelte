<svelte:head>
  <title>Login — Maximise Health Solutions</title>
  <meta name="description" content="Sign in to your account" />
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" /> 
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    html { scroll-behavior: smooth; }
    body { margin: 0; }
    a { text-decoration: none; color: inherit; }
    button { font-family: inherit; }

    :root {
      --primary: #10B981;
      --secondary: #059669;
      --accent: #F59E0B;
      --light: #ECFDF5;
      --dark: #1F2937;
      --muted: #6B7280;
      --border: #E5E7EB;
      --white: #FFFFFF;
      --radius: 14px;
    }

    .login-page {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif !important;
      min-height: 100vh !important;
      background: linear-gradient(180deg, #ECFDF5 0%, #FFFFFF 100%) !important;
      display: flex !important;
      align-items: center !important;
      justify-content: center !important;
      padding: 2rem 1rem !important;
    }

    .login-card {
      background: var(--white) !important;
      padding: 2.5rem !important;
      border-radius: var(--radius) !important;
      box-shadow: 0 4px 20px rgba(16, 185, 129, 0.15) !important;
      width: 100% !important;
      max-width: 420px !important;
    }

    .login-card h1 {
      text-align: center !important;
      color: var(--secondary) !important;
      margin-bottom: 0.5rem !important;
      font-size: 1.75rem !important;
    }

    .subtext {
      text-align: center !important;
      color: var(--muted) !important;
      margin-bottom: 2rem !important;
    }

    .form-group {
      margin-bottom: 1.25rem !important;
    }

    .form-group label {
      display: block !important;
      margin-bottom: 0.5rem !important;
      font-weight: 500 !important;
      color: var(--dark) !important;
    }

    .form-group input,
    .form-group select {
      width: 100% !important;
      padding: 0.85rem 1rem !important;
      border: 2px solid var(--border) !important;
      border-radius: 8px !important;
      font-size: 1rem !important;
      transition: border-color 0.2s ease !important;
      background: var(--white) !important;
    }

    .form-group input:focus,
    .form-group select:focus {
      outline: none !important;
      border-color: var(--primary) !important;
    }

    .signin-btn {
      width: 100% !important;
      padding: 0.9rem !important;
      background: linear-gradient(135deg, var(--primary), var(--secondary)) !important;
      color: var(--white) !important;
      border: none !important;
      border-radius: 8px !important;
      font-size: 1rem !important;
      font-weight: 600 !important;
      cursor: pointer !important;
      transition: transform 0.2s ease, box-shadow 0.2s ease !important;
      margin-top: 0.5rem !important;
    }

    .signin-btn:hover {
      transform: translateY(-2px) !important;
      box-shadow: 0 8px 20px rgba(16, 185, 129, 0.25) !important;
    }

    .help-text {
      margin-top: 1.5rem !important;
      text-align: center !important;
      color: var(--muted) !important;
      font-size: 0.9rem !important;
    }

    .help-text a {
      color: var(--primary) !important;
      text-decoration: none !important;
      font-weight: 500 !important;
    }

    .help-text a:hover {
      text-decoration: underline !important;
    }

    .status {
      margin-top: 1rem;
      text-align: center;
      font-size: 0.9rem;
    }
    .error { color: #EF4444; }
    .success { color: #10B981; }

    @media (max-width: 480px) {
      .login-card {
        padding: 2rem 1.5rem !important;
      }
    }
  </style>
</svelte:head>

<div class="login-page">
  <main class="login-card">
    <h1>Welcome Back</h1>
    <p class="subtext">Sign in to access your dashboard</p>

    <form on:submit={handleLogin}>
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

      <button type="submit" class="signin-btn" disabled={loading}>
        {loading ? 'Signing in…' : 'Sign In'}
      </button>

      {#if status}
        <p class="status {status.type}">{status.message}</p>
      {/if}
    </form>

    <p class="help-text">Need help? <a href="/contact">Contact us</a></p>
  </main>
</div>

<script>
  let email = '';
  let password = '';
  let selectedRole = 'client';
  let loading = false;
  let status = null;

  function handleLogin(e) {
    // ✅ Explicitly prevent default form reload
    e.preventDefault();
    
    loading = true;
    status = null;

    // Debug log — check browser console (F12) to confirm this runs
    console.log('Login clicked → role:', selectedRole, '→ redirecting to:', `/dashboard/${selectedRole}`);

    // Short delay so you see the loading state
    setTimeout(() => {
      status = { type: 'success', message: 'Redirecting…' };
      
      // ✅ Use SvelteKit's proper navigation (replaces window.location)
      if (typeof window !== 'undefined') {
        window.location.href = `/dashboard/${selectedRole}`;
      }
      
      loading = false;
    }, 300);
  }
</script>
