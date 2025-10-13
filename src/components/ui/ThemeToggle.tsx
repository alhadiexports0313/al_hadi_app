'use client';

import React, { useState, useEffect } from 'react';
import { useTheme } from '../ThemeProvider';

interface ThemeToggleProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

// Internal component that uses the theme hook
const ThemeToggleInternal: React.FC<ThemeToggleProps> = ({ 
  className = '', 
  size = 'md' 
}) => {
  const { theme, toggleTheme } = useTheme();

  // Size configurations
  const sizeConfig = {
    sm: {
      container: 'w-12 h-6',
      slider: 'w-5 h-5',
      translate: 'translate-x-6',
      icon: 'text-xs',
      padding: 'left-0.5 top-0.5'
    },
    md: {
      container: 'w-14 h-8',
      slider: 'w-6 h-6',
      translate: 'translate-x-6',
      icon: 'text-sm',
      padding: 'left-1 top-1'
    },
    lg: {
      container: 'w-16 h-9',
      slider: 'w-7 h-7',
      translate: 'translate-x-7',
      icon: 'text-base',
      padding: 'left-1 top-1'
    }
  };

  const config = sizeConfig[size];

  return (
    <button
      onClick={toggleTheme}
      role="switch"
      aria-checked={theme === 'dark'}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      className={`
        relative inline-flex items-center ${config.container} rounded-full 
        transition-all duration-500 ease-in-out
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary 
        focus-visible:ring-offset-2 focus-visible:ring-offset-white 
        dark:focus-visible:ring-offset-slate-900
        hover:shadow-lg hover:scale-105
        ${theme === 'dark' 
          ? 'bg-gradient-to-r from-slate-700 to-slate-600 shadow-inner' 
          : 'bg-gradient-to-r from-gray-200 to-gray-300 shadow-inner'
        }
        ${className}
      `}
    >
      {/* Background track */}
      <span 
        className={`
          absolute inset-0 rounded-full transition-all duration-500 ease-in-out
          ${theme === 'dark' 
            ? 'bg-gradient-to-r from-slate-800 via-slate-700 to-slate-600' 
            : 'bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300'
          }
        `}
        aria-hidden="true"
      />
      
      {/* Sliding circle */}
      <span
        className={`
          absolute ${config.padding} ${config.slider} rounded-full 
          transform transition-all duration-500 ease-in-out
          shadow-lg border-2
          ${theme === 'dark' 
            ? `${config.translate} bg-gradient-to-br from-slate-100 to-white border-slate-200` 
            : 'translate-x-0 bg-gradient-to-br from-white to-gray-50 border-gray-300'
          }
        `}
        aria-hidden="true"
      >
        {/* Icon container with rotation animation */}
        <span 
          className={`
            flex items-center justify-center w-full h-full
            transition-all duration-500 ease-in-out
            ${theme === 'dark' ? 'rotate-0' : 'rotate-180'}
          `}
        >
          {/* Icons with fade transition */}
          <span 
            className={`
              absolute inset-0 flex items-center justify-center ${config.icon}
              transition-all duration-300 ease-in-out
              ${theme === 'dark' 
                ? 'opacity-100 scale-100 rotate-0' 
                : 'opacity-0 scale-75 rotate-90'
              }
            `}
            aria-hidden="true"
          >
            🌙
          </span>
          <span 
            className={`
              absolute inset-0 flex items-center justify-center ${config.icon}
              transition-all duration-300 ease-in-out
              ${theme === 'light' 
                ? 'opacity-100 scale-100 rotate-0' 
                : 'opacity-0 scale-75 -rotate-90'
              }
            `}
            aria-hidden="true"
          >
            ☀️
          </span>
        </span>
      </span>

      {/* Subtle glow effect */}
      <span 
        className={`
          absolute inset-0 rounded-full transition-all duration-500 ease-in-out
          ${theme === 'dark' 
            ? 'shadow-inner shadow-slate-900/50' 
            : 'shadow-inner shadow-gray-400/30'
          }
        `}
        aria-hidden="true"
      />
      
      {/* Active state indicator */}
      <span 
        className={`
          absolute inset-0 rounded-full transition-all duration-300 ease-in-out
          ${theme === 'dark' 
            ? 'bg-gradient-to-r from-blue-500/10 to-purple-500/10' 
            : 'bg-gradient-to-r from-amber-400/10 to-orange-400/10'
          }
          opacity-0 hover:opacity-100
        `}
        aria-hidden="true"
      />
    </button>
  );
};

// Main export component that handles mounting
export const ThemeToggle: React.FC<ThemeToggleProps> = (props) => {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  // Don't render anything until mounted to prevent hydration mismatch
  if (!mounted) {
    return (
      <div className={`relative inline-flex items-center w-14 h-8 rounded-full bg-gray-200 ${props.className || ''}`}>
        <div className="w-6 h-6 bg-white rounded-full shadow-lg transform transition-transform duration-300" />
      </div>
    );
  }

  // Render the actual component only after mounting
  return <ThemeToggleInternal {...props} />;
};