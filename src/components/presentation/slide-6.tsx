'use client';

export function Slide6() {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center p-8">
      <h2 
        className="text-6xl font-bold font-headline text-primary animate-in fade-in zoom-in-90 duration-700"
      >
        Thank you for listening!
      </h2>
      <p 
        className="mt-6 text-4xl font-headline text-muted-foreground animate-in fade-in zoom-in-90 duration-700 delay-300"
      >
        Any questions?
      </p>
    </div>
  );
}
