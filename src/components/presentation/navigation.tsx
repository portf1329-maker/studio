'use client';

import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

type NavigationProps = {
  currentSlide: number;
  totalSlides: number;
  onPrev: () => void;
  onNext: () => void;
};

export function Navigation({ currentSlide, totalSlides, onPrev, onNext }: NavigationProps) {
  return (
    <div className="flex items-center justify-between w-full">
      <Button
        variant="outline"
        onClick={onPrev}
        disabled={currentSlide === 0}
        aria-label="Previous Slide"
      >
        <ArrowLeft className="h-4 w-4 mr-2" />
        Previous
      </Button>
      <span className="text-sm font-medium text-muted-foreground">
        {currentSlide + 1} / {totalSlides}
      </span>
      <Button
        onClick={onNext}
        disabled={currentSlide === totalSlides - 1}
        aria-label="Next Slide"
      >
        Next
        <ArrowRight className="h-4 w-4 ml-2" />
      </Button>
    </div>
  );
}
