"use client"
import { useRef, useMemo, useEffect, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Points, PointMaterial, OrbitControls, Trail } from '@react-three/drei';
import * as THREE from 'three';

function AuroraParticles() {
  const ref = useRef<THREE.Points>(null);
  
  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(3000 * 3);
    
    for (let i = 0; i < 3000; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 80;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 60;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 40;
    }
    
    return positions;
  }, []);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = state.clock.elapsedTime * 0.02;
      ref.current.rotation.y = state.clock.elapsedTime * 0.01;
      
      // Scroll-based movement
      const scrollY = window.pageYOffset || 0;
      ref.current.position.y = -scrollY * 0.005;
    }
  });

  return (
    <Points ref={ref} positions={particlesPosition} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#4ade80"
        size={0.15}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
}

function AuroraRibbon({ position, color, scrollOffset }: { position: [number, number, number], color: string, scrollOffset: number }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.pageYOffset || 0);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useFrame((state) => {
    if (meshRef.current) {
      const time = state.clock.elapsedTime;
      
      // Flowing animation
      meshRef.current.rotation.z = Math.sin(time * 0.5 + scrollOffset) * 0.3;
      meshRef.current.position.x = position[0] + Math.sin(time * 0.3 + scrollOffset) * 5;
      meshRef.current.position.y = position[1] + Math.cos(time * 0.2 + scrollOffset) * 3;
      
      // Scroll-dependent movement
      meshRef.current.position.y += -scrollY * 0.008;
      meshRef.current.rotation.x = scrollY * 0.001 + scrollOffset;
      
      // Update shader uniforms
      const material = meshRef.current.material as any;
      if (material && material.uniforms) {
        material.uniforms.time.value = time;
        material.uniforms.scroll.value = scrollY * 0.01;
      }
    }
  });

  const vertexShader = `
    uniform float time;
    uniform float scroll;
    varying vec2 vUv;
    varying vec3 vPosition;
    
    void main() {
      vUv = uv;
      vPosition = position;
      
      vec3 pos = position;
      
      // Ribbon wave effect
      float wave1 = sin(pos.x * 0.1 + time + scroll) * 2.0;
      float wave2 = sin(pos.y * 0.08 + time * 0.7 + scroll) * 1.5;
      float wave3 = sin(pos.z * 0.12 + time * 0.5 + scroll) * 1.0;
      
      pos.z += wave1 + wave2;
      pos.y += wave3;
      pos.x += sin(pos.y * 0.05 + time + scroll) * 0.5;
      
      gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
    }
  `;

  const fragmentShader = `
    uniform float time;
    uniform float scroll;
    uniform vec3 color1;
    uniform vec3 color2;
    uniform vec3 color3;
    varying vec2 vUv;
    varying vec3 vPosition;
    
    void main() {
      // Aurora color mixing
      float wave1 = sin(vUv.x * 8.0 + time + scroll) * 0.5 + 0.5;
      float wave2 = sin(vUv.y * 6.0 + time * 0.8 + scroll) * 0.5 + 0.5;
      float wave3 = sin(vPosition.z * 0.1 + time * 1.2 + scroll) * 0.5 + 0.5;
      
      vec3 finalColor = mix(color1, color2, wave1);
      finalColor = mix(finalColor, color3, wave2);
      
      // Brightness based on waves and scroll
      float brightness = (wave1 + wave2 + wave3) * 0.5;
      brightness += sin(scroll * 2.0) * 0.2;
      
      // Edge glow effect
      float edgeGlow = 1.0 - abs(vUv.x - 0.5) * 2.0;
      edgeGlow *= 1.0 - abs(vUv.y - 0.5) * 2.0;
      
      float alpha = brightness * edgeGlow * 0.8;
      
      gl_FragColor = vec4(finalColor, alpha);
    }
  `;

  return (
    <mesh ref={meshRef} position={position}>
      <planeGeometry args={[30, 8, 32, 16]} />
      <shaderMaterial
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={{
          time: { value: 0 },
          scroll: { value: 0 },
          color1: { value: new THREE.Color(color) },
          color2: { value: new THREE.Color('#60a5fa') },
          color3: { value: new THREE.Color('#a855f7') }
        }}
        transparent
        side={THREE.DoubleSide}
        blending={THREE.AdditiveBlending}
      />
    </mesh>
  );
}

function EnhancedAuroraWaves() {
  const meshRef = useRef<THREE.Mesh>(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.pageYOffset || 0);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.z = state.clock.elapsedTime * 0.05;
      meshRef.current.position.y = -scrollY * 0.01;
      
      const material = meshRef.current.material as any;
      if (material && material.uniforms) {
        material.uniforms.time.value = state.clock.elapsedTime;
        material.uniforms.scroll.value = scrollY * 0.005;
      }
    }
  });

  const vertexShader = `
    uniform float time;
    uniform float scroll;
    varying vec2 vUv;
    
    void main() {
      vUv = uv;
      vec3 pos = position;
      
      // Multiple wave layers
      pos.z += sin(pos.x * 0.08 + time + scroll) * 8.0;
      pos.z += sin(pos.y * 0.06 + time * 0.7 + scroll) * 6.0;
      pos.z += sin(pos.x * 0.15 + pos.y * 0.1 + time * 1.2 + scroll) * 4.0;
      
      gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
    }
  `;

  const fragmentShader = `
    uniform float time;
    uniform float scroll;
    varying vec2 vUv;
    
    void main() {
      // Enhanced aurora colors
      vec3 color1 = vec3(0.3, 1.0, 0.5);    // Bright aurora green
      vec3 color2 = vec3(0.4, 0.8, 1.0);    // Aurora blue
      vec3 color3 = vec3(0.8, 0.4, 1.0);    // Aurora purple
      vec3 color4 = vec3(0.2, 0.9, 0.8);    // Aurora cyan
      
      float wave1 = sin(vUv.x * 12.0 + time + scroll) * 0.5 + 0.5;
      float wave2 = sin(vUv.y * 10.0 + time * 0.8 + scroll) * 0.5 + 0.5;
      float wave3 = sin(vUv.x * 6.0 + vUv.y * 8.0 + time * 1.5 + scroll) * 0.5 + 0.5;
      
      vec3 finalColor = mix(color1, color2, wave1);
      finalColor = mix(finalColor, color3, wave2);
      finalColor = mix(finalColor, color4, wave3);
      
      // Enhanced brightness and scroll effects
      float brightness = (wave1 + wave2 + wave3) * 0.4;
      brightness += sin(scroll) * 0.3;
      brightness += 0.2; // Base brightness
      
      gl_FragColor = vec4(finalColor, brightness);
    }
  `;

  return (
    <mesh ref={meshRef} position={[0, 0, -25]}>
      <planeGeometry args={[60, 180, 64, 64]} />
      <shaderMaterial
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={{
          time: { value: 0 },
          scroll: { value: 0 }
        }}
        transparent
        side={THREE.DoubleSide}
        blending={THREE.AdditiveBlending}
      />
    </mesh>
  );
}

export default function AuroraScene() {
  return (
    <div className="fixed inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 15], fov: 75 }}
        style={{ background: 'transparent' }}
      >
        {/* Enhanced Lighting */}
        <ambientLight intensity={0.3} />
        <pointLight position={[20, 20, 20]} intensity={1.2} color="#4ade80" />
        <pointLight position={[-20, -20, -20]} intensity={0.8} color="#a855f7" />
        <pointLight position={[0, 30, 10]} intensity={1.0} color="#60a5fa" />
        <pointLight position={[0, -30, 10]} intensity={0.6} color="#ec4899" />
        
        {/* Multiple Aurora Ribbons */}
        <AuroraRibbon position={[-20, 10, -5]} color="#4ade80" scrollOffset={0} />
        <AuroraRibbon position={[15, -5, -8]} color="#60a5fa" scrollOffset={1} />
        <AuroraRibbon position={[-10, -15, -12]} color="#a855f7" scrollOffset={2} />
        <AuroraRibbon position={[25, 20, -3]} color="#ec4899" scrollOffset={3} />
        <AuroraRibbon position={[-30, 0, -10]} color="#06b6d4" scrollOffset={4} />
        
        <AuroraParticles />
        <EnhancedAuroraWaves />
        
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.3}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
      </Canvas>
    </div>
  );
}