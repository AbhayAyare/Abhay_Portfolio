
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section id="hero" className="relative w-full min-h-[calc(100vh-5rem)] flex items-center justify-center py-12 md:py-24 lg:py-32 bg-gradient-to-br from-primary/10 via-background to-background">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="flex flex-col justify-center space-y-6 text-left">
            <div className="space-y-4">
              <h1 className="font-headline text-4xl font-bold tracking-tighter text-primary sm:text-5xl md:text-6xl lg:text-7xl">
                Alex Johnson
              </h1>
              <h2 className="font-headline text-2xl font-semibold tracking-tight text-foreground sm:text-3xl md:text-4xl">
                Full-Stack Developer
              </h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl lg:text-lg xl:text-xl">
                Crafting innovative and scalable web solutions with a passion for clean code and user-centric design.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-primary-foreground transition-transform hover:scale-105">
                <Link href="#projects">View My Work</Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="border-primary text-primary hover:bg-primary/10 transition-transform hover:scale-105">
                <Link href="#contact">Get In Touch</Link>
              </Button>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <Image
              src="https://placehold.co/400x400.png"
              alt="Alex Johnson - Profile Picture"
              width={400}
              height={400}
              className="rounded-full object-cover shadow-2xl border-4 border-primary/30"
              priority
              data-ai-hint="professional portrait"
            />
          </div>
        </div>
      </div>
      {/* Subtle background elements for visual appeal */}
      <div className="absolute top-0 left-0 w-32 h-32 md:w-64 md:h-64 bg-accent/10 rounded-full filter blur-3xl opacity-50 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-32 h-32 md:w-64 md:h-64 bg-primary/10 rounded-full filter blur-3xl opacity-50 translate-x-1/2 translate-y-1/2"></div>
    </section>
  );
}
