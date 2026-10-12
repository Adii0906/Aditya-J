'use client';

import { ShaderGradientCanvas, ShaderGradient } from '@shadergradient/react';

export type ShaderPalette = {
  color1: string;
  color2: string;
  color3: string;
  brightness: number;
  reflection: number;
};

/** Original dark config from the brief. */
export const DARK_PALETTE: ShaderPalette = {
  color1: '#73bfc4',
  color2: '#ff810a',
  color3: '#8da0ce',
  brightness: 0.8,
  reflection: 0.4,
};

/** Light mode: same shape, restrained red tones, a little brighter so it washes out under the overlay. */
export const LIGHT_PALETTE: ShaderPalette = {
  color1: '#f3c6bf',
  color2: '#d9483b',
  color3: '#f7e1dc',
  brightness: 1.1,
  reflection: 0.2,
};

type Props = {
  pixelDensity: number;
  animate: boolean;
  speed: number;
  palette: ShaderPalette;
};

/**
 * The only WebGL layer on the site. Everything except speed and palette matches the brief's config.
 */
export default function ShaderLayer({ pixelDensity, animate, speed, palette }: Props) {
  return (
    <ShaderGradientCanvas
      style={{ width: '100%', height: '100%' }}
      lazyLoad={undefined}
      fov={undefined}
      pixelDensity={pixelDensity}
      pointerEvents="none"
      powerPreference="low-power"
    >
      <ShaderGradient
        animate={animate ? 'on' : 'off'}
        type="sphere"
        wireframe={false}
        shader="defaults"
        uTime={0}
        uSpeed={speed}
        uStrength={0.3}
        uDensity={0.8}
        uFrequency={5.5}
        uAmplitude={3.2}
        positionX={-0.1}
        positionY={0}
        positionZ={0}
        rotationX={0}
        rotationY={130}
        rotationZ={70}
        color1={palette.color1}
        color2={palette.color2}
        color3={palette.color3}
        reflection={palette.reflection}
        cAzimuthAngle={270}
        cPolarAngle={180}
        cDistance={0.5}
        cameraZoom={15.1}
        lightType="env"
        brightness={palette.brightness}
        envPreset="city"
        grain="on"
        toggleAxis={false}
        zoomOut={false}
        hoverState=""
        enableTransition={false}
      />
    </ShaderGradientCanvas>
  );
}
