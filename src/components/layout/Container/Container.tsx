import { type ReactNode } from 'react';

export interface ContainerProps {
  children: ReactNode;
  className?: string;
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  padding?: boolean;
}

export function Container({ 
  children, 
  className = '',
  maxWidth = 'xl',
  padding = true,
}: ContainerProps) {
  const maxWidths = {
    sm: 'max-w-2xl',     // 672px
    md: 'max-w-4xl',     // 896px  
    lg: 'max-w-6xl',     // 1152px
    xl: 'w-[95%] max-w-[1600px]', // 95% width up to 1600px max
    full: 'max-w-full',
  };

  const paddingClasses = padding ? 'px-[2.5%] md:px-6 lg:px-0' : '';

  return (
    <div className={`
      ${maxWidths[maxWidth]} mx-auto ${paddingClasses} ${className}
    `.trim().replace(/\s+/g, ' ')}>
      {children}
    </div>
  );
}

export default Container;