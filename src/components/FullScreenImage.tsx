'use client';

import Image from 'next/image';

type FullScreenImageProps = {
  src: string | null;
  onClose: () => void;
};

export function FullScreenImage({ src, onClose }: FullScreenImageProps) {
  if (!src) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black bg-opacity-90"
      onClick={onClose}
    >
      <div className="relative w-[90vw] h-[90vh]">
        <Image
          src={src}
          alt="Fullscreen image"
          fill
          style={{ objectFit: 'contain' }}
          className="p-4"
        />
      </div>
    </div>
  );
}
