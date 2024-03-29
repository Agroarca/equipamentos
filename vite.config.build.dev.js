import { defineConfig } from 'vite'
import laravel from 'laravel-vite-plugin'
import vue from '@vitejs/plugin-vue'
import copy from 'rollup-plugin-copy'

export default defineConfig({
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
    build: {
        minify: false,
        minifyIdentifiers: false,
        minifySyntax: false,
        minifyWhitespace: false,
        keepNames: true,
        sourcemap: 'inline',
        manifest: true,
    },
})
