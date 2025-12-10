'use client';

import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useFullScreenImage } from '@/context/FullScreenImageContext';

const teamMembers = [
  { name: 'Tayyaba Rehman', role: 'Project Lead', image: '/taiba.png', hint: 'person portrait' },
  { name: 'Fazila', role: 'Team member', image: '/fazila.png', hint: 'person portrait' },
  { name: 'Riffat', role: 'Team member', image: '/rifat.png', hint: 'person portrait' },
];

export function Slide1() {
  const { openImage } = useFullScreenImage();

  return (
    <div className="flex flex-col items-center justify-center h-full text-center">
      <h1 className="text-5xl font-bold font-headline text-primary animate-in fade-in zoom-in-95 duration-500">Digital Marketing Strategy</h1>
      <p className="mt-4 text-xl text-muted-foreground animate-in fade-in zoom-in-95 duration-500 delay-200">Presented by The Innovators</p>
      
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl">
        {teamMembers.map((member, index) => (
            <div key={member.name} className="flex flex-col items-center animate-in fade-in slide-in-from-bottom-8 duration-500" style={{ animationDelay: `${300 + index * 100}ms`}}>
              <Avatar className="w-24 h-24 border-4 border-primary cursor-pointer transition-transform hover:scale-110" onClick={() => openImage(member.image)}>
                <AvatarImage src={member.image} alt={member.name} data-ai-hint={member.hint} />
                <AvatarFallback>{member.name.substring(0, 2)}</AvatarFallback>
              </Avatar>
              <h3 className="mt-4 text-lg font-semibold font-headline">{member.name}</h3>
              <p className="text-sm text-muted-foreground">{member.role}</p>
            </div>
          ))}
      </div>
    </div>
  );
}
