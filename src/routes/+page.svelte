<script lang="ts">
  import { goto } from '$app/navigation';

  // Reactive state (Svelte 5 runes)
  let email = $state('');
  let password = $state('');
  let loading = $state(false);
  let error = $state('');

  async function handleLogin() {
    error = '';
    loading = true;

    // Basic client-side validation
    if (!email.trim() || !password) {
      error = 'Please enter both email and password';
      loading = false;
      return;
    }

    try {
      // Replace with your actual Supabase/auth call
      // const { error: authError } = await supabase.auth.signInWithPassword({ email, password });
      // if (authError) throw authError;

      // Simulate network delay — remove when connecting real auth
      await new Promise(resolve => setTimeout(resolve, 600));

      // Success: redirect to appropriate dashboard
      await goto('/dashboard/carer');
    } catch (err) {
      error = err instanceof Error ? err.message : 'Login failed. Please try again.';
    } finally {
      loading = false;
    }
  }
</script>

<div class="login-page">
  <div class="login-card">
    <h1>Sign In</h1>
    <p class="subtitle">Access your care management dashboard</p>

    {#if error}
      <div class="error-banner" role="alert" aria-live="polite">
        {error}
      </div>
    {/if}

    <form onsubmit|preventdefault={handleLogin} class="login-form">
      <div class="form-group">
        <label for="email">Email address</label>
        <input
          id="email"
          type="email"
          bind:value={email}
          autocomplete="username"
          disabled={loading}
          required
        />
      </div>

      <div class="form-group">
        <label for="password">Password</label>
        <input
          id="password"
          type="password"
          bind:value={password}
          autocomplete="current-password"
          disabled={loading}
          required
        />
      </div>

      <button
        type="submit"
        class="submit-btn"
        disabled={loading}
        aria-busy={loading}
      >
        {loading ? 'Signing in…' : 'Sign In'}
      </button>
    </form>

    <p class="forgot-link">
      <a href="/auth/forgot-password">Forgot your password?</a>
    </p>

    <p class="no-signup">
      Need access? Please contact your administrator to request an account.
    </p>
  </div>
</div>

<style>
  .login-page {
    min-height: 100vh;
    display: grid;
    place-items: center;
    padding: 1.5rem;
    background: linear-gradient(135deg, #f0f4f8 0%, #d9e2ec 100%);
  }

  .login-card {
    width: 100%;
    max-width: 420px;
    background: white;
    padding: 2.5rem;
    border-radius: 1rem;
    box-shadow: 0 4px 24px rgba(0, 0, 0, 0.08);
  }

  h1 {
    margin: 0 0 0.25rem;
    font-size: 1.75rem;
    font-weight: 700;
    color: #102a43;
  }

  .subtitle {
    margin: 0 0 2rem;
    color: #486581;
  }

  .error-banner {
    padding: 0.75rem 1rem;
    margin-bottom: 1.5rem;
    background: #fff2f2;
    border-left: 4px solid #e53e3e;
    color: #b91c1c;
    border-radius: 0.25rem;
  }

  .login-form {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
  }

  .form-group {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  label {
    font-weight: 500;
    color: #243b53;
  }

  input {
    padding: 0.875rem 1rem;
    border: 1px solid #cbd5e0;
    border-radius: 0.5rem;
    font-size: 1rem;
    transition: border-color 0.2s;
  }

  input:focus {
    outline: none;
    border-color: #3182ce;
    box-shadow: 0 0 0 3px rgba(49, 130, 206, 0.15);
  }

  input:disabled {
    background: #f7fafc;
    cursor: not-allowed;
  }

  .submit-btn {
    padding: 0.875rem;
    margin-top: 0.5rem;
    background: #2b6cb0;
    color: white;
    border: none;
    border-radius: 0.5rem;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: background-color 0.2s;
  }

  .submit-btn:hover:not(:disabled) {
    background: #2c5282;
  }

  .submit-btn:disabled {
    background: #90cdf4;
    cursor: not-allowed;
  }

  .forgot-link {
    margin: 1.25rem 0 0;
    text-align: center;
  }

  .forgot-link a {
    color: #2b6cb0;
    text-decoration: none;
  }

  .forgot-link a:hover {
    text-decoration: underline;
  }

  .no-signup {
    margin: 1.5rem 0 0;
    padding-top: 1.5rem;
    border-top: 1px solid #e2e8f0;
    text-align: center;
    font-size: 0.9rem;
    color: #718096;
  }
</style>
