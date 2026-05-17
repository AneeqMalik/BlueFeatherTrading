'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Menu } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { ThemeToggle } from './ThemeToggle';

export default function Header() {
  const pathname = usePathname();

  const navLinks = [
    { name: 'Home', href: '/', exact: true },
    { name: 'Products', href: '/products' },
    { name: 'Partners', href: '/partners' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link className="flex items-center gap-3" href="/">
          <Image 
            src="/images/logo-B4zLhN4D.jpeg" 
            alt="Blue Feather" 
            width={48} 
            height={48} 
            className="h-12 w-12 rounded-md object-cover"
          />
          <div className="leading-tight">
            <div className="font-display text-lg font-semibold text-primary">Blue Feather</div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">International Trading</div>
          </div>
        </Link>
        <div className="flex items-center gap-6">
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = link.exact 
                ? pathname === link.href 
                : pathname.startsWith(link.href);
              
              return (
                <Link 
                  key={link.name}
                  href={link.href} 
                  className={`text-sm font-medium transition-colors hover:text-accent ${
                    isActive ? 'text-accent' : 'text-foreground'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
            <Link href="/contact" className="px-5 py-2.5 rounded-full bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 transition-all hover:scale-105 active:scale-95 shadow-md shadow-primary/10">
              Inquire
            </Link>
          </nav>
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <button className="md:hidden p-2 text-foreground" aria-label="Menu">
              <Menu className="size-6" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
