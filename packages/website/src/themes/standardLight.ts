import type { UIThemeOverrides } from '@via-profit/ui-kit/ThemeProvider';

const standardLight: UIThemeOverrides = {
  isDark: false,
  color: {
    accentPrimary: '#2D3A67',
    accentSecondary: '#D86A43',
    accentSecondaryContrast: '#52AC62',
    textPrimary: '#000000',
    textSecondary: '#FFF',
  },
  myGradient: {
    buttonBlack: 'linear-gradient(180deg, rgba(85, 85, 85, 1), rgba(0, 0, 0, 1))',
    buttonOrange: 'linear-gradient(180deg, rgba(249, 174, 88, 1), rgba(231, 123, 0, 1))',
  },
};

export default standardLight;
