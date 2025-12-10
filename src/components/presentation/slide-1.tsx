import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const teamMembers = [
  { name: 'Alex Johnson', role: 'Project Lead', imageId: 'team-member-1' },
  { name: 'Maria Garcia', role: 'Marketing Strategist', imageId: 'team-member-2' },
  { name: 'Samira Khan', role: 'Content Creator', imageId: 'team-member-3' },
];

function getImage(id: string) {
    return PlaceHolderImages.find(img => img.id === id);
}

export function Slide1() {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center">
      <h1 className="text-5xl font-bold font-headline text-primary">Digital Marketing Strategy</h1>
      <p className="mt-4 text-xl text-muted-foreground">Presented by The Innovators</p>
      
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl">
        {teamMembers.map((member) => {
          const image = getImage(member.imageId);
          return (
            <div key={member.name} className="flex flex-col items-center">
              <Avatar className="w-24 h-24 border-4 border-accent">
                <AvatarImage src={image?.imageUrl} alt={member.name} data-ai-hint={image?.imageHint} />
                <AvatarFallback>{member.name.substring(0, 2)}</AvatarFallback>
              </Avatar>
              <h3 className="mt-4 text-lg font-semibold font-headline">{member.name}</h3>
              <p className="text-sm text-muted-foreground">{member.role}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
