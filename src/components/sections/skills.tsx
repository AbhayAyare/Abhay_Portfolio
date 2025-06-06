
"use client";

import { 
  Code, 
  Server, 
  Network, 
  Flame, 
  Smartphone, 
  Layers, 
  Zap, 
  Wind, 
  GalleryVerticalEnd, 
  Palette,
  FileCode,
  Coffee,
  Box,
  Binary,
  Database,
  DatabaseZap,
  Cloud,
  CloudCog,
  CloudLightning,
  Droplet,
  GitMerge,
  Github,
  Globe2 as EarthIcon, 
  MonitorSmartphone,
  Paintbrush,
  FileJson2,
  Sigma,
  CodeSquare
} from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { cn } from '@/lib/utils';

const newSkillsList = [
  { name: 'ReactJS', icon: <Code className="h-10 w-10" /> },
  { name: 'ExpressJS', icon: <Server className="h-10 w-10" /> },
  { name: 'NodeJS', icon: <Network className="h-10 w-10" /> },
  { name: 'Redux', icon: <Network className="h-10 w-10" /> }, 
  { name: 'Firebase', icon: <Flame className="h-10 w-10" /> },
  { name: 'Android', icon: <Smartphone className="h-10 w-10" /> },
  { name: 'MaterialUI', icon: <Layers className="h-10 w-10" /> },
  { name: 'ChakraUI', icon: <Zap className="h-10 w-10" /> },
  { name: 'TailwindCSS', icon: <Wind className="h-10 w-10" /> },
  { name: 'Bootstrap', icon: <GalleryVerticalEnd className="h-10 w-10" /> },
  { name: 'Sass', icon: <Palette className="h-10 w-10" /> },
  { name: 'HTML5', icon: <FileCode className="h-10 w-10" /> }, 
  { name: 'CSS3', icon: <Paintbrush className="h-10 w-10" /> }, 
  { name: 'JavaScript', icon: <FileJson2 className="h-10 w-10" /> }, 
  { name: 'Java', icon: <Coffee className="h-10 w-10" /> },
  { name: 'Kotlin', icon: <Box className="h-10 w-10" /> }, 
  { name: 'PHP', icon: <FileCode className="h-10 w-10" /> }, 
  { name: 'Python', icon: <CodeSquare className="h-10 w-10" /> },
  { name: 'C++', icon: <Binary className="h-10 w-10" /> },
  { name: 'MongoDB', icon: <Database className="h-10 w-10" /> },
  { name: 'MySQL', icon: <DatabaseZap className="h-10 w-10" /> },
  { name: 'PostgreSQL', icon: <Database className="h-10 w-10" /> }, 
  { name: 'AWS', icon: <Cloud className="h-10 w-10" /> },
  { name: 'Heroku', icon: <CloudCog className="h-10 w-10" /> },
  { name: 'Netlify', icon: <CloudLightning className="h-10 w-10" /> },
  { name: 'DigitalOcean', icon: <Droplet className="h-10 w-10" /> },
  { name: 'JQuery', icon: <Sigma className="h-10 w-10" /> }, 
  { name: 'Git VCS', icon: <GitMerge className="h-10 w-10" /> },
  { name: 'GitHub', icon: <Github className="h-10 w-10" /> },
  { name: 'WordPress', icon: <EarthIcon className="h-10 w-10" /> },
];

export default function SkillsSection() {
  const [sectionRef, isVisible] = useScrollReveal<HTMLElement>({
    threshold: 0.1, 
    triggerOnce: true,
  });

  return (
    <section 
      id="skills"
      ref={sectionRef}
      className={cn(
        "w-full py-16 md:py-24 lg:py-32 bg-primary text-primary-foreground",
        "opacity-0 translate-y-10 transform transition-all duration-700 ease-out",
        isVisible && "opacity-100 translate-y-0"
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl flex items-center">
            <MonitorSmartphone className="h-10 w-10 mr-3 text-primary-foreground" />
            Skills <span className="text-yellow-400 ml-2">& Abilities</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-6">
          {newSkillsList.map((skill, index) => (
            <div 
              key={skill.name} 
              className={cn(
                "bg-black/20 backdrop-blur-sm p-6 rounded-lg flex flex-col items-center justify-center text-center space-y-3 shadow-lg hover:bg-black/30 transition-all duration-300 transform hover:scale-105",
                "opacity-0 translate-y-5", 
                isVisible && "opacity-100 translate-y-0" 
              )}
              style={{ transitionDelay: isVisible ? `${index * 50}ms` : '0ms' }} 
            >
              <div className="text-yellow-400">
                {skill.icon}
              </div>
              <p className="font-medium text-sm md:text-base text-primary-foreground">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
