import { defineNuxtConfig } from 'nuxt'

export default defineNuxtConfig({
    buildModules: [
        '@nuxtjs/tailwindcss',
    ],
    modules: [
        '@nuxtjs/tailwindcss'
    ],
    tailwindcss: {
        cssPath: '~/tailwind.css'
    }
})
