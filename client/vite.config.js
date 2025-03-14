// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })


import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    host: '0.0.0.0', // Ensures Vite binds to the correct IP
    port: process.env.PORT || 3000 // Ensures dynamic port assignment
  }
});
