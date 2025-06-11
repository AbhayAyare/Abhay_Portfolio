
"use client";

import Image from 'next/image';
import { GraduationCap } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { cn } from '@/lib/utils';

const educationData = [
  {
    degree: 'Bachelor Of Engineering In Electronics and Telecommunication',
    institution: "KIT's College of Engineering Kolhapur",
    period: '2021-2025', 
    status: 'Pursuing', 
    imgSrc: '/KITCOEK.jpeg',
    imgAlt: "KIT's College of Engineering Kolhapur",
    imgHint: 'college building',
  },
  {
    degree: 'HSC Science',
    institution: 'Dr Tanajirao Chorage Industrial Training Institute, Kolhapur',
    period: '2018-2020', 
    status: 'Completed', 
    imgSrc: '/TC.png',
    imgAlt: 'Dr Tanajirao Chorage Industrial Training Institute, Kolhapur',
    imgHint: 'institute building',
  },
];

export default function EducationSection() {
  const [sectionRef, isVisible] = useScrollReveal<HTMLElement>({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <section
      id="education"
      ref={sectionRef}
      className={cn(
        "w-full py-16 md:py-24 lg:py-32 bg-muted",
        "opacity-0 translate-y-10 transform transition-all duration-700 ease-out",
        isVisible && "opacity-100 translate-y-0"
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
          <GraduationCap className="h-12 w-12 text-primary" />
          <h2 className="font-headline text-3xl font-bold tracking-tighter text-primary sm:text-4xl md:text-5xl">
            My Education
          </h2>
          <p className="max-w-xl text-muted-foreground md:text-md lg:text-lg">
            Education Is Not The Learning Of Facts, But The Training Of The Mind To Think.
          </p>
        </div>

        <div className="space-y-12 max-w-4xl mx-auto">
          {educationData.map((edu, index) => (
            <div 
              key={index} 
              className={cn(
                "grid md:grid-cols-3 gap-6 md:gap-8 items-center bg-card p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300",
                "opacity-0 translate-y-5", 
                isVisible && "opacity-100 translate-y-0"
              )}
              style={{ transitionDelay: isVisible ? `${index * 100}ms` : '0ms' }} 
            >
              <div className="md:col-span-1 flex justify-center items-center">
                <Image 
                  src={edu.imgSrc} 
                  alt={edu.imgAlt}
                  width={300} 
                  height={225} 
                  className="rounded-lg object-cover aspect-[4/3] w-full max-w-xs md:max-w-full shadow-md"
                  data-ai-hint={edu.imgHint}
                />
              </div>
              <div className="md:col-span-2 space-y-1 md:space-y-2 text-center md:text-left">
                <h3 className="font-headline text-xl md:text-2xl font-semibold text-primary">{edu.degree}</h3>
                <p className="text-foreground text-sm md:text-base">{edu.institution}</p>
                <p className="text-sm">
                  <span className="text-muted-foreground">{edu.period} | </span>
                  <span className={`${edu.status.toLowerCase() === 'pursuing' || edu.status.toLowerCase() === 'completed' ? 'text-green-600' : 'text-muted-foreground'} font-semibold`}>
                    {edu.status}
                  </span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

