import Aura from '@primevue/themes/aura';
import { definePreset } from '@primevue/themes';


export default {
  preset: definePreset(Aura, {
    components: {
      avatar: {
        xl: {
          width: '240px',
          height: '240px',
        },
      },
    },
  }),
  options: {
    cssLayer: {
      name: 'primevue',
      order: 'primevue, residence',
    },
  },
};
