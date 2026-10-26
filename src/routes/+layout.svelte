<script>
  const { children = undefined } = $props();
</script>

<div class="app-container">
  <!-- your existing layout code -->
  <main class="content">
    {@render children()}
  </main>
</div>
