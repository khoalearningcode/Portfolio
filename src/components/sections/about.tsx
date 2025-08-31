import { interests } from '@/lib/data';
import Image from 'next/image';
import Reveal from '../shared/reveal';

const EducationItem = ({ institution, years, major }: { institution: string; years: string; major: string; }) => (
  <li className="relative pl-6 pb-8 border-l-2 border-border/30">
    <span className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-accent/50 border-4 border-background"></span>
    <p className="font-semibold text-foreground">{institution}</p>
    <p className="text-sm text-muted-foreground">{years}</p>
    <p className="text-sm text-muted-foreground">{major}</p>
  </li>
);

const AboutSection = () => {
  return (
    <section id="about" className="py-24 sm:py-32">
      <Reveal className="mb-12 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          About Me
        </h2>
        <p className="mt-4 text-muted-foreground">A glimpse into my journey and passions.</p>
      </Reveal>
      
      <div className="grid md:grid-cols-2 gap-16 items-start">
        <div className="space-y-8">
          <Reveal direction="left">
            <h3 className="text-2xl font-semibold text-accent">Passionate Explorer</h3>
            <p className="text-muted-foreground mt-2">
              From the intricate dance of neural networks to the robust architecture of cloud systems, I am driven by a deep curiosity for how technology shapes our world. I thrive on challenges and am constantly seeking to learn and build something new.
            </p>
          </Reveal>
          
          <Reveal direction="left" delay={200}>
            <h3 className="text-2xl font-semibold text-accent">Core Interests</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-4">
              {interests.map((interest, index) => (
                <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-card/50">
                  <interest.icon className="w-6 h-6 text-accent" />
                  <span className="font-medium text-foreground">{interest.name}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
        
        <div className="space-y-8">
          <Reveal direction="right">
            <h3 className="text-2xl font-semibold text-accent">Education</h3>
            <ol className="mt-4">
              <EducationItem 
                institution="Ho Chi Minh City University of Technology" 
                years="2023 - Present"
                major="Computer Science"
              />
              <EducationItem
                institution="Gia Dinh High School for the Gifted"
                years="2020 - 2023"
                major="Specialized in Informatics"
              />
            </ol>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
