import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Blue Feather International Trading — Precision in Knitwear",
  description: "Premium bulk knit garments — polos, t-shirts, hoodies and shorts — exported worldwide from Karachi, Pakistan. Specializing in high-quality export-grade apparel.",
  keywords: ["knitwear", "garments Karachi", "textile export Pakistan", "bulk apparel", "polo shirts manufacturer", "t-shirts exporter", "hoodies supplier", "Blue Feather International"],
  authors: [{ name: "Blue Feather International Trading" }],
  creator: "Blue Feather International Trading",
  publisher: "Blue Feather International Trading",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://bluefeather.com.pk"), // Assuming a domain, user can update
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://bluefeather.com.pk",
    siteName: "Blue Feather International Trading",
    title: "Blue Feather International Trading — Precision in Knitwear",
    description: "Premium bulk knit garments exported worldwide from Karachi, Pakistan.",
    images: [
      {
        url: "/images/id-preview-e81f8f51--d7d5659f-2cd5-4555-9317-42b58265dd53.lovable.app-1778846814477.png",
        width: 1200,
        height: 630,
        alt: "Blue Feather International Trading",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blue Feather International Trading — Precision in Knitwear",
    description: "Premium bulk knit garments exported worldwide from Karachi, Pakistan.",
    images: ["/images/id-preview-e81f8f51--d7d5659f-2cd5-4555-9317-42b58265dd53.lovable.app-1778846814477.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${playfair.variable} antialiased min-h-screen flex flex-col`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
