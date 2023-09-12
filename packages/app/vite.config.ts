import { defineConfig } from 'vite';

export default defineConfig({
    optimizeDeps: {
        include: ['@test/editor'],
        // exclude: ['graphemer']
    }
})