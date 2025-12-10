'use client';

import Image from 'next/image';
import { useFullScreenImage } from '@/context/FullScreenImageContext';

export function Slide2() {
  const { openImage } = useFullScreenImage();
  const imageUrl = "/brand.png";

  return (
    <div className="flex flex-col h-full">
      <h2 className="text-3xl font-bold font-headline text-primary mb-6 animate-in fade-in slide-in-from-top-4 duration-500">Brand Storytelling</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 flex-grow">
        <div className="flex flex-col justify-center animate-in fade-in slide-in-from-left-8 duration-500 delay-200">
          <p className="text-lg mb-4">
          Every brand has a unique story. Chaman is named after my mother, honoring her love, care, and the inspiration she brings into everything we do. I started this brand with a simple idea: to create customized items that connect people through emotions and memories.

From personalized gifts to thoughtful keepsakes, every product is crafted to make moments meaningful and special. Our creations are designed not just to be beautiful.Our mission is simple yet powerful: turn moments into memories with authenticity, creativity, and heart. By carrying my mother’s name in the brand.
          </p>
          <p className="text-muted-foreground">
          Chaman is more than a brand  it is a garden of emotions, where every item blooms with meaning, making every customer feel valued and connected.
          </p>
        </div>
        <div className="relative rounded-lg overflow-hidden cursor-pointer animate-in fade-in slide-in-from-right-8 duration-500 delay-300" onClick={() => openImage(imageUrl)}>
          <Image src={imageUrl} alt="Brand story" fill style={{ objectFit: 'contain' }} data-ai-hint="abstract journey" className="transition-transform hover:scale-105" />
        </div>
      </div>
    </div>
  );
}
