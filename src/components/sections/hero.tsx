"use client";

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { LinkedinIcon, GithubIcon, InstagramIcon, CircleArrowDown, KeyboardIcon, BrainIcon } from 'lucide-react';
import { useState, useEffect } from 'react';

const socialLinks = [
  { name: 'LinkedIn', href: '#', icon: <LinkedinIcon className="h-5 w-5" /> },
  { name: 'GitHub', href: '#', icon: <GithubIcon className="h-5 w-5" /> },
  { name: 'Instagram', href: '#', icon: <InstagramIcon className="h-5 w-5" /> },
  { name: 'LeetCode', href: '#', icon: <KeyboardIcon className="h-5 w-5" /> },
  { name: 'Kaggle', href: '#', icon: <BrainIcon className="h-5 w-5" /> },
];

const titlesToAnimate = ["Developer", "Python Expert", "AI Enthusiast", "Problem Solver"];

export default function HeroSection() {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150); // ms

  useEffect(() => {
    const currentTitle = titlesToAnimate[currentTitleIndex];
    const timer = setTimeout(() => {
      if (isDeleting) {
        setDisplayedText(currentTitle.substring(0, displayedText.length - 1));
        setTypingSpeed(75);
      } else {
        setDisplayedText(currentTitle.substring(0, displayedText.length + 1));
        setTypingSpeed(150);
      }

      if (!isDeleting && displayedText === currentTitle) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && displayedText === '') {
        setIsDeleting(false);
        setCurrentTitleIndex((prevIndex) => (prevIndex + 1) % titlesToAnimate.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentTitleIndex, typingSpeed, titlesToAnimate]);


  return (
    <section
      id="hero"
      className="relative w-full min-h-[calc(100vh-5rem)] flex items-center justify-center py-12 md:py-24 lg:py-32 bg-gradient-to-br from-violet-100 via-purple-100 to-indigo-100 overflow-hidden"
    >
      <div
        className="absolute inset-0 h-full w-full animate-hero-dots"
        style={{
          backgroundImage: `
            radial-gradient(rgba(71, 85, 105, 0.25) 0.75px, transparent 0.75px),
            radial-gradient(rgba(71, 85, 105, 0.3) 1px, transparent 1px),
            radial-gradient(rgba(71, 85, 105, 0.35) 1.25px, transparent 1.25px)
          `,
          backgroundSize: `
            32px 32px,
            48px 48px,
            64px 64px
          `,
          backgroundPosition: `
            0 0,
            10px 10px,
            20px 20px
          `,
        }}
      />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="flex flex-col justify-center space-y-8 text-left">
            <div className="space-y-4">
              <h1 className="font-headline text-5xl font-bold tracking-tight text-foreground sm:text-6xl md:text-7xl lg:text-8xl">
                Hi There, <br />
                I&apos;m Abhay <span className="text-orange-500">Ayare</span>
              </h1>
              <h2 className="font-headline text-3xl font-semibold tracking-tight text-foreground sm:text-4xl md:text-5xl">
                I Am Into <span className="text-red-500">{displayedText}</span>
                <span className="inline-block w-1 h-8 sm:h-10 md:h-12 bg-red-500 animate-blink align-bottom ml-1"></span>
              </h2>
            </div>
            <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-primary-foreground transition-transform hover:scale-105 w-fit px-8 py-6 text-lg">
              <Link href="#about">
                <span>
                  About Me <CircleArrowDown className="ml-2 h-5 w-5" />
                </span>
              </Link>
            </Button>
            <div className="flex space-x-3 pt-4">
              {socialLinks.map((social) => (
                <Button key={social.name} variant="outline" size="icon" asChild className="rounded-full border-2 border-primary text-primary hover:bg-primary/10 hover:text-primary transition-all duration-300 transform hover:scale-110 w-12 h-12 bg-background/80 hover:bg-primary/20 backdrop-blur-sm">
                  <Link href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.name}>
                    {social.icon}
                  </Link>
                </Button>
              ))}
            </div>
          </div>
          <div className="flex justify-center items-center mt-8 lg:mt-0">
            <Image
              src="/hero-avatar.png"
              alt="Abhay Ayare - Cartoon Avatar"
              width={450}
              height={450}
              className="rounded-full object-cover shadow-2xl border-4 border-yellow-400 aspect-square"
              unoptimized={true}
              priority
              data-ai-hint="waving avatar"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
