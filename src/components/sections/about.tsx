
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
              src="/profile_picture.png"
              alt="Abhay Ayare - Profile"
              width={400}
              height={500}
              className="rounded-lg object-cover shadow-xl"
              data-ai-hint="profile picture"
            />
          </div>
          <div className="space-y-6 text-center lg:text-left">
            <h3 className="font-headline text-4xl font-bold text-foreground">I&apos;m Abhay</h3>
            <p className="font-semibold text-xl text-primary">Developer</p>
            <p className="text-muted-foreground md:text-lg/relaxed">
              I&apos;m Abhay Ayare, a B.Tech Electronics & Telecommunication student passionate about AI, ML, and embedded systems. I&apos;ve built innovative projects like an AI-based prosthetic arm and smart CCTV using Python and machine learning. As President of the Matrix Club (ISRO-IIRS), I’ve led tech events and workshops. Skilled in C++, Python, SQL, and tools like Arduino and Git, I thrive on solving real-world problems through tech.
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
                <Link href="/Abhay_Ayare_Resume.jpg" target="_blank" rel="noopener noreferrer">
                  <span>
                    Resume <ChevronRight className="ml-1 h-5 w-5" />
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
