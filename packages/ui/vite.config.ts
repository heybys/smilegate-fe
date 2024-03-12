// vite.config.ts
import * as path from 'path';

import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.tsx'),
      name: 'index',
      fileName: 'index',
    },
    rollupOptions: {
      onwarn: (warning, defaultHandler) => {
        if (
          ['MODULE_LEVEL_DIRECTIVE', 'SOURCEMAP_ERROR'].includes(warning.code)
        ) {
          return;
        }
        defaultHandler(warning);
      },
      external: ['react'],
      output: {
        globals: {
          react: 'React',
        },
      },
    },
    commonjsOptions: {
      esmExternals: ['react'],
    },
  },
  plugins: [dts()],
});
