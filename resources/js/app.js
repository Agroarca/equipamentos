/* eslint-disable no-undef */
/* eslint-disable vue/component-api-style */

import './bootstrap'
import '@fortawesome/fontawesome-free/css/all.css'
import '../css/app.css'

import { createApp, h } from 'vue'
import { createInertiaApp } from '@inertiajs/vue3'
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers'
import { ApmVuePlugin } from '@elastic/apm-rum-vue'

const appName = 'Agroarca'

createInertiaApp({
    title: (title) => (title?.length > 0 ? `${title} - ${appName}` : appName),
    resolve: (name) => resolvePageComponent(`./Pages/${name}.vue`, import.meta.glob('./Pages/**/*.vue')),
    progress: { color: '#0061b8' },
    setup({ el, App, props, plugin }) {
        window.app = createApp({ render: () => h(App, props) })
            .use(plugin)
            .use(ApmVuePlugin, {
                config: {
                    serviceName: 'equipamentos',
                    serverUrl: 'https://agroarca.com.br:2083',
                    active: import.meta.env.VITE_APM_HABILITADO,
                    logLevel: import.meta.env.VITE_APM_LOG_LEVEL,
                },
            })
            .mount(el)
        return window.app
    },
})
