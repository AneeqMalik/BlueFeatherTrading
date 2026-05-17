import { Handshake, ShieldCheck, Factory, Cpu } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Our Partners | KMU Textile Collaboration",
  description: "Discover our reliable collaboration with KMU Textile and how we work together to deliver high-quality knitted garments from Karachi to the world.",
};

export default function PartnersPage() {
  return (
    <div className="py-24 max-w-7xl mx-auto px-6">
      <div className="mb-20 max-w-3xl">
        <div className="text-xs uppercase tracking-[0.25em] text-accent mb-3">
          Our Network
        </div>
        <h1 className="font-display text-5xl md:text-6xl text-foreground leading-[1.05] mb-8">
          Reliable collaboration with <span className="text-accent italic">KMU Textile</span>.
        </h1>
        <p className="text-xl text-muted-foreground leading-relaxed">
          At Blue Feather International, we believe that long-term success is built on trust, consistency, and reliable partnerships. Through our close collaboration with KMU Textile, we deliver high-quality knitted garments that meet international standards.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 mb-24">
        <div className="bg-card border border-border p-10 rounded-3xl">
          <Factory className="size-10 text-accent mb-6" />
          <h3 className="font-display text-3xl mb-4">Manufacturing Excellence</h3>
          <p className="text-muted-foreground leading-relaxed mb-6">
            KMU Textile provides the technical expertise and manufacturing capabilities required to maintain production efficiency and product consistency. Together, we offer a diverse range of apparel tailored to specific client requirements.
          </p>
          <ul className="space-y-3 text-sm font-medium">
            <li className="flex items-center gap-2">✓ Advanced Stitching Units</li>
            <li className="flex items-center gap-2">✓ Strict Quality Control</li>
            <li className="flex items-center gap-2">✓ Dependable Production Timelines</li>
          </ul>
        </div>
        
        <div className="bg-card border border-border p-10 rounded-3xl">
          <Cpu className="size-10 text-accent mb-6" />
          <h3 className="font-display text-3xl mb-4">Streamlined Operations</h3>
          <p className="text-muted-foreground leading-relaxed mb-6">
            By combining our export management and client coordination expertise with KMU Textile&apos;s manufacturing power, we create a seamless experience for brands, wholesalers, and importers worldwide.
          </p>
          <ul className="space-y-3 text-sm font-medium">
            <li className="flex items-center gap-2">✓ Professional Execution</li>
            <li className="flex items-center gap-2">✓ Flexible Manufacturing Solutions</li>
            <li className="flex items-center gap-2">✓ End-to-End Quality Craftsmanship</li>
          </ul>
        </div>
      </div>

      <div className="bg-muted/50 rounded-3xl p-10 md:p-16 text-center border border-border">
        <Handshake className="size-12 text-accent mx-auto mb-6" />
        <h2 className="font-display text-4xl mb-4">Building Lasting Relationships</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
          Our focus remains on building lasting relationships with buyers by ensuring clear communication, honest business practices, and a commitment to customer satisfaction at every stage.
        </p>
        <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-primary/20">
          Partner With Us
        </Link>
      </div>
    </div>
  );
}
