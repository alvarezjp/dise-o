import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.resolve(__dirname, '.env') });

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    'process.env.SERVICE': JSON.stringify(process.env.SERVICE),
    'process.env.TEMPLATE': JSON.stringify(process.env.TEMPLATE),
    'process.env.USER': JSON.stringify(process.env.USER)
  }
})
