import Link from 'next/link';
import { Github } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
}

const ProjectCard = ({ title, description, technologies, githubUrl }: ProjectCardProps) => {
  return (
    <Card className="h-full flex flex-col bg-card/50 backdrop-blur-sm border-border/20 glow-border">
      <CardHeader className="flex-row items-start justify-between">
        <CardTitle className="text-xl font-bold text-foreground">{title}</CardTitle>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link href={githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="h-6 w-6 text-muted-foreground transition-colors hover:text-accent" />
                <span className="sr-only">GitHub</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent>
              <p>View on GitHub</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </CardHeader>
      <CardContent className="flex-grow">
        <CardDescription>{description}</CardDescription>
      </CardContent>
      <CardFooter>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <Badge key={tech} variant="secondary" className="bg-accent/10 text-accent font-normal">
              {tech}
            </Badge>
          ))}
        </div>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
