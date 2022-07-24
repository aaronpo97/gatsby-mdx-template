import { deep, swiss } from '@theme-ui/presets';
import nightOwl from '@theme-ui/prism/presets/night-owl.json';

const theme = {
  ...swiss,
  colors: {
    ...swiss.colors,
    modes: {
      dark: {
        ...deep.colors,
      },
    },
  },

  styles: {
    ...swiss.styles,
    p: {
      fontFamily: 'body',
      fontWeight: 'body',
      lineHeight: 'body',
      fontSize: 3,
    },
    code: { ...nightOwl },
  },
};

export default theme;
