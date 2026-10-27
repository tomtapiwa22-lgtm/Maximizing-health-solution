<div class="page">
  <h1>Log In</h1>

  <form>
    <div>
      <label>Email</label>
      <input type="email" placeholder="your@email.com" />
    </div>

    <div>
      <label>Password</label>
      <input type="password" />
    </div>

    <button type="submit">Sign In</button>
  </form>
</div>

<style>
  .page {
    padding: 2rem 1.5rem;
    max-width: 400px;
    margin: 0 auto;
  }

  h1 {
    font-size: 1.8rem;
    margin-bottom: 2rem;
    text-align: center;
  }

  form > div {
    margin-bottom: 1rem;
  }

  label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: 500;
  }

  input {
    width: 100%;
    padding: 0.75rem;
    border: 1px solid #d1d5db;
    border-radius: 6px;
  }

  button {
    width: 100%;
    padding: 0.75rem;
    background: #0ea5e9;
    color: white;
    border: none;
    border-radius: 6px;
    font-size: 1rem;
    cursor: pointer;
    margin-top: 0.5rem;
  }

  button:hover {
    background: #0284c7;
  }
</style>
