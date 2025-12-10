'use client';

import { useParams } from 'next/navigation';
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

export default function SlidePage() {
  const params = useParams();
  const slideNumber = parseInt(params.slideNumber as string, 10);
  const slideIndex = slideNumber - 1;

  if (isNaN(slideIndex) || slideIndex < 0 || slideIndex >= slides.length) {
    return <div>Slide not found</div>;
  }

  return (
    <div className="absolute inset-0 p-8 md:p-12">
      {slides[slideIndex]}
    </div>
  );
}
