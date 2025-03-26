import { ShaderScene } from '../components/ShaderScene';
import noiseShader from '../shaders/noise.glsl?raw';

export const NoiseShader = ({ className }: { className?: string }) => {
  return (
      <ShaderScene fragmentShader={noiseShader} className={className}/>
  );
}; 