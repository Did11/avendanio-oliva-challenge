import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Puedes intentar habilitar de nuevo los source maps
  build: {
    sourcemap: true, // Vuelve a true para la depuración
  },
});
