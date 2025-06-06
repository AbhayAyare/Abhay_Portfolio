
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Laptop, ArrowRight, Package } from 'lucide-react';

const projectsTop = [
  { name: 'Instagram MERN', imgSrc: 'https://placehold.co/300x200.png?1', imgHint: 'social media app' },
  { name: 'Flipkart MERN', imgSrc: 'https://placehold.co/300x200.png?2', imgHint: 'ecommerce app' },
  { name: 'ResumeGen', imgSrc: 'https://placehold.co/300x200.png?3', imgHint: 'resume builder' },
  { name: 'React-Projects', imgSrc: 'https://placehold.co/300x200.png?4', imgHint: 'react showcase' },
  { name: 'Flipkart PHP', imgSrc: 'https://placehold.co/300x200.png?5', imgHint: 'ecommerce php' },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="w-full py-16 md:py-24 lg:py-32 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
          <Laptop className="h-12 w-12 text-primary-foreground" />
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Projects Made
          </h2>
        </div>

        {/* Top Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-6 gap-y-8 mb-20">
          {projectsTop.map((project) => (
            <div key={project.name} className="bg-card rounded-lg overflow-hidden shadow-xl hover:scale-105 transition-transform duration-300 flex flex-col">
              <div className="relative h-48 w-full">
                <Image
                  src={project.imgSrc}
                  alt={project.name}
                  layout="fill"
                  objectFit="cover"
                  data-ai-hint={project.imgHint}
                />
              </div>
              <div className="bg-yellow-400 p-3 text-center mt-auto">
                <h3 className="font-semibold text-lg text-black">{project.name}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* JavaScript Projects Banner */}
        <div className="bg-background rounded-lg shadow-2xl overflow-hidden mb-20">
          <div className="p-8 grid md:grid-cols-2 gap-8 items-center text-foreground">
            <div className="space-y-4">
              <h3 className="font-headline text-4xl font-bold text-primary">
                Welcome To JavaScript Projects
              </h3>
              <p className="text-muted-foreground text-xl">
                Build A JavaScript Calculator.
              </p>
            </div>
            <div className="flex justify-center md:justify-end">
              <Image
                src="https://placehold.co/350x180.png"
                alt="JavaScript Projects Illustration"
                width={350}
                height={180}
                className="rounded-md object-contain"
                data-ai-hint="javascript code"
              />
            </div>
          </div>
           <div className="bg-yellow-400 text-black font-semibold py-3 px-6 text-center">
            JavaScript Projects Website
          </div>
        </div>
        

        {/* View All Button */}
        <div className="text-center">
          <Button size="lg" asChild className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 transition-transform hover:scale-105 group px-8 py-6 text-lg">
            <Link href="#">
              View All <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
