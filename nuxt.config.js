import { defineNuxtConfig } from 'nuxt'

export default defineNuxtConfig({
    modules: ['@nuxtjs/tailwindcss'],
    tailwindcss: {
        cssPath: '~/tailwind.css'
    }
})
