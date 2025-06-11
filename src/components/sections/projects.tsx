
"use client";

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Laptop, ArrowRight } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { cn } from '@/lib/utils';

const projectsTop = [
  {
    name: 'AI Based Prosthetic Arm',
    description: 'Developed an advanced prosthetic arm utilizing EMG sensors integrated with machine learning techniques. Developed a cost-effective prosthetic arm for individuals with disabilities. Utilised different body signal(EMG,ECG,EEG signals) to optimize application. Technologies used: Python, ANN, Arduino UNO, Machine Learning, Fusion365, 3D Printer and basic IOT.',
    imgSrc: 'https://placehold.co/300x200.png?proj1',
    imgHint: 'robotic arm',
  },
  {
    name: 'Smart CCTV',
    description: 'Engineered a Smart CCTV project using computer vision and ML algorithms. To accurately record in/out counts of hostel students. Automated alert mailing system for hostel authority. Technology Used: Python, Image Processing, YOLO, Tkinter, Computer Vision.',
    imgSrc: 'https://placehold.co/300x200.png?proj2',
    imgHint: 'security camera',
  },
  {
    name: 'Quiz Builder and Solver',
    description: 'A Quiz Builder App is a software tool designed to create, manage and administer quizzes or tests. Developed a classic Quiz Builder App using Python. Implemented a graphical user interface for the App.',
    imgSrc: 'https://placehold.co/300x200.png?proj3',
    imgHint: 'quiz interface',
  },
  {
    name: 'AI ChatBot',
    description: 'AI is a sleek, modern chat interface that connects to a local AI backend server (like Ollama with LLaMA 3). It supports chatting with an AI assistant featuring a smooth typing effect, dynamic bot name changes, and a toggleable dark/light theme.',
    imgSrc: 'https://placehold.co/300x200.png?proj4',
    imgHint: 'chat interface',
    link: 'https://github.com/AbhayAyare/ChatBot',
  },
  {
    name: 'Portfolio Webpage',
    description: 'This portfolio Webpage showcases my skills and projects, built with Next.js and Tailwind CSS.',
    imgSrc: 'https://placehold.co/300x200.png?proj5',
    imgHint: 'web design',
  },
  {
    name: 'Matrix Astronomy Club',
    description: 'Built a full-stack app using Next.js 15, React, and Firebase (Auth, Firestore). Developed a secure admin panel with full CRUD for events, gallery, and site content. Designed a dynamic public site with static export + client-side data fetching for performance and freshness. Implemented responsive UI with Tailwind CSS and ShadCN UI. Automated deployment via GitHub Actions to Firebase Hosting.',
    imgSrc: 'https://placehold.co/300x200.png?proj6',
    imgHint: 'space telescope',
    link: 'https://matrix-astronomy-hub.web.app',
  },
];

const ProjectCardContent = ({ project }: { project: (typeof projectsTop)[0] }) => (
  <>
    <div className="relative h-48 w-full overflow-hidden">
      <Image
        src={project.imgSrc}
        alt={project.name}
        layout="fill"
        objectFit="cover"
        className="group-hover:scale-105 transition-transform duration-300"
        data-ai-hint={project.imgHint}
      />
    </div>
    <div className="p-4 flex flex-col flex-grow">
      <h3 className="font-headline text-xl font-semibold text-primary mb-2 group-hover:text-primary/90 transition-colors">
        {project.name}
      </h3>
      <p className="text-sm text-muted-foreground leading-relaxed text-left flex-grow">
        {project.description}
      </p>
    </div>
  </>
);


export default function ProjectsSection() {
  const [sectionRef, isVisible] = useScrollReveal<HTMLElement>({
    threshold: 0.05, 
    triggerOnce: true,
  });
  const [bannerRef, isBannerVisible] = useScrollReveal<HTMLDivElement>({
    threshold: 0.2,
    triggerOnce: true,
    delay: 200,
  });

  return (
    <section
      id="projects"
      ref={sectionRef}
      className={cn(
        "w-full py-16 md:py-24 lg:py-32 bg-muted", // Changed background to muted for better card contrast
        "opacity-0 translate-y-10 transform transition-all duration-700 ease-out",
        isVisible && "opacity-100 translate-y-0"
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
          <Laptop className="h-12 w-12 text-primary" /> 
          <h2 className="font-headline text-3xl font-bold tracking-tighter text-primary sm:text-4xl md:text-5xl">
            Projects Made
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-8 mb-20">
          {projectsTop.map((project, index) => {
            const cardClasses = cn(
              "bg-card rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col group", // Removed hover:scale-105, added group for image zoom
              "opacity-0 translate-y-5",
              isVisible && "opacity-100 translate-y-0"
            );

            const cardStyle = { transitionDelay: isVisible ? `${index * 100}ms` : '0ms' };

            return project.link ? (
              <Link
                key={project.name}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className={cardClasses}
                style={cardStyle}
              >
                <ProjectCardContent project={project} />
              </Link>
            ) : (
              <div
                key={project.name}
                className={cardClasses}
                style={cardStyle}
              >
                <ProjectCardContent project={project} />
              </div>
            );
          })}
        </div>

        <div
          ref={bannerRef}
          className={cn(
            "bg-card rounded-lg shadow-2xl overflow-hidden mb-20", // Changed to bg-card from bg-background
            "opacity-0 translate-y-10 transform transition-all duration-700 ease-out",
            isBannerVisible && "opacity-100 translate-y-0"
          )}
        >
          <div className="p-8 grid md:grid-cols-2 gap-8 items-center text-card-foreground">
            <div className="space-y-4">
              <h3 className="font-headline text-4xl font-bold text-primary">
                Explore More on GitHub
              </h3>
              <p className="text-muted-foreground text-xl">
                Check out my GitHub profile for more projects and contributions.
              </p>
            </div>
            <div className="flex justify-center md:justify-end">
              <Image
                src="https://placehold.co/350x180.png" 
                alt="GitHub Profile Illustration"
                width={350}
                height={180}
                className="rounded-md object-contain"
                data-ai-hint="github logo"
              />
            </div>
          </div>
           <div className="bg-primary text-primary-foreground font-semibold py-3 px-6 text-center"> {/* Changed to primary */}
            <Link href="https://github.com/AbhayAyare" target="_blank" rel="noopener noreferrer" className="hover:underline">
                Visit AbhayAyare on GitHub
            </Link>
          </div>
        </div>

        <div className="text-center">
          <Button size="lg" asChild className="bg-primary text-primary-foreground hover:bg-primary/90 transition-transform hover:scale-105 group px-8 py-6 text-lg">
            <Link href="https://github.com/AbhayAyare?tab=repositories" target="_blank" rel="noopener noreferrer">
              <span>
                View All Repositories <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
