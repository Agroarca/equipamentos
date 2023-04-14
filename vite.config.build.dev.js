import { defineConfig } from 'vite'
import laravel from 'laravel-vite-plugin'
import vue from '@vitejs/plugin-vue'
import copy from 'rollup-plugin-copy'

export default defineConfig({
    build: {
        sourcemap: true,
        manifest: true,
        minify: false,
    },
    plugins: [
        laravel({
            input: 'resources/js/app.js',
            refresh: true,
        }),
        vue({
            template: {
                transformAssetUrls: {
                    base: null,
                    includeAbsolute: false,
                },
            },
        }),
        copy({
            targets: [
                {
                    src: 'resources/js/firebase-messaging-sw.js',
                    dest: 'public',
                },
            ],
            hook: 'writeBundle',
        }),
    ],
})
