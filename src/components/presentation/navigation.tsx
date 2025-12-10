'use client';

import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';

export function Navigation() {
  const pathname = usePathname();
  const router = useRouter();
  const slideNumberMatch = pathname.match(/\/slide\/(\d+)/);
  const currentSlide = slideNumberMatch ? parseInt(slideNumberMatch[1], 10) : 1;
  const totalSlides = 6;

  const handlePrev = () => {
    if (currentSlide > 1) {
      router.push(`/slide/${currentSlide - 1}`);
    }
  };

  const handleNext = () => {
    if (currentSlide < totalSlides) {
      router.push(`/slide/${currentSlide + 1}`);
    }
  };

  return (
    <div className="flex items-center justify-between w-full">
      <Button
        variant="outline"
        onClick={handlePrev}
        disabled={currentSlide === 1}
        aria-label="Previous Slide"
        asChild
      >
        <Link href={`/slide/${currentSlide - 1}`}>
          <ArrowLeft className="h-4 w-4 mr-2" />
          Previous
        </Link>
      </Button>
      <span className="text-sm font-medium text-muted-foreground">
        {currentSlide} / {totalSlides}
      </span>
      <Button
        onClick={handleNext}
        disabled={currentSlide === totalSlides - 1}
        aria-label="Next Slide"
        asChild
      >
        <Link href={`/slide/${currentSlide + 1}`}>
          Next
          <ArrowRight className="h-4 w-4 ml-2" />
        </Link>
      </Button>
    </div>
  );
}
