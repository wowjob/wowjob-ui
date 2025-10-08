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
    // 👇 ADD THE NODE.JS BUILT-IN MODULES HERE
    'url', // Specifically for fileURLToPath
    'path', // For path-related warnings
    'fs', // For filesystem-related warnings
    'process', // For process-related warnings
    'events', // For EventEmitter-related warnings
    'util',
  ],
})
