export type Product = {
  id: string;
  slug: string;
  title: string;
  description: string;
  gsm: string;
  features: string[];
  materials: string[];
  fit: string;
  sizes: string;
  colors: string;
  driveLink: string;
  images: string[];
};

export const products: Product[] = [
  {
    id: '1',
    slug: 'classic-polo',
    title: 'Classic Polo T-Shirt',
    description: 'Pique knit refinement for everyday excellence. Available in various fits and USA standard sizes, our polos feature high-quality fabric composition and customizable embroidery options.',
    gsm: '180-260',
    fit: 'Regular Fit / Slim Fit / Modern Fit',
    sizes: 'S, M, L, XL, XXL (USA standard sizes)',
    colors: 'White, Black, Heather Grey, Apple Green, Navy Blue, etc.',
    features: ['Pique Knit Fabric', 'Printing & embroidery options (Customizable)', 'Wash and shrinkage tested'],
    materials: ['100% Cotton', 'Cotton Polyester Blend'],
    driveLink: 'https://drive.google.com/drive/folders/1tHsLAIvnpku12KHf09oURzrCUljiYWTF',
    images: [
      '/images/products/classic-polo/1.jpg',
      '/images/products/classic-polo/2.jpg',
      '/images/products/classic-polo/3.jpg',
      '/images/products/classic-polo/4.jpg',
      '/images/products/classic-polo/5.jpg',
    ]
  },
  {
    id: '2',
    slug: 'shorts',
    title: 'Performance Shorts',
    description: 'Comfort engineered for movement. Our shorts are crafted from premium breathable materials with durable stitching, making them perfect for export-quality athletic or casual wear.',
    gsm: '180 – 300',
    fit: 'Regular / Relaxed / Oversized',
    sizes: 'XS / S / M / L / XL / XXL',
    colors: 'Jet Black / Heather Grey',
    features: ['Elastic waistband', 'Soft premium fabric', 'Breathable material', 'Durable stitching', 'Export Quality', 'Printing & embroidery (customizable)'],
    materials: ['Single Jersey', 'French Terry', 'Fleece (Cotton Polyester Blend)'],
    driveLink: 'https://drive.google.com/drive/folders/1FO6C8ZNMmOwlIVN_GJwVXoRuWOBwC1-K',
    images: [
      '/images/products/shorts/1.jpg',
      '/images/products/shorts/2.jpg',
    ]
  },
  {
    id: '3',
    slug: 'basic-tshirt',
    title: 'Basic T-Shirt',
    description: 'The essential, perfected. Featuring a soft hand feel and breathable Single Jersey fabric, our basic t-shirts are pre-shrunk and built to export quality standards.',
    gsm: '140-220',
    fit: 'Regular / Slim / Oversized / Boxy',
    sizes: 'XS / S / M / L / XL / XXL',
    colors: 'White / Black / etc.',
    features: ['Soft hand feel', 'Breathable', 'Pre shrunk', 'Export Quality', 'Printing and embroidery (customizable)'],
    materials: ['100% Cotton', 'Cotton Polyester Blend'],
    driveLink: 'https://drive.google.com/drive/folders/1PKJ67uOWjozQMHS7k6pwgGL5EKoRh4MP',
    images: [
      '/images/products/tshirt/1.jpg',
      '/images/products/tshirt/2.jpg',
      '/images/products/tshirt/3.jpg',
      '/images/products/tshirt/4.jpg',
      '/images/products/tshirt/5.jpg',
    ]
  },
  {
    id: '4',
    slug: 'pullover-hoodie',
    title: 'Pullover Hoodie',
    description: 'Plush warmth with structured drape. Available in French Terry or Brushed Fleece, our hoodies offer versatile fits from regular to oversized for maximum comfort.',
    gsm: '240-400',
    fit: 'Regular, oversized, relaxed',
    sizes: 'XS / S / M / L / XL / XXL',
    colors: 'White, Black, etc.',
    features: ['French Terry / Brushed Fleece options', 'Printing and embroidery (customizable)'],
    materials: ['Cotton Polyester Blend'],
    driveLink: 'https://drive.google.com/drive/folders/1OO1K-wq2nwyXkU0IYxnCUBdhSULVPLXO',
    images: [
      '/images/products/hoodie/1.jpg',
      '/images/products/hoodie/2.jpg',
      '/images/products/hoodie/3.jpg',
      '/images/products/hoodie/4.jpg',
      '/images/products/hoodie/5.jpg',
    ]
  }
];

export const getProductBySlug = (slug: string) => {
  return products.find(p => p.slug === slug);
};
