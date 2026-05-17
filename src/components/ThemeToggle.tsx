'use client';

import * as React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="h-8 w-16" />; // Placeholder to prevent layout shift
  }

  const currentTheme = theme === 'system' ? resolvedTheme : theme;

  return (
    <button
      onClick={() => setTheme(currentTheme === 'dark' ? 'light' : 'dark')}
      className="relative inline-flex h-8 w-16 shrink-0 cursor-pointer items-center rounded-full border border-border bg-muted/50 transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
      role="switch"
      aria-checked={currentTheme === 'dark'}
      aria-label="Toggle theme"
    >
      <div className="absolute inset-0 flex items-center justify-between px-2 text-muted-foreground">
        <Sun className="size-3.5" />
        <Moon className="size-3.5" />
      </div>
      <span
        className={`pointer-events-none z-10 flex h-6 w-6 transform items-center justify-center rounded-full bg-background shadow-sm ring-1 ring-border/50 transition-transform duration-300 ${
          currentTheme === 'dark' ? 'translate-x-9' : 'translate-x-1'
        }`}
      >
        {currentTheme === 'dark' ? (
          <Moon className="size-3 text-foreground" />
        ) : (
          <Sun className="size-3 text-foreground" />
        )}
      </span>
    </button>
  );
}
