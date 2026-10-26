<script>
  // ✅ In SvelteKit, $children is built-in — no destructuring needed
</script>

<div class="app-container">
  <main class="content">
    <!-- ✅ Correct SvelteKit slot syntax -->
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
