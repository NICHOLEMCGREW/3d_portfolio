import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dotenv from 'dotenv';

dotenv.config(); // Load environment variables from .env file

export default defineConfig({
  plugins: [react()],
  resolve: {
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json'],
  },
  build: {
    assetsInlineLimit: 0, // Ensure that no assets are inlined
    assetsInclude: ['src/assets/**'], // Include all files in the src/assets directory
  },
});
