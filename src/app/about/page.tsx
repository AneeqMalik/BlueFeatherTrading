import { Award, Target, Factory, ArrowRight, ShieldCheck, Globe2 } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "About Us | Blue Feather International Trading",
  description: "Learn about Blue Feather International Trading, our journey from Karachi, Pakistan, and our commitment to quality knitwear exports.",
};

export default function AboutPage() {
  return (
    <div className="py-24 max-w-7xl mx-auto px-6">
      <div className="mb-20 max-w-3xl">
        <div className="text-xs uppercase tracking-[0.25em] text-accent mb-3">
          Our Story
        </div>
        <h1 className="font-display text-5xl md:text-6xl text-foreground leading-[1.05] mb-8">
          Welcome to <span className="text-accent italic">Blue Feather International</span>
        </h1>
        <p className="text-xl text-muted-foreground leading-relaxed">
          Based in Karachi and established in June 2026, Blue Feather International was founded with a vision to make quality apparel more accessible to businesses worldwide. We are driven by a passion for global trade and a goal of delivering premium craftsmanship at competitive prices.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-24">
        <div className="p-8 rounded-2xl bg-muted/30 border border-border">
          <Factory className="size-8 text-accent mb-6" />
          <h3 className="font-display text-2xl mb-4">Strategic Location</h3>
          <p className="text-muted-foreground leading-relaxed">
            Operating from Pakistan’s leading textile hub, we work closely with trusted manufacturing partners to ensure smooth production, reliable quality control, and timely delivery for bulk orders worldwide.
          </p>
        </div>
        <div className="p-8 rounded-2xl bg-muted/30 border border-border">
          <Globe2 className="size-8 text-accent mb-6" />
          <h3 className="font-display text-2xl mb-4">Global Reach</h3>
          <p className="text-muted-foreground leading-relaxed">
            We proudly serve international clients across the United States, Canada, South America, and Europe, while continuing to expand our global reach and business relationships.
          </p>
        </div>
        <div className="p-8 rounded-2xl bg-muted/30 border border-border">
          <ShieldCheck className="size-8 text-accent mb-6" />
          <h3 className="font-display text-2xl mb-4">Our Mission</h3>
          <p className="text-muted-foreground leading-relaxed">
            Our mission is simple — to build long-term partnerships through honesty, professionalism, and customer satisfaction. We believe strong communication and attention to detail are the foundation of success.
          </p>
        </div>
      </div>

      <div className="bg-[#0a192f] text-white rounded-3xl p-10 md:p-16 flex flex-col md:flex-row items-center gap-12 relative overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-accent/10 blur-3xl rounded-full translate-x-1/3"></div>
        <div className="flex-1 relative z-10">
          <h2 className="font-display text-4xl mb-6">Building trust through quality.</h2>
          <p className="text-white/80 text-lg mb-8 max-w-lg">
            At Blue Feather International, we are not only exporting garments — we are building trust, relationships, and a future driven by dedication.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-accent text-accent-foreground font-semibold hover:bg-accent/90 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-accent/20">
            Start an Inquiry <ArrowRight className="size-4" />
          </Link>
        </div>
        <div className="flex-1 w-full relative z-10">
           <div className="aspect-video bg-white/5 border border-white/20 rounded-xl flex flex-col items-center justify-center p-6 text-center text-white/50">
             <Factory className="size-12 mb-4 opacity-20" />
             <p className="text-sm">Specializing in Polos, T-shirts, Hoodies, Shorts, and Sweatshirts.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
