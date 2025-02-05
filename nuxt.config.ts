import path from 'node:path';
import url from 'node:url';


const dirname = path.dirname(url.fileURLToPath(import.meta.url));


// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  // nitro: {
  //   hooks: {
  //     'prerender:generate'(route) {
  //       route.skip = route.route.indexOf('constants') !== -1;
  //     },
  //   },
  // },
  app: {
    baseURL: '/residence/',
    head: {
      title: 'Резиденция',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'Твоё главное комьюнити' },
        // { name: 'format-detection', content: 'telephone=no' }
      ],
      script: [
        {
          src: 'https://telegram.org/js/telegram-web-app.js',
        },
      ],
    },
    pageTransition: false,
    layoutTransition: false,
  },
  compatibilityDate: '2024-11-01',
  alias: {
    '~assets': path.resolve(dirname, 'assets'),
    '~scss': path.resolve(dirname, 'assets/scss'),
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
  eslint: {
    config: {
      standalone: false,
    },
  },
  css: [
    '~scss/primevue/index.scss',
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
      pathPrefix: false,
    },
  ],
  primevue: {
    importTheme: {
      from: '~/bootstrap/primevue/theme.ts',
      as: 'residenceTheme',
    },
    importPT: {
      from: '~/bootstrap/primevue/passThrough.ts',
      as: 'passThrough',
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