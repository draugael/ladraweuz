import { defineNuxtConfig } from 'nuxt'

export default defineNuxtConfig({
    buildModules: [
        '@nuxtjs/tailwindcss',
    ],
    modules: [
        '@nuxtjs/tailwindcss',
        '@nuxtjs/robots',
    ],
    tailwindcss: {
        cssPath: '~/tailwind.css'
    }
})
