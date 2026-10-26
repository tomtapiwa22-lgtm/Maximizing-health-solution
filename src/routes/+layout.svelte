<script>
  // children is automatically provided in standard SvelteKit — no declaration needed
</script>

<div class="app-container">
  <main class="content">
    {@render children()}
  </main>
</div>

<style>
  .app-container {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }
  .content {
    flex: 1;
  }
</style>
