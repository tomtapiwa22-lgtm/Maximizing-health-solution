<script lang="ts">
  const { data, children } = $props();
</script>

<div class="app-layout">
  {#if data?.user}
    <nav class="top-nav">
      <span class="welcome">Welcome, {data.profile?.full_name || data.user.email}</span>
      <form action="/logout" method="POST">
        <button type="submit" class="logout-btn">Sign Out</button>
      </form>
    </nav>
  {/if}

  <main class="content">
    <slot />
  </main>
</div>

<style>
  .app-layout {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    background: #f8fafc;
  }
  .top-nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    background: white;
    border-bottom: 1px solid #e2e8f0;
  }
  .welcome {
    font-weight: 600;
    color: #0f172a;
  }
  .logout-btn {
    padding: 0.5rem 1rem;
    background: #f43f5e;
    color: white;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-weight: 600;
  }
  .content {
    flex: 1;
  }
</style>
