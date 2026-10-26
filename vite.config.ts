import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [
    sveltekit({
      kit: {
        alias: {
          '$lib': 'src/lib'
        }
      }
    })
  ],
  resolve: {
    alias: {
      '$lib': '/src/lib'
    }
  }
});
