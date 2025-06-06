
"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { MenuIcon, Briefcase, User, Code, Mail, HomeIcon, MountainIcon } from 'lucide-react';

const navLinks = [
  { href: '#hero', label: 'Home', icon: <HomeIcon className="h-5 w-5" /> },
  { href: '#about', label: 'About', icon: <User className="h-5 w-5" /> },
  { href: '#skills', label: 'Skills', icon: <Code className="h-5 w-5" /> },
  { href: '#projects', label: 'Projects', icon: <Briefcase className="h-5 w-5" /> },
  { href: '#contact', label: 'Contact', icon: <Mail className="h-5 w-5" /> },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      let currentSection = '';
      navLinks.forEach(link => {
        const sectionId = link.href.substring(1);
        const section = document.getElementById(sectionId);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            currentSection = sectionId;
          }
        }
      });
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const NavLinkItems = ({ isMobile = false, onLinkClick }: { isMobile?: boolean, onLinkClick?: () => void }) => (
    <>
      {navLinks.map((link) => (
        <Button
          key={link.href}
          variant="ghost"
          asChild
          className={`transition-colors ${
            activeSection === link.href.substring(1)
              ? 'text-primary' // Highlight active link with primary color
              : 'text-foreground hover:text-primary'
          } ${isMobile ? 'w-full justify-start text-lg py-3' : 'text-sm'}`}
        >
          <Link href={link.href} onClick={onLinkClick}>
            {isMobile && <span className="mr-2">{link.icon}</span>}
            {link.label}
          </Link>
        </Button>
      ))}
    </>
  );

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ease-in-out ${
        isScrolled ? 'bg-card shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <Link href="#hero" className="flex items-center gap-2">
          <MountainIcon className="h-7 w-7 text-primary" />
          <span className="text-xl font-bold font-headline text-primary">Devfolio Pro</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden space-x-2 md:flex">
          <NavLinkItems />
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <MenuIcon className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-xs bg-card p-6">
              <div className="mb-6 flex items-center justify-between">
                 <Link href="#hero" className="flex items-center gap-2">
                    <MountainIcon className="h-7 w-7 text-primary" />
                    <span className="text-xl font-bold font-headline text-primary">Devfolio Pro</span>
                  </Link>
                <SheetClose asChild>
                   <Button variant="ghost" size="icon">
                    <MenuIcon className="h-6 w-6 rotate-90" /> {/* Using MenuIcon and rotating to simulate close, or use XIcon */}
                  </Button>
                </SheetClose>
              </div>
              <nav className="flex flex-col space-y-3">
                <NavLinkItems isMobile={true} onLinkClick={() => {
                  // Close sheet on link click - SheetClose can be used around each link or a state to control open can be passed
                  // For simplicity, this example relies on manual close or SheetClose around links if needed.
                }} />
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
