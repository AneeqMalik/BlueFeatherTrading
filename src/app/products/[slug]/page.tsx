import { notFound } from 'next/navigation';
import { getProductBySlug, products } from '@/data/products';
import Link from 'next/link';
import { ArrowLeft, Check, Layers, Settings, Shirt, Ruler, Palette } from 'lucide-react';
import ProductGallery from '@/components/ProductGallery';
import type { Metadata } from 'next';

const colorMap: Record<string, string> = {
  'white': '#ffffff',
  'black': '#171717',
  'jet black': '#0a0a0a',
  'heather grey': '#9ca3af',
  'apple green': '#84cc16',
  'navy blue': '#1e3a8a'
};

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return {
      title: "Product Not Found",
    };
  }

  return {
    title: `${product.title} | Premium Knitwear`,
    description: product.description,
    openGraph: {
      title: `${product.title} | Blue Feather International Trading`,
      description: product.description,
      images: product.images.map(img => ({ url: img })),
    },
  };
}

export default async function ProductPage({ params }: { params: { slug: string } }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return (
    <div className="py-12 md:py-24 max-w-7xl mx-auto px-6">
      <Link href="/products" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-12 transition">
        <ArrowLeft className="size-4" /> Back to Products
      </Link>
      
      <div className="grid lg:grid-cols-2 gap-16">
        <ProductGallery images={product.images} title={product.title} />

        {/* Product Details */}
        <div>
          <div className="text-xs uppercase tracking-[0.25em] text-accent mb-3">
            Knitwear / {product.slug.replace('-', ' ')}
          </div>
          <h1 className="font-display text-4xl md:text-5xl mb-6">{product.title}</h1>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            {product.description}
          </p>
          
          <div className="grid grid-cols-2 gap-x-6 gap-y-8 mb-10 pb-10 border-b border-border">
            <div>
              <div className="flex items-center gap-1.5 text-sm text-muted-foreground mb-2">
                <Layers className="size-4 text-accent" /> Standard GSM
              </div>
              <div className="font-medium text-lg">{product.gsm}</div>
            </div>
            <div>
              <div className="flex items-center gap-1.5 text-sm text-muted-foreground mb-2">
                <Settings className="size-4 text-accent" /> Customization
              </div>
              <div className="font-medium text-lg">Available</div>
            </div>
            <div>
              <div className="flex items-center gap-1.5 text-sm text-muted-foreground mb-2">
                <Shirt className="size-4 text-accent" /> Fits Available
              </div>
              <div className="font-medium text-sm leading-relaxed">{product.fit}</div>
            </div>
            <div>
              <div className="flex items-center gap-1.5 text-sm text-muted-foreground mb-2">
                <Ruler className="size-4 text-accent" /> Size Range
              </div>
              <div className="font-medium text-sm leading-relaxed">{product.sizes}</div>
            </div>
            <div className="col-span-2">
              <div className="flex items-center gap-1.5 text-sm text-muted-foreground mb-3">
                <Palette className="size-4 text-accent" /> Available Colors
              </div>
              <div className="flex flex-wrap gap-2">
                {product.colors.split(/[,/]/).map(c => c.trim()).filter(Boolean).map(color => {
                  const hex = colorMap[color.toLowerCase()];
                  if (color.toLowerCase() === 'etc.') {
                    return <span key={color} className="text-sm flex items-center text-muted-foreground ml-1">and more...</span>;
                  }
                  return (
                    <div key={color} className="flex items-center gap-2 px-3 py-1.5 rounded-md border border-border bg-card text-xs font-medium shadow-sm">
                      {hex ? (
                        <span className="size-3 rounded-full shadow-inner border border-black/10" style={{ backgroundColor: hex }}></span>
                      ) : (
                        <span className="size-3 rounded-full bg-muted border border-border"></span>
                      )}
                      {color}
                    </div>
                  )
                })}
              </div>
            </div>
          </div>

          <div className="mb-10">
            <h3 className="font-display text-xl mb-4">Available Materials</h3>
            <ul className="space-y-3">
              {product.materials.map((material, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Check className="size-5 text-accent shrink-0" />
                  <span>{material}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-12">
            <h3 className="font-display text-xl mb-4">Key Features</h3>
            <ul className="space-y-3">
              {product.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Check className="size-5 text-accent shrink-0" />
                  <span className="text-muted-foreground">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-muted/40 p-8 rounded-xl border border-border">
            <h3 className="font-display text-xl mb-3">Ready for bulk production?</h3>
            <p className="text-sm text-muted-foreground mb-6">
              Contact our sales team for exact pricing, minimum order quantities, and custom sampling.
            </p>
            <Link href="/contact" className="inline-flex w-full justify-center items-center gap-2 px-6 py-4 rounded-full bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-primary/20">
              Request a Quote
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
