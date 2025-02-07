// LiquidBackground.js
import React, { useRef } from 'react';
import { Canvas, useFrame, extend } from '@react-three/fiber';
import { shaderMaterial } from '@react-three/drei';
import * as THREE from 'three';

// Option 1: Use the built-in name by switching to <planeGeometry>
// OR Option 2: Extend the namespace if you prefer <planeBufferGeometry>
// Uncomment the line below to extend if you want to keep the <planeBufferGeometry> tag
// extend({ PlaneBufferGeometry: THREE.PlaneBufferGeometry });

const LiquidMaterial = shaderMaterial(
  { uTime: 0 },
  // Vertex Shader
  `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      vec3 pos = position;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
    }
  `,
  // Fragment Shader
  `
    uniform float uTime;
    varying vec2 vUv;
    float noise(vec2 p){
      return fract(sin(dot(p, vec2(12.9898,78.233))) * 43758.5453);
    }
    void main() {
      float n = noise(vUv * 10.0 + uTime * 0.5);
      vec3 color = mix(vec3(0.0, 0.0, 0.1), vec3(0.0, 0.3, 0.6), n);
      gl_FragColor = vec4(color, 0.5);
    }
  `
);
extend({ LiquidMaterial });

function LiquidPlane() {
  const materialRef = useRef();
  useFrame(({ clock }) => {
    if (materialRef.current) {
      materialRef.current.uTime = clock.getElapsedTime();
    }
  });
  return (
    <mesh>
      {/* Option 1: Replace planeBufferGeometry with planeGeometry */}
      <planeGeometry args={[20, 20, 32, 32]} />
      {/* Option 2: If you extended the namespace, you can use <planeBufferGeometry /> */}
      {/* <planeBufferGeometry args={[20, 20, 32, 32]} /> */}
      <liquidMaterial ref={materialRef} />
    </mesh>
  );
}

export default function LiquidBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-[-1]">
      <Canvas>
        <LiquidPlane />
      </Canvas>
    </div>
  );
}
