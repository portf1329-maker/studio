import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const teamMembers = [
  { name: 'Alex Johnson', role: 'Project Lead', image: '/images/team-member-1.jpg', hint: 'person portrait' },
  { name: 'Maria Garcia', role: 'Marketing Strategist', image: '/images/team-member-2.jpg', hint: 'person portrait' },
  { name: 'Samira Khan', role: 'Content Creator', image: '/images/team-member-3.jpg', hint: 'person portrait' },
];

export function Slide1() {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center">
      <h1 className="text-5xl font-bold font-headline text-primary">Digital Marketing Strategy</h1>
      <p className="mt-4 text-xl text-muted-foreground">Presented by The Innovators</p>
      
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl">
        {teamMembers.map((member) => (
            <div key={member.name} className="flex flex-col items-center">
              <Avatar className="w-24 h-24 border-4 border-accent">
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
