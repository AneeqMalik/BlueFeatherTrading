import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Leaf, Award, Truck, Earth, ArrowUpRight } from 'lucide-react';
import { products } from '@/data/products';
import FaqSection from '@/components/FaqSection';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Blue Feather International Trading | Bulk Knitwear Export from Karachi",
  description: "Blue Feather International Trading specializes in high-quality knitwear manufacturing and export. Premium polos, t-shirts, and hoodies from Karachi to the world.",
};

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden bg-[#0a192f]">
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: `
              radial-gradient(
                circle at 20% 20%,
                oklch(0.7 0.12 250 / 0.15),
                transparent 40%
              ),
              radial-gradient(
                circle at 80% 70%,
                oklch(0.4 0.05 250 / 0.2),
                transparent 50%
              )
            `
          }}
        ></div>
        <div className="relative max-w-7xl mx-auto px-6 py-28 md:py-48">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-accent/30 text-xs uppercase tracking-[0.2em] text-accent mb-8 bg-accent/5 backdrop-blur-sm">
              <span className="size-1.5 rounded-full bg-accent animate-pulse"></span> Established 2026 · Karachi
            </div>
            <h1 className="font-display text-5xl md:text-8xl text-white leading-[1.05] mb-8 tracking-tight">
              Precision in <span className="text-accent italic">Knitwear</span>
            </h1>
            <p className="text-lg md:text-2xl text-white/80 max-w-2xl mb-12 leading-relaxed font-light">
              Blue Feather International Trading crafts perfectly tailored knit garments with premium materials — delivered at prices that make sense for your business.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/products"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-accent text-accent-foreground font-semibold hover:bg-accent/90 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-accent/20"
              >
                Browse Collection <ArrowRight className="size-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-white/20 text-white hover:bg-white/10 transition-all backdrop-blur-sm font-medium"
              >
                Request a Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-muted/40">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-end mb-12">
            <div>
              <div className="text-xs uppercase tracking-[0.25em] text-accent mb-3">
                Materials
              </div>
              <h2 className="font-display text-4xl md:text-5xl">
                Fibres engineered for export-grade quality.
              </h2>
            </div>
            <p className="text-muted-foreground">
              Every garment we ship begins with carefully selected fibres. We work
              with cotton, polyester, and premium blends sourced through trusted
              mills to deliver a consistent product, batch after batch.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "100% Cotton", desc: "Soft, breathable, naturally durable. Ideal for everyday comfort and premium feel.", num: "01" },
              { title: "Cotton-Polyester Blend", desc: "The best of both — comfort with shape retention, color longevity, and reduced shrinkage.", num: "02" },
              { title: "Polyester Performance", desc: "Lightweight, fast-drying, built to handle high-volume use without compromise.", num: "03" }
            ].map((item, i) => (
              <div
                key={i}
                className="p-8 rounded-xl border border-border bg-card hover:border-accent/60 transition"
              >
                <div className="text-accent font-display text-3xl mb-3">{item.num}</div>
                <h3 className="font-display text-xl mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-end mb-10 flex-wrap gap-4">
            <div>
              <div className="text-xs uppercase tracking-[0.25em] text-accent mb-3">
                Collection
              </div>
              <h2 className="font-display text-4xl md:text-5xl">Our knitwear range.</h2>
            </div>
            <Link
              href="/products"
              className="text-sm font-medium text-accent hover:underline inline-flex items-center gap-1"
            >
              View all <ArrowRight className="size-4" />
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.slice(0, 4).map((item, i) => {
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
                  className="group relative overflow-hidden rounded-xl border border-border bg-card hover:shadow-2xl transition-all duration-500"
                >
                  <div className="relative aspect-[4/5] overflow-hidden">
                    {item.images.length > 0 && (
                      <Image
                        src={item.images[0]}
                        alt={item.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    )}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${gradient} transition-transform duration-700 group-hover:scale-110 ${item.images.length > 0 ? 'mix-blend-multiply opacity-60 group-hover:opacity-80' : ''}`}
                    ></div>
                    <div className="absolute inset-0 flex items-end p-6">
                      <div className="text-white drop-shadow-md">
                        <div className="text-xs uppercase tracking-[0.25em] text-white/70 mb-1">
                          Knitwear
                        </div>
                        <div className="font-display text-2xl">{item.title}</div>
                      </div>
                    </div>
                    <div className="absolute top-4 right-4 size-10 rounded-full bg-white/15 backdrop-blur flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition z-10">
                      <ArrowUpRight className="size-5" />
                    </div>
                  </div>
                  <div className="p-5">
                    <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                      {item.description}
                    </p>
                    <div className="flex justify-between text-xs">
                      <span className="text-muted-foreground">GSM {item.gsm}</span>
                      <span className="text-accent font-medium">View details →</span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#0a192f] text-white relative overflow-hidden">
        <div className="absolute -right-20 -top-20 size-96 rounded-full bg-accent/10 blur-3xl"></div>
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative">
          <div>
            <Leaf className="size-10 text-accent mb-4" />
            <h2 className="font-display text-4xl md:text-5xl mb-6">
              Considered. Responsible. Built to last.
            </h2>
            <p className="text-white/75 leading-relaxed mb-4">
              We partner with manufacturing facilities that respect both their craft
              and the environment. Lower waste, ethical labor, and durable garments
              that aren&apos;t designed to be replaced next season.
            </p>
            <p className="text-white/75 leading-relaxed">
              Quality is our most sustainable feature.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: Leaf, text: "Eco-conscious sourcing" },
              { icon: Award, text: "Premium quality control" },
              { icon: Truck, text: "Reliable bulk delivery" },
              { icon: Earth, text: "Trusted by global buyers" }
            ].map((item, i) => (
              <div
                key={i}
                className="p-6 rounded-xl border border-white/15 bg-white/5"
              >
                <item.icon className="size-6 text-accent mb-3" />
                <div className="text-sm">{item.text}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <Earth className="size-10 text-accent mx-auto mb-4" />
          <h2 className="font-display text-4xl md:text-5xl mb-4">
            Shipping worldwide.
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            We proudly serve clients across the United States, Canada, South
            America, and Europe — and we&apos;re growing every year.
          </p>
          <div className="flex flex-wrap justify-center gap-3 text-sm">
            {["United States", "Canada", "South America", "Europe", "Middle East", "Asia-Pacific"].map((region, i) => (
              <span key={i} className="px-4 py-2 rounded-full border border-border bg-card">
                {region}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-muted/40">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="text-xs uppercase tracking-[0.25em] text-accent mb-3">
              FAQ
            </div>
            <h2 className="font-display text-4xl md:text-5xl">How orders work.</h2>
          </div>
          <FaqSection />
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="rounded-2xl bg-[#0a192f] text-white p-12 md:p-16 text-center relative overflow-hidden shadow-2xl">
            <div
              className="absolute inset-0 opacity-30"
              style={{
                backgroundImage: `radial-gradient(
                  circle at 70% 30%,
                  oklch(0.78 0.14 75 / 0.5),
                  transparent 50%
                )`
              }}
            ></div>
            <div className="relative">
              <h2 className="font-display text-4xl md:text-5xl mb-4">
                Let&apos;s craft your next order.
              </h2>
              <p className="text-white/80 mb-8 max-w-xl mx-auto">
                From samples to bulk export, we&apos;ll guide you through every step.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-accent text-accent-foreground font-semibold hover:bg-accent/90 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-accent/20"
              >
                Start an Inquiry <ArrowRight className="size-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
