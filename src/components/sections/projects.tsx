"use client";

import { useState } from 'react';
import ProjectCard from '../shared/project-card';
import { projects, projectFilters } from '@/lib/data';
import Reveal from '../shared/reveal';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  
  const mainFilters = projectFilters.filter(f => f !== 'All' && f !== 'Other');

  const filteredProjects = projects.filter(p => {
    if (activeFilter === 'All') return true;
    if (activeFilter === 'Other') {
      return !mainFilters.some(filter => p.technologies.includes(filter));
    }
    return p.technologies.includes(activeFilter);
  });

  return (
    <section id="projects" className="py-24 sm:py-32">
      <Reveal className="mb-12 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          My Projects
        </h2>
        <p className="mt-4 text-muted-foreground">A selection of things I've built and experimented with.</p>
      </Reveal>

      <Reveal delay={200}>
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {projectFilters.map(tech => (
            <Button
              key={tech}
              variant="ghost"
              size="sm"
              onClick={() => setActiveFilter(tech)}
              className={cn(
                "transition-colors",
                activeFilter === tech ? 'bg-accent/20 text-accent' : 'text-muted-foreground'
              )}
            >
              {tech}
            </Button>
          ))}
        </div>
      </Reveal>

      {filteredProjects.length > 6 ? (
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {filteredProjects.map((project, index) => (
              <CarouselItem key={project.id} className="md:basis-1/2 lg:basis-1/3">
                 <div className="p-1 h-full">
                    <ProjectCard {...project} />
                  </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <Reveal key={project.id} delay={index * 100}>
              <ProjectCard {...project} />
            </Reveal>
          ))}
        </div>
      )}
    </section>
  );
};

export default ProjectsSection;
