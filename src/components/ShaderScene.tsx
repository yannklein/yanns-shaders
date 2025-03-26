import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import vertexShader from '../shaders/vertex.glsl?raw';

interface ShaderSceneProps {
  fragmentShader: string;
}

export const ShaderScene = ({ fragmentShader }: ShaderSceneProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const materialRef = useRef<THREE.ShaderMaterial | null>(null);
  const animationFrameRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    if (!containerRef.current) return;

    // Clean up any existing canvas
    if (containerRef.current.children.length > 0) {
      containerRef.current.innerHTML = '';
    }

    // Scene setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      75,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 5;
    cameraRef.current = camera;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Geometry setup
    const geometry = new THREE.PlaneGeometry(2, 2);

    // Shader material setup
    const material = new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
      },
      vertexShader,
      fragmentShader,
    });
    materialRef.current = material;

    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    // Animation
    const animate = () => {
      animationFrameRef.current = requestAnimationFrame(animate);
      if (materialRef.current) {
        materialRef.current.uniforms.uTime.value += 0.01;
      }
      renderer.render(scene, camera);
    };
    animate();

    // Resize handler
    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const { width, height } = entry.contentRect;
        if (cameraRef.current && rendererRef.current) {
          cameraRef.current.aspect = width / height;
          cameraRef.current.updateProjectionMatrix();
          rendererRef.current.setSize(width, height);
        }
      }
    });

    resizeObserver.observe(containerRef.current);

    // Cleanup
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      resizeObserver.disconnect();
      if (containerRef.current && rendererRef.current) {
        containerRef.current.removeChild(rendererRef.current.domElement);
        rendererRef.current.dispose();
        rendererRef.current = null;
      }
      if (materialRef.current) {
        materialRef.current.dispose();
        materialRef.current = null;
      }
      if (sceneRef.current) {
        sceneRef.current.clear();
        sceneRef.current = null;
      }
      if (cameraRef.current) {
        cameraRef.current = null;
      }
    };
  }, [fragmentShader]);

  return <div ref={containerRef} className="w-full h-full" />;
}; 