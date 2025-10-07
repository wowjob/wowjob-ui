// tsup.config.ts
import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm'],
  dts: true,
  splitting: false,
  sourcemap: true,
  clean: true,
  // ✅ Add this external array
  external: [
    'react',
    'react-dom',
    // '@wowjob/css',
    // '@wowjob/type',
    // '@tanstack/react-form',
    // 'rehype-react',
    // 'rehype-sanitize',
    // // 'remark-rehype',
    // 'remark-parse',
    // 'remark-gfm',
  ],
})
