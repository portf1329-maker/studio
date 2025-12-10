'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';
import { Navigation } from '@/components/presentation/navigation';
import { Slide1 } from '@/components/presentation/slide-1';
import { Slide2 } from '@/components/presentation/slide-2';
import { Slide3 } from '@/components/presentation/slide-3';
import { Slide4 } from '@/components/presentation/slide-4';
import { Slide5 } from '@/components/presentation/slide-5';
import { Slide6 } from '@/components/presentation/slide-6';

const slides = [
  <Slide1 />,
  <Slide2 />,
  <Slide3 />,
  <Slide4 />,
  <Slide5 />,
  <Slide6 />,
];

export default function Home() {
  const [slideIndex, setSlideIndex] = useState(0);
  const [direction, setDirection] = useState(0); // 0: initial, 1: next, -1: prev

  const handleNext = () => {
    if (slideIndex < slides.length - 1) {
      setDirection(1);
      setSlideIndex(slideIndex + 1);
    }
  };

  const handlePrev = () => {
    if (slideIndex > 0) {
      setDirection(-1);
      setSlideIndex(slideIndex - 1);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 overflow-hidden">
      <header className="w-full max-w-5xl mb-4">
        <h1 className="text-2xl font-headline font-bold text-primary">SlideShowPro</h1>
      </header>

      <main className="relative w-full max-w-5xl aspect-video bg-card rounded-xl shadow-2xl overflow-hidden">
        <div
          key={slideIndex}
          className={cn(
            'absolute inset-0 p-8 md:p-12 animate-in',
            direction === 0 ? 'fade-in duration-500' : 
            direction === 1 ? 'slide-in-from-right duration-300' : 'slide-in-from-left duration-300'
          )}
        >
          {slides[slideIndex]}
        </div>
      </main>

      <footer className="w-full max-w-5xl mt-4">
        <Navigation
          currentSlide={slideIndex}
          totalSlides={slides.length}
          onPrev={handlePrev}
          onNext={handleNext}
        />
      </footer>
    </div>
  );
}
