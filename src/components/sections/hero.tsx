
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { LinkedinIcon, GithubIcon, TwitterIcon, Send, InstagramIcon, Code2Icon, CircleArrowDown } from 'lucide-react';

const socialLinks = [
  { name: 'LinkedIn', href: '#', icon: <LinkedinIcon className="h-5 w-5" /> },
  { name: 'GitHub', href: '#', icon: <GithubIcon className="h-5 w-5" /> },
  { name: 'Twitter', href: '#', icon: <TwitterIcon className="h-5 w-5" /> },
  { name: 'Telegram', href: '#', icon: <Send className="h-5 w-5" /> },
  { name: 'Instagram', href: '#', icon: <InstagramIcon className="h-5 w-5" /> },
  { name: 'DEV', href: '#', icon: <Code2Icon className="h-5 w-5" /> },
];

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative w-full min-h-[calc(100vh-5rem)] flex items-center justify-center py-12 md:py-24 lg:py-32
                 bg-gradient-to-br from-violet-100 via-purple-100 to-indigo-100 overflow-hidden"
    >
      {/* Animated Background Layers Container */}
      <div
        className="absolute inset-0 -z-10 h-full w-full"
      >
        {/* Layer 1: Dots */}
        <div className="absolute inset-0 h-full w-full
                       bg-[radial-gradient(rgba(0,0,0,0.5)_1.5px,transparent_1.5px)]
                       [background-size:32px_32px]">
        </div>
        {/* Layer 2: Lines type 1 */}
        <div className="absolute inset-0 h-full w-full
                       bg-[repeating-linear-gradient(45deg,rgba(0,0,0,0.3)_0,rgba(0,0,0,0.3)_1.5px,transparent_1.5px,transparent_32px)]">
        </div>
        {/* Layer 3: Lines type 2 */}
        <div className="absolute inset-0 h-full w-full
                       bg-[repeating-linear-gradient(-45deg,rgba(0,0,0,0.3)_0,rgba(0,0,0,0.3)_1.5px,transparent_1.5px,transparent_32px)]">
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="flex flex-col justify-center space-y-8 text-left">
            <div className="space-y-4">
              <h1 className="font-headline text-5xl font-bold tracking-tight text-foreground sm:text-6xl md:text-7xl lg:text-8xl">
                Hi There, <br />
                I&apos;m Jigar <span className="text-orange-500">Sable</span>
              </h1>
              <h2 className="font-headline text-3xl font-semibold tracking-tight text-foreground sm:text-4xl md:text-5xl">
                I Am Into <span className="text-red-500">Backend Dev</span>
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
                <Button key={social.name} variant="outline" size="icon" asChild className="rounded-full border-2 border-primary text-primary hover:bg-primary/10 hover:text-primary transition-all duration-300 transform hover:scale-110 w-12 h-12 bg-background/50 hover:bg-primary/20">
                  <Link href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.name}>
                    {social.icon}
                  </Link>
                </Button>
              ))}
            </div>
          </div>
          <div className="flex justify-center items-center mt-8 lg:mt-0">
            <Image
              src="https://placehold.co/450x450.png"
              alt="Jigar Sable - Cartoon Avatar"
              width={450}
              height={450}
              className="rounded-full object-cover shadow-2xl border-4 border-yellow-400 aspect-square"
              priority
              data-ai-hint="cartoon avatar developer"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
