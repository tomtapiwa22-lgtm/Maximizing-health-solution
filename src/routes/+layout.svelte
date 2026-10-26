<script>
  // ✅ CORRECT Svelte 5 / Runes syntax
  const children = $children();
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
