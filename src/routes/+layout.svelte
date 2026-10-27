<script>
  // Standard SvelteKit — slot renders page content automatically
  // NO children / render needed here
</script>

<div class="app-container">
  <main class="content">
    <slot />
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
