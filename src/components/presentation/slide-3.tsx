'use client';

import Image from 'next/image';
import { useFullScreenImage } from '@/context/FullScreenImageContext';

export function Slide3() {
  const { openImage } = useFullScreenImage();

  return (
    <div className="flex flex-col h-full animate-in fade-in slide-in-from-bottom-4 duration-500">
      <h2 className="text-3xl font-bold font-headline text-primary mb-6">Content Marketing</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 flex-grow">
        <div className="flex flex-col items-center justify-center p-4 bg-secondary/50 rounded-lg">
          <div className="relative w-full h-full cursor-pointer" onClick={() => openImage('/smo.png')}>
            <Image src="/smo.png" alt="Blog content" width={600} height={400} className="rounded-md shadow-md mb-4 object-contain" data-ai-hint="writing desk"/>
          </div>
          <h3 className="text-xl font-semibold font-headline mt-4">Valuable Posts</h3>
          <p className="text-center text-muted-foreground mt-2">
            We produce insightful articles that address our audience's pain points and interests, establishing thought leadership.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center p-4 bg-secondary/50 rounded-lg">
          <div className="relative w-full h-full cursor-pointer" onClick={() => openImage('/vedio.png')}>
            <Image src="/vedio.png" alt="Video content" width={600} height={400} className="rounded-md shadow-md mb-4 object-contain" data-ai-hint="video camera"/>
          </div>
          <h3 className="text-xl font-semibold font-headline mt-4">Engaging Video Content</h3>
          <p className="text-center text-muted-foreground mt-2">
            From tutorials to brand stories, our videos are designed to capture attention and deliver our message dynamically.
          </p>
        </div>
      </div>
    </div>
  );
}
