import React, { useState, useEffect } from 'react';

interface SafeImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackCategory?: 'mining' | 'architecture' | 'construction' | 'general';
}

const FALLBACK_POOLS: Record<string, string[]> = {
  mining: [
    'https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1508873696983-2df5293cb32f?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80',
  ],
  architecture: [
    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
  ],
  construction: [
    'https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80',
  ],
  general: [
    'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?auto=format&fit=crop&w=1200&q=80',
  ],
};

export const SafeImage: React.FC<SafeImageProps> = ({
  src,
  alt = 'Cromor Asset',
  fallbackCategory = 'general',
  className = '',
  ...props
}) => {
  const pool = FALLBACK_POOLS[fallbackCategory] || FALLBACK_POOLS.general;
  const initialSource = src && src.trim() !== '' ? src : pool[0];

  const [currentSrc, setCurrentSrc] = useState<string>(initialSource);
  const [retryIndex, setRetryIndex] = useState<number>(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (src && src.trim() !== '') {
      setCurrentSrc(src);
      setRetryIndex(0);
    } else {
      setCurrentSrc(pool[0]);
    }
  }, [src, fallbackCategory]);

  const handleError = () => {
    if (retryIndex < pool.length) {
      const nextFallback = pool[retryIndex];
      setRetryIndex((prev) => prev + 1);
      setCurrentSrc(nextFallback);
    } else {
      // Guaranteed generic fallback
      setCurrentSrc(FALLBACK_POOLS.general[0]);
    }
  };

  return (
    <img
      src={currentSrc}
      alt={alt}
      onError={handleError}
      onLoad={() => setIsLoaded(true)}
      loading="lazy"
      referrerPolicy="no-referrer"
      className={`${className} transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-85'}`}
      {...props}
    />
  );
};

