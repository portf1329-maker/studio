import Image from 'next/image';

export function Slide2() {
  return (
    <div className="flex flex-col h-full">
      <h2 className="text-3xl font-bold font-headline text-primary mb-6">Brand Storytelling</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 flex-grow">
        <div className="flex flex-col justify-center">
          <p className="text-lg mb-4">
            Every brand has a unique story. Ours began with a simple idea: to connect people through meaningful digital experiences. This narrative shapes our identity and guides our marketing efforts.
          </p>
          <p className="text-muted-foreground">
            This section explains the origin, mission, and values of our brand. By crafting a compelling narrative, we aim to build an emotional connection with our audience, fostering loyalty and trust.
          </p>
        </div>
        <div className="relative rounded-lg overflow-hidden">
          <Image src="/images/brand-story.jpg" alt="Brand story" fill style={{ objectFit: 'cover' }} data-ai-hint="abstract journey" />
        </div>
      </div>
    </div>
  );
}
