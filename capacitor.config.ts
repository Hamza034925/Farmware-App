import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'Farmware',
  webDir: 'www',
  bundledWebRuntime: false,
  server: {
    androidScheme: 'https',
    cleartext: true,
    allowNavigation: [
      'localhost:8100/*',
      '*.192.168.18.116:8888/*',
      '192.168.18.116:8888',
    ]
  },
  android: {
    "allowMixedContent": true
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 3000,
      launchAutoHide: true,
      // launchFadeOutDuration: 3000,
      // backgroundColor: "#ffffffff",
      androidSplashResourceName: "splash",
      // androidScaleType: "FIT_CENTER",
      // showSpinner: true,
      // androidSpinnerStyle: "large",
      // iosSpinnerStyle: "small",
      // spinnerColor: "#999999",
      splashFullScreen: true,
      splashImmersive: true,
      // layoutName: "launch_screen",
      // useDialog: true,
    },
  },
}

export default config;
