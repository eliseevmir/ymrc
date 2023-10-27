import '@via-profit/ui-kit';

declare module '@via-profit/ui-kit/ThemeProvider' {
  interface MyGradients {
    buttonBlack: string;
    buttonOrange: string;
  }

  export interface UIThemeOverrides {
    myGradient: MyGradients;
  }
}