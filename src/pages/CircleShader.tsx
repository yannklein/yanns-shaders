import { ShaderScene } from '../components/ShaderScene';
import circleShader from '../shaders/circle.glsl?raw';

export const CircleShader = ({ className }: { className?: string }) => {
  return (
      <ShaderScene fragmentShader={circleShader}  className={className}/>
  );
}; 