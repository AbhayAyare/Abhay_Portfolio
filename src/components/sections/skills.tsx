
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import AISkillSuggesterForm from '@/components/ai/skill-suggester-form';
import { Code, Server, Database, Tool, Cloud, Palette, MonitorSmartphone, DatabaseZap, GitMerge, Briefcase, Wrench } from 'lucide-react';

const skillsData = [
  {
    category: 'Frontend Development',
    icon: <Palette className="h-6 w-6 text-accent" />,
    skills: ['React', 'Next.js', 'Vue.js', 'HTML5', 'CSS3', 'JavaScript (ES6+)', 'TypeScript', 'Tailwind CSS', 'Redux'],
  },
  {
    category: 'Backend Development',
    icon: <Server className="h-6 w-6 text-accent" />,
    skills: ['Node.js', 'Express.js', 'Python (Django, Flask)', 'Java (Spring Boot)', 'RESTful APIs', 'GraphQL'],
  },
  {
    category: 'Databases',
    icon: <DatabaseZap className="h-6 w-6 text-accent" />,
    skills: ['MongoDB', 'PostgreSQL', 'MySQL', 'Firebase Firestore', 'Redis', 'SQL'],
  },
  {
    category: 'Tools & Version Control',
    icon: <Wrench className="h-6 w-6 text-accent" />,
    skills: ['Git', 'GitHub', 'Docker', 'Kubernetes', 'Webpack', 'Babel', 'Jenkins', 'Jira'],
  },
  {
    category: 'Cloud Platforms',
    icon: <Cloud className="h-6 w-6 text-accent" />,
    skills: ['AWS (EC2, S3, Lambda)', 'Google Cloud Platform (GCP)', 'Microsoft Azure', 'Vercel', 'Netlify'],
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="w-full py-16 md:py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-6 text-center mb-12">
          <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm font-medium text-secondary-foreground">
            My Expertise
          </div>
          <h2 className="font-headline text-3xl font-bold tracking-tighter text-primary sm:text-4xl md:text-5xl">
            Technologies I Work With
          </h2>
          <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            A showcase of my technical skills, ranging from frontend and backend technologies to databases, tools, and cloud platforms.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {skillsData.map((categoryItem) => (
            <Card key={categoryItem.category} className="shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="flex flex-row items-center gap-3 pb-4">
                {categoryItem.icon}
                <CardTitle className="font-headline text-xl text-foreground">{categoryItem.category}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {categoryItem.skills.map((skill) => (
                    <Badge key={skill} variant="outline" className="px-3 py-1 text-sm border-primary/50 text-primary hover:bg-primary/10 transition-colors">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-20">
          <AISkillSuggesterForm />
        </div>
      </div>
    </section>
  );
}
