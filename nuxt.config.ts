import path from 'node:path';


// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  app: {
    baseURL: '/residence/',
    head: {
      title: 'Резиденция',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Твоё главное комьюнити' },
        // { name: 'format-detection', content: 'telephone=no' }
      ],
    },
    pageTransition: false,
    layoutTransition: false,
  },
  imports: {
    dirs: [
      'composables',
      'utils',
      'stores',
      'types/**',
    ],
  },
  vite: {
    server: {
      allowedHosts: true,
    }
  },
  compatibilityDate: '2024-11-01',
  alias: {
    '~assets': path.resolve(import.meta.dirname, 'assets'),
    '~scss': path.resolve(import.meta.dirname, 'assets/scss'),
  },
  devtools: { enabled: true },
  modules: [
    '@primevue/nuxt-module',
    '@morev/v-bem-transformer',
    'nuxt-svgo',
    '@nuxtjs/device',
    '@pinia/nuxt',
    'nuxt-time',
    '@nuxt/eslint',
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler',
          additionalData: `
            @use "~scss/mixins" as *;
            @use "~scss/vars";
          `,
        },
      },
    },
  },
  components: [
    {
      path: '~/components',
      extensions: ['.vue'],
      pathPrefix: false,
    },
  ],
  primevue: {
    importTheme: {
      from: '~/bootstrap/primevue/theme.ts',
      as: 'residenceTheme',
    },
    components: {
      prefix: 'P',
    },
    options: {
      ripple: false,
    },
  },
  svgo: {
    defaultImport: 'component',
    global: false,
  },
});