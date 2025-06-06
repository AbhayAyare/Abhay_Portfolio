
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { GraduationCap, Sparkles, Zap } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="about" className="w-full py-16 md:py-24 lg:py-32 bg-background">
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
              Hi, I&apos;m Jigar Sable, a Backend Developer driven by a deep passion for creating robust and scalable digital solutions. I thrive on transforming complex problems into efficient, well-structured systems. My journey in tech is fueled by continuous learning and a commitment to excellence in backend architecture.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="flex items-start gap-3">
                <Sparkles className="h-8 w-8 text-accent mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg text-foreground">Specializations</h3>
                  <p className="text-muted-foreground text-sm">
                    I specialize in backend development using technologies like Node.js, Python (Django/Flask), and building resilient APIs, with a focus on performance and data integrity.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <GraduationCap className="h-8 w-8 text-accent mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg text-foreground">Education</h3>
                  <p className="text-muted-foreground text-sm">
                    Relevant education background that equipped me with strong computer science and software engineering principles.
                  </p>
                </div>
              </div>
            </div>
             <div className="flex items-start gap-3">
                <Zap className="h-8 w-8 text-accent mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg text-foreground">Approach</h3>
                  <p className="text-muted-foreground text-sm">
                    I believe in writing clean, maintainable code, applying best practices in software architecture, and ensuring system reliability and security.
                  </p>
                </div>
              </div>
          </div>
          <div className="flex justify-center">
            <Image
              src="https://placehold.co/500x500.png"
              alt="Jigar Sable working on backend code"
              width={500}
              height={500}
              className="rounded-xl object-cover shadow-lg transition-transform duration-300 hover:scale-105"
              data-ai-hint="developer code"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
