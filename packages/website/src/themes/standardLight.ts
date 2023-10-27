import type { UIThemeOverrides } from '@via-profit/ui-kit/ThemeProvider';

const standardLight: UIThemeOverrides = {
  isDark: false,
  color: {
    accentPrimary: '#E77B00',
    accentSecondary: '#676767',
    accentSecondaryContrast: '#F4F6FA',
    textPrimary: '#2E1E1E',
    textSecondary: '#FFF',
  },
  myGradient: {
    buttonBlack: 'linear-gradient(180deg, rgba(85, 85, 85, 1), rgba(0, 0, 0, 1))',
    buttonOrange: 'linear-gradient(180deg, rgba(249, 174, 88, 1), rgba(231, 123, 0, 1))',
  },
};

export default standardLight;
