'use client';

import Image from 'next/image';
import { useFullScreenImage } from '@/context/FullScreenImageContext';

export function Slide6() {
  const { openImage } = useFullScreenImage();
  const imageUrl = "/slide6.png";

  return (
    <div className="flex flex-col h-full">
      <h2 className="text-3xl font-bold font-headline text-primary mb-6">Summary & Thank You</h2>
      <div className="flex-grow grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col justify-center">
          <h3 className="text-2xl font-headline font-semibold mb-4">Key Takeaways</h3>
          <ul className="list-disc list-inside space-y-2 text-lg text-muted-foreground">
            <li>A strong <span className="text-foreground font-medium">brand story</span> builds connection.</li>
            <li>Valuable <span className="text-foreground font-medium">content</span> establishes authority.</li>
            <li><span className="text-foreground font-medium">SMO</span> fosters a loyal community.</li>
            <li>Targeted <span className="text-foreground font-medium">Meta Ads</span> drive measurable results.</li>
          </ul>
           <p className="mt-8 text-2xl font-bold font-headline text-primary">
            Thank you for your attention!
          </p>
        </div>
        <div className="relative rounded-lg overflow-hidden cursor-pointer" onClick={() => openImage(imageUrl)}>
          <Image src={imageUrl} alt="Thank you" fill style={{ objectFit: 'contain' }} data-ai-hint="friendly handshake" />
        </div>
      </div>
    </div>
  );
}
