'use client';

import React, { createContext, useState, useContext, ReactNode } from 'react';
import { FullScreenImage } from '@/components/FullScreenImage';

type FullScreenImageContextType = {
  openImage: (src: string) => void;
  closeImage: () => void;
};

const FullScreenImageContext = createContext<FullScreenImageContextType | undefined>(undefined);

export function FullScreenImageProvider({ children }: { children: ReactNode }) {
  const [imageSrc, setImageSrc] = useState<string | null>(null);

  const openImage = (src: string) => {
    setImageSrc(src);
  };

  const closeImage = () => {
    setImageSrc(null);
  };

  return (
    <FullScreenImageContext.Provider value={{ openImage, closeImage }}>
      {children}
      <FullScreenImage src={imageSrc} onClose={closeImage} />
    </FullScreenImageContext.Provider>
  );
}

export function useFullScreenImage() {
  const context = useContext(FullScreenImageContext);
  if (context === undefined) {
    throw new Error('useFullScreenImage must be used within a FullScreenImageProvider');
  }
  return context;
}
