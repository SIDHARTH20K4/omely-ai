declare module "vanta/dist/vanta.net.min.js" {
  import * as THREE from "three";
  
  export interface VantaNetOptions {
    el: HTMLElement;
    THREE: typeof THREE;
    mouseControls?: boolean;
    touchControls?: boolean;
    gyroControls?: boolean;
    minHeight?: number;
    minWidth?: number;
    scale?: number;
    scaleMobile?: number;
    color?: number;
    backgroundColor?: number;
    points?: number;
    maxDistance?: number;
  }
  
  export interface VantaEffect {
    destroy: () => void;
  }
  
  const NET: (options: VantaNetOptions) => VantaEffect;
  export default NET;
}