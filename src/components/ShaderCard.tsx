import { Link } from 'react-router-dom';
import { cn } from '../lib/utils';

interface ShaderCardProps {
  to: string;
  title: string;
  description: string;
  preview: React.ReactNode;
  className?: string;
}

export const ShaderCard = ({ to, title, description, preview, className }: ShaderCardProps) => {
  return (
    <Link 
      to={to} 
      className={cn(
        "bg-white rounded-xl p-8 no-underline text-inherit transition-all duration-200 shadow-xl hover:-translate-y-1 hover:shadow-lg",
        className
      )}
    >
      {preview}
      <h2 className="m-0 mb-4 text-gray-800">{title}</h2>
      <p className="m-0 text-gray-600">{description}</p>
    </Link>
  );
}; 