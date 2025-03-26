import { ShaderScene } from '../components/ShaderScene';
import circleShader from '../shaders/circle.glsl?raw';
import { cn } from '../lib/utils';

export const CircleShader = ({ className }: { className?: string }) => {
  return (
    <div className={cn("w-screen h-screen", className)}>
      <ShaderScene fragmentShader={circleShader} />
    </div>
  );
}; 