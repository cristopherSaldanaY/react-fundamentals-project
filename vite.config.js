import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv'


const env = dotenv.config();



export default defineConfig({
  plugins: [react()],
})
