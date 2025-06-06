
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { GraduationCap, Sparkles, Zap } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="about" className="w-full py-16 md:py-24 lg:py-32 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="space-y-6">
            <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm font-medium text-secondary-foreground">
              About Me
            </div>
            <h2 className="font-headline text-3xl font-bold tracking-tighter text-primary sm:text-4xl md:text-5xl">
              A Passionate Developer on a Mission
            </h2>
            <p className="max-w-[700px] text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed">
              Hi, I&apos;m Alex Johnson, a Full-Stack Developer driven by a deep passion for creating impactful digital experiences. I thrive on transforming complex problems into elegant, user-friendly solutions. My journey in tech is fueled by continuous learning and a commitment to excellence.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="flex items-start gap-3">
                <Sparkles className="h-8 w-8 text-accent mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg text-foreground">Specializations</h3>
                  <p className="text-muted-foreground text-sm">
                    I specialize in building modern web applications using technologies like React, Node.js, and Next.js, with a focus on performance and scalability.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <GraduationCap className="h-8 w-8 text-accent mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg text-foreground">Education</h3>
                  <p className="text-muted-foreground text-sm">
                    Bachelor of Engineering in Information Technology, equipping me with a strong foundation in computer science principles.
                  </p>
                </div>
              </div>
            </div>
             <div className="flex items-start gap-3">
                <Zap className="h-8 w-8 text-accent mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg text-foreground">Approach</h3>
                  <p className="text-muted-foreground text-sm">
                    I believe in agile development, collaborative teamwork, and writing clean, maintainable code to deliver high-quality software.
                  </p>
                </div>
              </div>
          </div>
          <div className="flex justify-center">
            <Image
              src="https://placehold.co/500x500.png"
              alt="Developer working"
              width={500}
              height={500}
              className="rounded-xl object-cover shadow-lg transition-transform duration-300 hover:scale-105"
              data-ai-hint="developer workspace"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
