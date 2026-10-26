import { fileURLToPath, URL } from 'node:url';

export default {
  kit: {
    alias: {
      '$lib': fileURLToPath(new URL('./src/lib', import.meta.url))
    }
  }
};
