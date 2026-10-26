import { sveltekit } from '@sveltejs/kit/vite';
import adapter from '@sveltejs/adapter-auto';
import { defineConfig } from 'vite';
import { fileURLToPath, URL } from 'node:url';

export default defineConfig({
  plugins: [
    sveltekit({
      adapter: adapter(),
      alias: {
        '$lib': fileURLToPath(new URL('./src/lib', import.meta.url))
      }
    })
  ]
});
