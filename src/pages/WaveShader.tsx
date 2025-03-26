import { ShaderScene } from '../components/ShaderScene';
import waveShader from '../shaders/wave.glsl?raw';

export const WaveShader = () => {
  return (
    <div style={{ width: '100%', height: '100vh' }}>
      <ShaderScene fragmentShader={waveShader} />
    </div>
  );
}; 