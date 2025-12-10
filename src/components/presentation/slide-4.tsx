'use client';

import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Users, ThumbsUp, MessageSquare, Share2 } from 'lucide-react';
import { useFullScreenImage } from '@/context/FullScreenImageContext';

export function Slide4() {
  const { openImage } = useFullScreenImage();

  return (
    <div className="flex flex-col h-full">
      <h2 className="text-3xl font-bold font-headline text-primary mb-6 animate-in fade-in slide-in-from-top-4 duration-500">Social Media Optimization (SMO)</h2>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6 flex-grow">
        <div className="md:col-span-3 flex flex-col gap-4">
          <div className="relative w-full h-48 rounded-lg overflow-hidden cursor-pointer animate-in fade-in slide-in-from-left-8 duration-500 delay-200" onClick={() => openImage('/smo 1.png')}>
            <Image src="/smo 1.png" alt="Social media engagement" fill style={{ objectFit: 'contain' }} data-ai-hint="people talking" className="transition-transform hover:scale-105" />
          </div>
          <div className="relative w-full h-48 rounded-lg overflow-hidden cursor-pointer animate-in fade-in slide-in-from-left-8 duration-500 delay-300" onClick={() => openImage('/fb.png')}>
            <Image src="/fb.png" alt="Social media network" fill style={{ objectFit: 'contain' }} data-ai-hint="social network" className="transition-transform hover:scale-105" />
          </div>
        </div>
        <div className="md:col-span-2 flex flex-col justify-center animate-in fade-in slide-in-from-right-8 duration-500 delay-400">
            <h3 className="font-headline text-xl font-semibold mb-4">Building a Community</h3>
            <p className="text-muted-foreground mb-6">
                Our SMO strategy focuses on fostering genuine connections and encouraging user-generated content to amplify our brand's reach organically.
            </p>
            <div className="space-y-4">
                <div className="flex items-center">
                    <Users className="w-5 h-5 mr-3 text-primary" />
                    <span>Growing our follower base</span>
                </div>
                <div className="flex items-center">
                    <ThumbsUp className="w-5 h-5 mr-3 text-primary" />
                    <span>Increasing engagement rates</span>
                </div>
                 <div className="flex items-center">
                    <Share2 className="w-5 h-5 mr-3 text-primary" />
                    <span>Maximizing content shareability</span>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}
