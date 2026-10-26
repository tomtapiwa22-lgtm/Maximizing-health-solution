import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import vercelAdapter from '@sveltejs/adapter-vercel';

export default defineConfig({
  plugins: [
    sveltekit({
      adapter: vercelAdapter()
    })
  ]
});
