import React, { useState } from 'react';
import { Dumbbell } from 'lucide-react';

interface SafeImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackTitle?: string;
  containerClassName?: string;
}

export const SafeImage: React.FC<SafeImageProps> = ({
  src,
  alt = 'Success Fitness Center Gym Equipment',
  className = '',
  containerClassName = '',
  fallbackTitle = 'Success Fitness Center',
  ...props
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={`relative overflow-hidden bg-[#10121A] ${containerClassName}`}>
      {/* Loading Placeholder Skeleton */}
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-[#12131A] via-[#1A1D27] to-[#12131A]" />
      )}

      {/* Fallback Graphic */}
      {hasError || !src ? (
        <div className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-br from-[#12141F] via-[#0E1017] to-[#08090C] p-6 text-center">
          <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-xl border border-[#E5A93C]/30 bg-[#E5A93C]/10 text-[#E5A93C] shadow-lg shadow-black/40">
            <Dumbbell className="h-7 w-7" />
          </div>
          <p className="font-heading text-sm font-semibold tracking-wider text-[#F3F4F6] uppercase">
            {fallbackTitle}
          </p>
          <span className="mt-1 text-xs tracking-wide text-[#94A3B8]">
            Bole, Addis Ababa
          </span>
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          referrerPolicy="no-referrer"
          onLoad={() => setIsLoaded(true)}
          onError={() => setHasError(true)}
          className={`transition-all duration-500 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          } ${className}`}
          {...props}
        />
      )}
    </div>
  );
};
