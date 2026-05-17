import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { products } from '@/data/products';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Our Collection | Premium Knitwear Catalog",
  description: "Browse our catalog of export-grade knit garments including polos, t-shirts, hoodies, and sweatshirts. Full customization available for bulk orders.",
};

export default function ProductsPage() {
  return (
    <div className="py-24 max-w-7xl mx-auto px-6">
      <div className="mb-16">
        <div className="text-xs uppercase tracking-[0.25em] text-accent mb-3">
          Our Catalog
        </div>
        <h1 className="font-display text-5xl md:text-6xl text-foreground leading-[1.05] mb-6">
          Premium <span className="text-accent italic">Knitwear</span> Collection
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl">
          Explore our range of export-grade knit garments. Each product can be fully customized for bulk orders, including fabric blend, GSM, colors, and branding.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((item, i) => {
          const gradients = [
            "from-[#1a2e4a] via-[#2c4a6e] to-[#dca65a]",
            "from-[#0f1f33] via-[#3b5570] to-[#c9a063]",
            "from-[#1d2a3a] via-[#445872] to-[#e0b577]",
            "from-[#101c2e] via-[#2b3e5a] to-[#b88a4a]"
          ];
          const gradient = gradients[i % gradients.length];
          
          return (
            <Link
              key={item.id}
              href={`/products/${item.slug}`}
              className="group relative overflow-hidden rounded-xl border border-border bg-card hover:shadow-2xl transition-all duration-500 flex flex-col h-full"
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-muted">
                {item.images.length > 0 ? (
                  <Image
                    src={item.images[0]}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                ) : null}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${gradient} mix-blend-multiply opacity-60 transition-opacity duration-700 group-hover:opacity-80`}
                ></div>
                
                <div className="absolute inset-0 flex items-end p-6 z-10">
                  <div className="text-white drop-shadow-md">
                    <div className="text-xs uppercase tracking-[0.25em] text-white/90 mb-1">
                      Knitwear
                    </div>
                    <div className="font-display text-2xl">{item.title}</div>
                  </div>
                </div>
                <div className="absolute top-4 right-4 size-10 rounded-full bg-white/20 backdrop-blur flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition z-10">
                  <ArrowUpRight className="size-5" />
                </div>
              </div>
              <div className="p-5 flex-1 flex flex-col">
                <p className="text-sm text-muted-foreground mb-4 flex-1 line-clamp-2">
                  {item.description}
                </p>
                <div className="flex justify-between text-xs mt-auto pt-4 border-t border-border">
                  <span className="text-muted-foreground">GSM {item.gsm}</span>
                  <span className="text-accent font-medium">View specs →</span>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
