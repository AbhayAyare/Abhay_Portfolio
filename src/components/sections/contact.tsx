
"use client";

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { MailIcon, LinkedinIcon, GithubIcon, MapPinIcon, Send } from 'lucide-react';
import Link from 'next/link';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { cn } from '@/lib/utils';

export default function ContactSection() {
  const [sectionRef, isVisible] = useScrollReveal<HTMLElement>({
    threshold: 0.1,
    triggerOnce: true,
  });
  const [card1Ref, isCard1Visible] = useScrollReveal<HTMLDivElement>({ threshold: 0.2, delay: 100, triggerOnce: true });
  const [card2Ref, isCard2Visible] = useScrollReveal<HTMLDivElement>({ threshold: 0.2, delay: 200, triggerOnce: true });


  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Actual form submission logic would go here (e.g., API call)
    alert('Form submitted (placeholder)!');
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className={cn(
        "w-full py-16 md:py-24 lg:py-32 bg-background",
        "opacity-0 translate-y-10 transform transition-all duration-700 ease-out",
        isVisible && "opacity-100 translate-y-0"
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-6 text-center mb-12">
          <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm font-medium text-secondary-foreground">
            Get In Touch
          </div>
          <h2 className="font-headline text-3xl font-bold tracking-tighter text-primary sm:text-4xl md:text-5xl">
            Let&apos;s Connect
          </h2>
          <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Feel free to reach out!
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          <Card 
            ref={card1Ref}
            className={cn(
              "shadow-lg bg-card",
              "opacity-0 translate-y-10 transform transition-all duration-700 ease-out",
              isCard1Visible && "opacity-100 translate-y-0"
            )}
          >
            <CardHeader>
              <CardTitle className="font-headline text-2xl text-card-foreground">Contact Information</CardTitle>
              <CardDescription className="text-muted-foreground">Find me through the following channels or drop a message using the form.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center gap-3">
                <MailIcon className="h-6 w-6 text-accent" />
                <Link href="mailto:abhayayare29@gmail.com" className="text-card-foreground hover:text-primary transition-colors">
                  abhayayare29@gmail.com
                </Link>
              </div>
              <div className="flex items-center gap-3">
                <LinkedinIcon className="h-6 w-6 text-accent" />
                <Link href="https://linkedin.com/in/abhay-ayare" target="_blank" rel="noopener noreferrer" className="text-card-foreground hover:text-primary transition-colors">
                  LinkedIn Profile
                </Link>
              </div>
              <div className="flex items-center gap-3">
                <GithubIcon className="h-6 w-6 text-accent" />
                <Link href="https://github.com/AbhayAyare" target="_blank" rel="noopener noreferrer" className="text-card-foreground hover:text-primary transition-colors">
                  GitHub Profile
                </Link>
              </div>
              <div className="flex items-center gap-3">
                <MapPinIcon className="h-6 w-6 text-accent" />
                <span className="text-card-foreground">Kolhapur, India</span>
              </div>
            </CardContent>
          </Card>

          <Card 
            ref={card2Ref}
            className={cn(
              "shadow-lg bg-card",
              "opacity-0 translate-y-10 transform transition-all duration-700 ease-out",
              isCard2Visible && "opacity-100 translate-y-0"
            )}
          >
            <CardHeader>
              <CardTitle className="font-headline text-2xl text-card-foreground">Send a Message</CardTitle>
              <CardDescription className="text-muted-foreground">Use this form to get in touch quickly.</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-card-foreground">Name</Label>
                    <Input id="name" placeholder="Your Name" required className="bg-input text-foreground"/>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-card-foreground">Email</Label>
                    <Input id="email" type="email" placeholder="your.email@example.com" required  className="bg-input text-foreground"/>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-card-foreground">Subject</Label>
                  <Input id="subject" placeholder="Subject of your message" required className="bg-input text-foreground"/>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-card-foreground">Message</Label>
                  <Textarea id="message" placeholder="Your message..." rows={5} required className="min-h-[120px] bg-input text-foreground"/>
                </div>
                <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
