'use client';

import type { ButtonProps } from '@/types';
import { cn } from '@/lib/utils';

const buttonVariants = {
  primary: 'bg-urated-yellow-dark text-urated-dark hover:bg-urated-yellow hover:scale-105 active:scale-95 transform transition-all duration-200 ease-out hover:shadow-lg',
  secondary: 'bg-transparent text-urated-cream border border-urated-cream hover:bg-urated-cream hover:text-urated-dark hover:scale-105 active:scale-95 transform transition-all duration-200 ease-out',
  outline: 'border border-urated-yellow text-urated-yellow hover:bg-urated-yellow hover:text-urated-dark hover:scale-105 active:scale-95 transform transition-all duration-200 ease-out hover:shadow-lg',
  play: 'bg-white/30 rounded-full flex items-center justify-center backdrop-blur-sm hover:bg-white/40 hover:scale-110 active:scale-95 transform transition-all duration-300 ease-out group focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 hover:shadow-xl'
};

const buttonSizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-6 py-3.5 text-lg md:text-xl',
  play: 'w-20 h-20 md:w-24 md:h-24 lg:w-32 lg:h-32'
};

export function URatedButton({
  children,
  onClick,
  variant = 'primary',
  size = 'md',
  className,
  disabled = false,
  type = 'button',
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  loading = false,
  ...props
}: ButtonProps & {
  'aria-label'?: string;
  'aria-describedby'?: string;
  loading?: boolean;
}) {
  const isPlayButton = variant === 'play' as any;
  
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={cn(
        'font-inter font-medium relative overflow-hidden cursor-pointer',
        !isPlayButton && 'rounded-lg focus:outline-none focus:ring-2 focus:ring-urated-yellow focus:ring-offset-2',
        'disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none disabled:hover:scale-100',
        'motion-reduce:transition-none motion-reduce:transform-none motion-reduce:hover:scale-100',
        buttonVariants[variant],
        buttonSizes[size],
        className
      )}
      aria-disabled={disabled || loading}
      aria-label={ariaLabel || (isPlayButton ? 'Play video' : undefined)}
      aria-describedby={ariaDescribedBy}
      {...props}
    >
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin" />
        </div>
      )}
      <div className={cn('flex items-center justify-center', loading && 'opacity-0')}>
        {isPlayButton ? (
          <svg
            className="text-white ml-1 group-hover:scale-110 transition-transform duration-300 ease-out w-8 h-8 md:w-10 md:h-10 lg:w-16 lg:h-16 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
            viewBox="0 0 65 67"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 16.1369C12 12.2331 16.0999 9.76279 19.4517 11.6422L50.3956 29.0055C53.8681 30.9533 53.8681 36.0443 50.3956 37.9949L19.4544 55.3582C16.1026 57.2376 12.0027 54.7645 12.0027 50.8635L12 16.1369Z"
              fill="white"
            />
          </svg>
        ) : children}
      </div>
    </button>
  );
}
