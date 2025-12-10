'use client';

import Image from 'next/image';
import { BarChart, Target, DollarSign, MousePointerClick } from 'lucide-react';
import { useFullScreenImage } from '@/context/FullScreenImageContext';

export function Slide5() {
  const { openImage } = useFullScreenImage();
  const imageUrl = "/meta.png";

  return (
    <div className="flex flex-col h-full">
      <h2 className="text-3xl font-bold font-headline text-primary mb-6 animate-in fade-in slide-in-from-top-4 duration-500">Meta Ads Strategy</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 flex-grow">
        <div className="relative rounded-lg overflow-hidden cursor-pointer animate-in fade-in slide-in-from-left-8 duration-500 delay-200" onClick={() => openImage(imageUrl)}>
          <Image src={imageUrl} alt="Meta ads analytics" fill style={{ objectFit: 'contain' }} data-ai-hint="data chart" className="transition-transform hover:scale-105"/>
        </div>
        <div className="flex flex-col justify-center animate-in fade-in slide-in-from-right-8 duration-500 delay-300">
          <p className="text-lg mb-6">
            We leverage Meta's powerful advertising platform to run targeted campaigns that drive conversions and achieve a high return on investment.
          </p>
          <div className="grid grid-cols-2 gap-6">
            <div className="flex items-start p-3 bg-secondary/50 rounded-lg">
                <Target className="w-6 h-6 mr-3 text-primary shrink-0 mt-1" />
                <div>
                    <h4 className="font-semibold">Precision Targeting</h4>
                    <p className="text-sm text-muted-foreground">Reaching specific demographics and interests.</p>
                </div>
            </div>
             <div className="flex items-start p-3 bg-secondary/50 rounded-lg">
                <MousePointerClick className="w-6 h-6 mr-3 text-primary shrink-0 mt-1" />
                <div>
                    <h4 className="font-semibold">A/B Testing</h4>
                    <p className="text-sm text-muted-foreground">Optimizing ad creatives and copy for performance.</p>
                </div>
            </div>
             <div className="flex items-start p-3 bg-secondary/50 rounded-lg">
                <BarChart className="w-6 h-6 mr-3 text-primary shrink-0 mt-1" />
                <div>
                    <h4 className="font-semibold">Performance Tracking</h4>
                    <p className="text-sm text-muted-foreground">Analyzing metrics to refine our campaigns.</p>
                </div>
            </div>
             <div className="flex items-start p-3 bg-secondary/50 rounded-lg">
                <DollarSign className="w-6 h-6 mr-3 text-primary shrink-0 mt-1" />
                <div>
                    <h4 className="font-semibold">Budget Optimization</h4>
                    <p className="text-sm text-muted-foreground">Maximizing ROAS through smart budget allocation.</p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
