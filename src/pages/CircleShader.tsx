import { ShaderScene } from '../components/ShaderScene';
import circleShader from '../shaders/circle.glsl?raw';

export const CircleShader = () => {
  return (
    <div style={{ width: '100%', height: '100vh' }}>
      <ShaderScene fragmentShader={circleShader} />
    </div>
  );
}; 