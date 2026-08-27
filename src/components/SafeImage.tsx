import React from 'react';

interface SafeImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackCategory?: 'mining' | 'architecture' | 'construction' | 'general';
}

const GRADIENTS: Record<string, string> = {
  mining:
    'linear-gradient(160deg, #3a332e 0%, #5c4f45 30%, #2d2722 60%, #4a3f37 100%)',
  architecture:
    'linear-gradient(160deg, #2c3e50 0%, #34495e 40%, #1a252f 70%, #3d566e 100%)',
  construction:
    'linear-gradient(160deg, #3a2f28 0%, #5c4a3a 40%, #2b2319 70%, #4d3e32 100%)',
  general:
    'linear-gradient(160deg, #1e1e2e 0%, #2a2a3e 40%, #15151f 70%, #33334d 100%)',
};

export const SafeImage: React.FC<SafeImageProps> = ({
  alt = 'Cromor Asset',
  fallbackCategory = 'general',
  className = '',
}) => {
  const gradient = GRADIENTS[fallbackCategory] || GRADIENTS.general;

  return (
    <div className={`relative w-full h-full overflow-hidden ${className}`}>
      {/* Permanent gradient — no external images, NEVER breaks */}
      <div
        className="absolute inset-0"
        style={{ background: gradient }}
      />
    </div>
  );
};
