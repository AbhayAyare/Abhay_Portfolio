
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { GithubIcon, ExternalLinkIcon } from 'lucide-react';

const projectsData = [
  {
    title: 'Project Nova',
    description: 'A collaborative project management tool designed to streamline team workflows and enhance productivity. Features real-time updates and task tracking.',
    imageSrc: 'https://placehold.co/600x400.png',
    imageHint: 'project management',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Docker', 'Socket.IO'],
    liveDemoUrl: '#', // Replace with actual URL
    githubUrl: '#', // Replace with actual URL
  },
  {
    title: 'E-Shop Zenith',
    description: 'A modern e-commerce platform featuring advanced product filtering, secure payment gateway integration, and an intuitive user interface for seamless shopping.',
    imageSrc: 'https://placehold.co/600x400.png',
    imageHint: 'ecommerce platform',
    technologies: ['Next.js', 'Express.js', 'MongoDB', 'Stripe API', 'Tailwind CSS'],
    liveDemoUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'ConnectSphere',
    description: 'A dynamic social networking application for professionals to connect, share insights, and build their networks. Includes features like user profiles and activity feeds.',
    imageSrc: 'https://placehold.co/600x400.png',
    imageHint: 'social network',
    technologies: ['Vue.js', 'Firebase', 'Tailwind CSS', 'Nuxt.js'],
    liveDemoUrl: '#',
    githubUrl: '#',
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="w-full py-16 md:py-24 lg:py-32 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-6 text-center mb-12">
          <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm font-medium text-secondary-foreground">
            My Work
          </div>
          <h2 className="font-headline text-3xl font-bold tracking-tighter text-primary sm:text-4xl md:text-5xl">
            Featured Projects
          </h2>
          <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Here are some of the key projects I&apos;ve worked on, showcasing my skills in building robust and user-friendly applications.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projectsData.map((project) => (
            <Card key={project.title} className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-48 w-full">
                <Image
                  src={project.imageSrc}
                  alt={project.title}
                  layout="fill"
                  objectFit="cover"
                  data-ai-hint={project.imageHint}
                />
              </div>
              <CardHeader>
                <CardTitle className="font-headline text-2xl text-foreground">{project.title}</CardTitle>
                <CardDescription className="text-muted-foreground h-20 overflow-y-auto text-sm">{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <h4 className="mb-2 text-sm font-semibold text-foreground">Technologies Used:</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs bg-secondary/70 text-secondary-foreground">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-start gap-3 border-t pt-4">
                <Button variant="outline" size="sm" asChild className="border-accent text-accent hover:bg-accent/10">
                  <Link href={project.liveDemoUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLinkIcon className="mr-2 h-4 w-4" />
                    Live Demo
                  </Link>
                </Button>
                <Button variant="outline" size="sm" asChild className="border-accent text-accent hover:bg-accent/10">
                  <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <GithubIcon className="mr-2 h-4 w-4" />
                    GitHub
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
