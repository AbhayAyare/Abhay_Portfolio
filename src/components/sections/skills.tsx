
"use client";

import { 
  CodeSquare, Database, GitMerge, Github, Terminal, Container, Table2, Calculator, Brain, BarChartBig, PieChart, Network, FileCode, Paintbrush, FileJson2, Code, Server, DatabaseZap, Cloud, Layers, Webhook, RefreshCcwDot, Zap, MonitorSmartphone
} from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { cn } from '@/lib/utils';

const newSkillsList = [
  { name: 'Python', icon: <CodeSquare className="h-10 w-10" /> },
  { name: 'SQL', icon: <Database className="h-10 w-10" /> },
  { name: 'Git', icon: <GitMerge className="h-10 w-10" /> },
  { name: 'GitHub', icon: <Github className="h-10 w-10" /> },
  { name: 'Bash', icon: <Terminal className="h-10 w-10" /> },
  { name: 'Docker', icon: <Container className="h-10 w-10" /> },
  { name: 'Pandas', icon: <Table2 className="h-10 w-10" /> },
  { name: 'NumPy', icon: <Calculator className="h-10 w-10" /> },
  { name: 'Scikit-learn', icon: <Brain className="h-10 w-10" /> },
  { name: 'Matplotlib', icon: <BarChartBig className="h-10 w-10" /> },
  { name: 'Seaborn', icon: <PieChart className="h-10 w-10" /> },
  { name: 'DSA', icon: <Network className="h-10 w-10" /> },
  { name: 'HTML', icon: <FileCode className="h-10 w-10" /> },
  { name: 'CSS', icon: <Paintbrush className="h-10 w-10" /> },
  { name: 'JavaScript', icon: <FileJson2 className="h-10 w-10" /> },
  { name: 'React.js', icon: <Code className="h-10 w-10" /> },
  { name: 'Node.js', icon: <Server className="h-10 w-10" /> },
  { name: 'Flask', icon: <Server className="h-10 w-10" /> },
  { name: 'MongoDB', icon: <Database className="h-10 w-10" /> },
  { name: 'MySQL', icon: <DatabaseZap className="h-10 w-10" /> },
  { name: 'REST APIs', icon: <Webhook className="h-10 w-10" /> },
  { name: 'AWS (EC2, S3)', icon: <Cloud className="h-10 w-10" /> },
  { name: 'Terraform', icon: <Layers className="h-10 w-10" /> },
  { name: 'CI/CD', icon: <RefreshCcwDot className="h-10 w-10" /> },
  { name: 'GitHub Actions', icon: <Zap className="h-10 w-10" /> },
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
