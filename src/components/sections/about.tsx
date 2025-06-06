
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { UserCircle, ChevronRight } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="about" className="w-full py-16 md:py-24 lg:py-32 bg-background">
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
              alt="Jigar Sable"
              width={400}
              height={500}
              className="rounded-lg object-cover shadow-xl"
              data-ai-hint="person portrait"
            />
          </div>
          <div className="space-y-6 text-center lg:text-left">
            <h3 className="font-headline text-4xl font-bold text-foreground">I&apos;m Jigar</h3>
            <p className="font-semibold text-xl text-primary">Full Stack Developer</p>
            <p className="text-muted-foreground md:text-lg/relaxed">
              I am a Full-Stack developer based in Pune, India. I am an Information
              Technology undergraduate from SPPU. I am very passionate about
              improving my coding skills & developing applications & websites. I build
              WebApps and Websites using MERN Stack. Working for myself to
              improve my skills. Love to build Full-Stack clones.
            </p>
            <div className="space-y-2">
              <p className="text-lg">
                <span className="font-semibold text-primary">Email :</span> <a href="mailto:jigarsable21@gmail.com" className="text-foreground hover:underline">jigarsable21@gmail.com</a>
              </p>
              <p className="text-lg">
                <span className="font-semibold text-primary">Place :</span> <span className="text-foreground">Pune, India - 412206</span>
              </p>
            </div>
            <div className="mt-8 flex justify-center lg:justify-start">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground transition-transform hover:scale-105">
                <Link href="/jigar-sable-resume.pdf" target="_blank" rel="noopener noreferrer">
                  Resume <ChevronRight className="ml-1 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
