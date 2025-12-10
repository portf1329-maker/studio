import Image from 'next/image';

export function Slide3() {
  return (
    <div className="flex flex-col h-full">
      <h2 className="text-3xl font-bold font-headline text-primary mb-6">Content Marketing</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 flex-grow">
        <div className="flex flex-col items-center justify-center p-4 bg-secondary/50 rounded-lg">
          <Image src="/images/content-marketing-1.jpg" alt="Blog content" width={600} height={400} className="rounded-md shadow-md mb-4" data-ai-hint="writing desk"/>
          <h3 className="text-xl font-semibold font-headline">Valuable Blog Posts</h3>
          <p className="text-center text-muted-foreground mt-2">
            We produce insightful articles that address our audience's pain points and interests, establishing thought leadership.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center p-4 bg-secondary/50 rounded-lg">
          <Image src="/images/content-marketing-2.jpg" alt="Video content" width={600} height={400} className="rounded-md shadow-md mb-4" data-ai-hint="video camera"/>
          <h3 className="text-xl font-semibold font-headline">Engaging Video Content</h3>
          <p className="text-center text-muted-foreground mt-2">
            From tutorials to brand stories, our videos are designed to capture attention and deliver our message dynamically.
          </p>
        </div>
      </div>
    </div>
  );
}
