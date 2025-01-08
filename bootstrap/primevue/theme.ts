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
      tab: {
        /*background: 'transparent',
        hoverBackground: 'transparent',
        activeBackground: 'transparent',
        borderWidth: '3px',
        borderColor: '#1B1B1B',
        hoverBorderColor: '{content.border.color}',
        activeBorderColor: '{primary.color}',
        color: '#1B1B1B',
        hoverColor: '{text.color}',
        activeColor: '{primary.color}',
        padding: '12px 16px',
        fontWeight: '600',
        margin: '0 0 -1px 0',
        gap: '0.5rem',
        focusRing: {
          width: '{focus.ring.width}',
          style: '{focus.ring.style}',
          color: '{focus.ring.color}',
          offset: '-1px',
          shadow: '{focus.ring.shadow}',
        },*/
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
