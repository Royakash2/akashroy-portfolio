// Ambient declarations for `neko-ts` (v0.0.7).
// The package's package.json points "types" to ./dist/index.d.ts, which doesn't
// exist (the real files are under ./dist/src/), so TypeScript can't resolve
// them on its own. Declare the API surface we use here instead.

declare module "neko-ts" {
  export type BreedConfig = {
    src: string;
    spriteSets: Record<string, number[][]>;
    gap: number;
    cols: number;
    rows: number;
  };

  export enum NekoSizeVariations {
    SMALL = 32,
    MEDIUM = 38,
    LARGE = 42,
  }

  export type NekoOptions = {
    nekoId?: number;
    nekoSize?: NekoSizeVariations;
    speed?: number;
    animationSpeed?: number;
    defaultState?: "awake" | "sleep";
    origin?: { x: number; y: number };
    parent?: HTMLElement;
    breed?: BreedConfig;
  };

  export class Neko {
    constructor(options?: NekoOptions);
    sleep(): void;
    wake(): void;
    destroy(id?: number): void;
    setSize(size: NekoSizeVariations): void;
    setBreed(breed?: BreedConfig): void;
    setSpeed(speed: number): void;
    setAnimationSpeed(ms: number): void;
    readonly size: NekoSizeVariations;
    readonly isAwake: boolean;
    readonly position: { x: number; y: number };
  }
}

declare module "neko-ts/breeds" {
  import type { BreedConfig } from "neko-ts";
  export const ace: BreedConfig;
  export const air: BreedConfig;
  export const black: BreedConfig;
  export const blue: BreedConfig;
  export const calico: BreedConfig;
  export const colourful: BreedConfig;
  export const dave: BreedConfig;
  export const dog: BreedConfig;
  export const earth: BreedConfig;
  export const fancy: BreedConfig;
  export const fire: BreedConfig;
  export const ghetto: BreedConfig;
  export const ghost: BreedConfig;
  export const jess: BreedConfig;
  export const lucky: BreedConfig;
  export const lucy: BreedConfig;
  export const marmalade: BreedConfig;
  export const mermaid: BreedConfig;
  export const mike: BreedConfig;
  export const moka: BreedConfig;
  export const neko: BreedConfig;
  export const neon: BreedConfig;
  export const orange: BreedConfig;
  export const peach: BreedConfig;
  export const pink: BreedConfig;
  export const rainbow: BreedConfig;
  export const robot: BreedConfig;
  export const royal: BreedConfig;
  export const silversky: BreedConfig;
  export const socks: BreedConfig;
  export const spirit: BreedConfig;
  export const tabby: BreedConfig;
  export const usa: BreedConfig;
  export const valentine: BreedConfig;
  export const water: BreedConfig;
}
