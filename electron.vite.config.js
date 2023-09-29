import { defineConfig, externalizeDepsPlugin } from "electron-vite";
import react from '@vitejs/plugin-react';

export default defineConfig({
    publicDir: false,
    main: {
        build: {
            rollupOptions: {
                external: ['sqlite3']
            }
        },
        plugins: [externalizeDepsPlugin()],
    },
    preload: {
        plugins: [externalizeDepsPlugin()],
    },
    renderer: {
        plugins: [react()]
    }
});