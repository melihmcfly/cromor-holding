import React, { useState, useEffect } from 'react';

interface SafeImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackCategory?: 'mining' | 'architecture' | 'construction' | 'general';
  /** CSS gradient applied behind the image (never breaks) */
  overlayGradient?: string;
}

/** Category-based CSS gradients — NEVER break, always visible as fallback */
const CATEGORY_GRADIENTS: Record<string, string> = {
  mining:
    'linear-gradient(135deg, #2a2320 0%, #3d352f 40%, #1e1a18 70%, #2b2520 100%)',
};

const FALLBACK_POOLS: Record<string, string[]> = {
  mining: [], // ⚠️ CDN görselleri kaldırılıyor — kendi fotoğraflarınızı public/images/ altına koyun
  architecture: [
    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
  ],
  construction: [
    'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80',
  ],
  general: [
    'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80',
  ],
};

export const SafeImage: React.FC<SafeImageProps> = ({
  src,
  alt = 'Cromor Asset',
  fallbackCategory = 'general',
  overlayGradient,
  className = '',
  ...props
}) => {
  const pool = FALLBACK_POOLS[fallbackCategory] || FALLBACK_POOLS.general;

  // Always show category gradient — never rely on props being passed
  const activeGradient = overlayGradient || CATEGORY_GRADIENTS[fallbackCategory];

  const initialSource = src && src.trim() !== '' ? src : (pool.length > 0 ? pool[0] : '');

  const [currentSrc, setCurrentSrc] = useState<string>(initialSource);
  const [hasError, setHasError] = useState<boolean>(false);
  const [retryIndex, setRetryIndex] = useState<number>(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (src && src.trim() !== '') {
      setCurrentSrc(src);
      setHasError(false);
      setRetryIndex(0);
    } else if (pool.length > 0) {
      setCurrentSrc(pool[0]);
      setHasError(false);
    }
  }, [src, fallbackCategory]);

  const handleError = () => {
    if (pool.length > 0 && retryIndex < pool.length) {
      const nextFallback = pool[retryIndex];
      setRetryIndex((prev) => prev + 1);
      setCurrentSrc(nextFallback);
    } else {
      // All fallbacks failed — image area becomes transparent (gradient behind handles it)
      setHasError(true);
    }
  };

  return (
    <div className="relative w-full h-full overflow-hidden">
      {/* CSS gradient overlay layer — ALWAYS renders, NEVER breaks */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: activeGradient || 'linear-gradient(135deg, #1e1a18 0%, #2b2520 100%)',
          transition: 'opacity 1s ease-in-out',
        }}
      />
      {/* Image layer — sits on top of gradient when available and loading */}
      {!hasError && currentSrc && (
        <img
          src={currentSrc}
          alt={alt}
          onError={handleError}
          onLoad={() => setIsLoaded(true)}
          loading="lazy"
          referrerPolicy="no-referrer"
          className={`absolute inset-0 z-10 w-full h-full object-cover transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-85'} ${className}`}
          {...props}
        />
      )}
    </div>
  );
};
