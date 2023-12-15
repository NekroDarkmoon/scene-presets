declare interface Scene {
  active: boolean;
  background: any;
  backgroundColor: any;
  dimensions: {
    columns: number;
    distance: number;
    distancePixels: number;
    height: number;
    maxR: number;
    ratio: number;
    rect: {
      x: number;
      y: number;
      width: number;
      height: number;
    }
    rows: number;
    sceneHeight: number;
    seneRect: {
      x: number;
      y: number;
      width: number;
      height: number;
    },
    sceneX: number;
    sceneY: number;
    size: number;
    width: number;
  };

  environment: {
    base: {
      hue: number;
      intensity: number;
      luminosity: number;
      saturation: number;
      shadows: number;
    },
    cycle: boolean;
    dark: {
      hue: number;
      intensity: number;
      luminosity: number;
      saturation: number;
      shadows: number;
    },
    darknessLevel: number;
    darknessLock: boolean;
    globalLight: {
      alpha: number;
      bright: boolean;
      color: number;
      coloration: number;
      contrast: number;
      darkness: {
        min: number;
        max: number;
      },
      enabled: boolean;
      luminosity: number;
      saturation: number;
      shadows: number;
    }
  };

  flags: any;
  foreground: any;
  foregroundElevation: number;

  grid: {
    alpha: number;
    color: any;
    diagonals: number;
    distance: number;
    size: number;
    sizeX: number;
    sizeY: number;
    style: string;
    thickness: number;
    type: number;
    units: string;
    h: number;
    w: number;
  };

  height: number;
  initial: { x: number, y: number, scale: number };
  journalEntryPage: any;
  name: string;
  navName: string;
  navOrder: number;
  navigation: boolean;
  ownership: {
    [key: string]: number;
  };
  padding: number;
  playlistSound: any;
  sort: number;
  thumb: any;
  tokenVision: boolean;
  weather: any;
  width: number;
}
