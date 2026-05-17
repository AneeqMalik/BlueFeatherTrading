import Image from 'next/image';
import { MapPin, Mail, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#1a2333] text-white mt-24">
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3 mb-4">
            <Image 
              src="/images/logo-B4zLhN4D.jpeg" 
              alt="Blue Feather" 
              width={48} 
              height={48} 
              className="h-12 w-12 rounded-md"
            />
            <div>
              <div className="font-display text-xl">Blue Feather</div>
              <div className="text-xs uppercase tracking-widest text-accent">Precision in Knitwear</div>
            </div>
          </div>
          <p className="text-sm text-white/70 max-w-md">
            Premium knit garments crafted in Pakistan&apos;s leading textile hub, exported worldwide with reliability and care.
          </p>
        </div>
        <div>
          <h4 className="font-display text-lg mb-4 text-accent">Contact</h4>
          <ul className="space-y-2 text-sm text-white/80">
            <li className="flex gap-2 items-start">
              <MapPin className="size-4 mt-0.5 text-accent" /> Karachi, Pakistan
            </li>
            <li className="flex gap-2 items-start">
              <Mail className="size-4 mt-0.5 text-accent" /> info@bluefeathertrading.com
            </li>
            <li className="flex gap-2 items-start">
              <Phone className="size-4 mt-0.5 text-accent" /> +92 321 2345678
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-display text-lg mb-4 text-accent">Quick Links</h4>
          <ul className="space-y-2 text-sm text-white/80">
            <li><a href="/products" className="hover:text-accent transition">Products</a></li>
            <li><a href="/partners" className="hover:text-accent transition">Partners</a></li>
            <li><a href="/about" className="hover:text-accent transition">About Us</a></li>
            <li><a href="/contact" className="hover:text-accent transition">Contact</a></li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 py-8 border-t border-white/10 text-center text-xs text-white/50">
        © {new Date().getFullYear()} Blue Feather International Trading. All rights reserved.
      </div>
    </footer>
  );
}
