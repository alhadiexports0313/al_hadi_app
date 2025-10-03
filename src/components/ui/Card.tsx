import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  padding?: 'none' | 'sm' | 'md' | 'lg';
  animate?: boolean;
}

interface CardHeaderProps {
  children: ReactNode;
  className?: string;
}

interface CardContentProps {
  children: ReactNode;
  className?: string;
}

interface CardFooterProps {
  children: ReactNode;
  className?: string;
}

const Card = ({ children, className, hover = true, padding = 'md', animate = false }: CardProps) => {
  const paddingClasses = {
    none: '',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8'
  };

  return (
    <div
      className={cn(
        'bg-white rounded-lg border border-gray-200 shadow-sm',
        hover && 'hover:shadow-lg hover:-translate-y-1 transition-all duration-300 ease-out cursor-pointer',
        animate && 'animate-fade-in',
        paddingClasses[padding],
        className
      )}
    >
      {children}
    </div>
  );
};

const CardHeader = ({ children, className }: CardHeaderProps) => {
  return (
    <div className={cn('mb-4', className)}>
      {children}
    </div>
  );
};

const CardContent = ({ children, className }: CardContentProps) => {
  return (
    <div className={cn('', className)}>
      {children}
    </div>
  );
};

const CardFooter = ({ children, className }: CardFooterProps) => {
  return (
    <div className={cn('mt-4 pt-4 border-t border-gray-100', className)}>
      {children}
    </div>
  );
};

export { Card, CardHeader, CardContent, CardFooter };