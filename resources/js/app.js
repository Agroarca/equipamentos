/* eslint-disable no-undef */
/* eslint-disable vue/component-api-style */

import './bootstrap'
import '@fortawesome/fontawesome-free/css/all.css'
import '../css/app.css'

import { createApp, h } from 'vue'
import { createInertiaApp } from '@inertiajs/vue3'
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers'
import { ApmVuePlugin } from '@elastic/apm-rum-vue'
import { init as initApm } from '@elastic/apm-rum'

const appName = 'Agroarca'

const apmConfig = {
    serviceName: import.meta.env.VITE_APM_SERVICE_NAME,
    serverUrl: import.meta.env.VITE_APM_SERVER_URL,
    active: import.meta.env.VITE_APM_HABILITADO,
    logLevel: import.meta.env.VITE_APM_LOG_LEVEL,
}

const apm = initApm(apmConfig)
window.apm = apm

createInertiaApp({
    title: (title) => (title?.length > 0 ? `${title} - ${appName}` : appName),
    resolve: (name) => resolvePageComponent(`./Pages/${name}.vue`, import.meta.glob('./Pages/**/*.vue')),
    progress: { color: '#0061b8' },
    setup({ el, App, props, plugin }) {
        window.app = createApp({ render: () => h(App, props) })
            .use(plugin)
            .use(ApmVuePlugin, {
                config: apmConfig,
                apm,
            })
            .mount(el)
        return window.app
    },
})
