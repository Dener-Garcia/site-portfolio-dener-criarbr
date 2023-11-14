import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  base: '/site-portfolio-dener.criarbr',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),

        nested: resolve(__dirname, '/src/pages/pop-cinema.html'),

        main: resolve(__dirname, 'index.html'),
        pop_cinema: resolve(__dirname, '/src/pages/pop-cinema.html'),
        lit_academy: resolve(__dirname, '/src/pages/lit-academy.html'),
        company_geradores: resolve(__dirname, '/src/pages/company-geradores.html'),
        blog: resolve(__dirname, '/src/pages/blog.html'),
      },
    },
  },
})