
"use client";

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { UserCircle, ChevronRight } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { cn } from '@/lib/utils';

export default function AboutSection() {
  const [sectionRef, isVisible] = useScrollReveal<HTMLElement>({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <section
      id="about"
      ref={sectionRef}
      className={cn(
        "w-full py-16 md:py-24 lg:py-32 bg-background",
        "opacity-0 translate-y-10 transform transition-all duration-700 ease-out",
        isVisible && "opacity-100 translate-y-0"
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center mb-12">
          <h2 className="font-headline text-3xl font-bold tracking-tighter text-foreground sm:text-4xl md:text-5xl flex items-center">
            <UserCircle className="h-10 w-10 mr-3 text-foreground" />
            About <span className="text-primary ml-2">Me</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center lg:justify-start">
            <Image
              src="https://placehold.co/400x500.png"
              alt="Abhay Ayare"
              width={400}
              height={500}
              className="rounded-lg object-cover shadow-xl"
              data-ai-hint="person portrait"
            />
          </div>
          <div className="space-y-6 text-center lg:text-left">
            <h3 className="font-headline text-4xl font-bold text-foreground">I&apos;m Abhay</h3>
            <p className="font-semibold text-xl text-primary">Developer</p>
            <p className="text-muted-foreground md:text-lg/relaxed">
              I am a developer based in Kolhapur, India. I am passionate about
              improving my coding skills & developing applications & websites. I build
              WebApps and Websites using various technologies. Working for myself to
              improve my skills. Love to build impactful projects.
            </p>
            <div className="space-y-2">
              <p className="text-lg">
                <span className="font-semibold text-primary">Email :</span> <a href="mailto:abhayayare29@gmail.com" className="text-foreground hover:underline">abhayayare29@gmail.com</a>
              </p>
              <p className="text-lg">
                <span className="font-semibold text-primary">Place :</span> <span className="text-foreground">Kolhapur, India - 416012</span>
              </p>
            </div>
            <div className="mt-8 flex justify-center lg:justify-start">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground transition-transform hover:scale-105">
                <Link href="/#contact">
                  <span>
                    Get in Touch <ChevronRight className="ml-1 h-5 w-5" />
                  </span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
