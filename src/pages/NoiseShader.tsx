import { ShaderScene } from '../components/ShaderScene';
import noiseShader from '../shaders/noise.glsl?raw';

export const NoiseShader = () => {
  return (
    <div style={{ width: '100%', height: '100vh' }}>
      <ShaderScene fragmentShader={noiseShader} />
    </div>
  );
}; 