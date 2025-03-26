import { ShaderScene } from '../components/ShaderScene';
import waveShader from '../shaders/wave.glsl?raw';

export const WaveShader = ({ className }: { className?: string }) => {
  return (
    <ShaderScene fragmentShader={waveShader} className={className}/>
  );
}; 