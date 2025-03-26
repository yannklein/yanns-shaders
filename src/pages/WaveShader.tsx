import { ShaderScene } from '../components/ShaderScene';
import waveShader from '../shaders/wave.glsl?raw';
import { cn } from '../lib/utils';

export const WaveShader = ({ className }: { className?: string }) => {
  return (
    <div className={cn("w-screen h-screen", className)}>
      <ShaderScene fragmentShader={waveShader} />
    </div>
  );
}; 