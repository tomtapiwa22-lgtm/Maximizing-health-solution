<script lang="ts">
  // Layout script — add any shared state/logic here if needed later
</script>

<!-- Favicon & Head Metadata -->
<svelte:head>
  <link rel="icon" type="image/x-icon" href="/favicon.ico" />
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Maxi-Mize Health Solutions</title>
</svelte:head>

<!-- Page Structure -->
<div class="app-container">
  <main class="content">
    <!-- ✅ Modern SvelteKit content slot — replaces deprecated {@render children()} -->
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
    padding: 1rem;
    max-width: 900px;
    margin: 0 auto;
    width: 100%;
  }
</style>
