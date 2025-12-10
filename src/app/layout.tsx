import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { Navigation } from '@/components/presentation/navigation';
import { FullScreenImageProvider } from '@/context/FullScreenImageContext';

export const metadata: Metadata = {
  title: 'SlideShowPro',
  description: 'An interactive presentation website for a digital marketing course project.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        <FullScreenImageProvider>
          <div className="flex flex-col items-center justify-center min-h-screen p-4 overflow-hidden">
            <header className="w-full max-w-5xl mb-4">
              <a href="/slide/1">
                <h1 className="text-2xl font-headline font-bold text-primary">SlideShowPro</h1>
              </a>
            </header>
            
            <main className="relative w-full max-w-5xl aspect-video bg-card rounded-xl shadow-2xl overflow-hidden">
              {children}
            </main>

            <footer className="w-full max-w-5xl mt-4">
              <Navigation />
            </footer>
          </div>
        </FullScreenImageProvider>
        <Toaster />
      </body>
    </html>
  );
}
