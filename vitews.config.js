import { defineConfig } from 'vite';
import copy from 'rollup-plugin-copy'
import { viteSingleFile } from "vite-plugin-singlefile"

export default defineConfig({
    build: {
        outDir: 'public/build',
        rollupOptions: {
            input: {
                'firebase-messaging-sw': 'resources/js/firebase-messaging-sw.ts',
            },
            output: {
                entryFileNames: '[name].js',
                inlineDynamicImports: false
            }
        }
    },
    plugins: [
        viteSingleFile(),
        copy({
            targets: [
                {
                    src: 'public/build/firebase-messaging-sw.js',
                    dest: 'public'
                }
            ],
            hook: 'writeBundle'
        }),
    ],
});
