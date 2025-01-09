import path from 'node:path';
import url from 'node:url';


const dirname = path.dirname(url.fileURLToPath(import.meta.url));


// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      script: [
        {
          src: 'https://telegram.org/js/telegram-web-app.js',
        },
      ],
    },
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
    'nuxt-time'
  ],
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
  app: {
    pageTransition: false,
    layoutTransition: false,
  },
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],
  appConfig: {
    
  },
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
    }
  },
  svgo: {
    defaultImport: 'component',
    global: false,
  },
  vBemTransformer: {

  }
})
