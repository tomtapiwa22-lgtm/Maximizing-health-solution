<script>
  // Standard SvelteKit — children is provided automatically
  // NO declaration needed here at all
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
