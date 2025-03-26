import { ShaderScene } from '../components/ShaderScene';
import noiseShader from '../shaders/noise.glsl?raw';
import { cn } from '../lib/utils';

export const NoiseShader = ({ className }: { className?: string }) => {
  return (
    <div className={cn("w-screen h-screen", className)}>
      <ShaderScene fragmentShader={noiseShader} />
    </div>
  );
}; 