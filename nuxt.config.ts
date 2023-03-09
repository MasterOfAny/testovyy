// https://nuxt.com/docs/api/configuration/nuxt-config
const isDev = process.env.NODE_ENV !== 'production'
export default defineNuxtConfig({
    build: {
        transpile: !isDev ? [
            'yup',
            'maska',
            'lodash',
            'lodash-es',
            '@vee-validate/rules'
        ] : []
    },
    runtimeConfig: {
        baseURL: 'https://google.com'
    },
})
