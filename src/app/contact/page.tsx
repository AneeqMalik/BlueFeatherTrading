'use client';

import { Mail, MapPin, Phone, Building, Loader2, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const formData = new FormData(event.currentTarget);

    try {



      const firstName = String(formData.get('firstName') || '');
      const lastName = String(formData.get('lastName') || '');
      const email = String(formData.get('email') || '');
      const company = String(formData.get('company') || '');
      const inquiryType = String(formData.get('inquiryType') || '');
      const message = String(formData.get('message') || '');

      const subject = encodeURIComponent(`New Inquiry: ${inquiryType} from ${firstName} ${lastName}`);
      const body = encodeURIComponent([
        'New Contact Form Submission',
        '',
        `Name: ${firstName} ${lastName}`,
        `Email: ${email}`,
        `Company: ${company || 'N/A'}`,
        `Inquiry Type: ${inquiryType}`,
        '',
        'Message:',
        message,
      ].join('\n'));

      window.location.href = `mailto:info@bluefeathertrading.com?subject=${subject}&body=${body}`;
      setIsSuccess(true);
      (event.target as HTMLFormElement).reset();
    } catch (err: any) {
      setError(err.message || 'Unable to open your email client.');
    } finally {
      setIsSubmitting(false);
      
      if (!error) {
        setTimeout(() => setIsSuccess(false), 5000);
      }
    }
  }

  return (
    <div className="py-24 max-w-7xl mx-auto px-6">
      <div className="mb-16 max-w-2xl">
        <div className="text-xs uppercase tracking-[0.25em] text-accent mb-3">
          Get in Touch
        </div>
        <h1 className="font-display text-5xl md:text-6xl text-foreground leading-[1.05] mb-6">
          Start your next <span className="text-accent italic">Order</span>
        </h1>
        <p className="text-lg text-muted-foreground">
          Whether you need a sample run or a large bulk export, our team in Karachi is ready to manage your production from start to finish.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-16">
        <div>
          <form onSubmit={handleSubmit} className="space-y-6 bg-card border border-border p-8 rounded-2xl relative">
            
            {isSuccess && (
              <div className="absolute inset-0 z-10 bg-card/95 backdrop-blur-sm rounded-2xl flex flex-col items-center justify-center p-8 text-center border border-accent/20">
                <CheckCircle2 className="size-16 text-accent mb-4" />
                <h3 className="font-display text-2xl mb-2">Inquiry Sent Successfully</h3>
                <p className="text-muted-foreground">Thank you for reaching out. Our team will review your details and respond to your email shortly.</p>
                <button 
                  type="button" 
                  onClick={() => setIsSuccess(false)}
                  className="mt-6 px-6 py-2 rounded-full border border-border hover:bg-muted transition"
                >
                  Send another message
                </button>
              </div>
            )}

            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="firstName" className="text-sm font-medium">First Name *</label>
                <input id="firstName" name="firstName" type="text" required className="w-full bg-background border border-input rounded-md px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-accent" placeholder="John" />
              </div>
              <div className="space-y-2">
                <label htmlFor="lastName" className="text-sm font-medium">Last Name *</label>
                <input id="lastName" name="lastName" type="text" required className="w-full bg-background border border-input rounded-md px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-accent" placeholder="Doe" />
              </div>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">Work Email *</label>
              <input id="email" name="email" type="email" required className="w-full bg-background border border-input rounded-md px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-accent" placeholder="john@company.com" />
            </div>

            <div className="space-y-2">
              <label htmlFor="company" className="text-sm font-medium">Company Name</label>
              <input id="company" name="company" type="text" className="w-full bg-background border border-input rounded-md px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-accent" placeholder="Acme Trading Co." />
            </div>

            <div className="space-y-2">
              <label htmlFor="inquiryType" className="text-sm font-medium">Inquiry Type</label>
              <select id="inquiryType" name="inquiryType" className="w-full bg-background border border-input rounded-md px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-accent appearance-none cursor-pointer">
                <option value="Volume Export Inquiry (Bulk Orders)">Volume Export Inquiry (Bulk Orders)</option>
                <option value="Custom Sampling & Prototype Development">Custom Sampling & Prototype Development</option>
                <option value="Private Label / OEM Manufacturing">Private Label / OEM Manufacturing</option>
                <option value="Logistics & Global Shipping Query">Logistics & Global Shipping Query</option>
                <option value="Strategic Partnership Inquiry">Strategic Partnership Inquiry</option>
                <option value="General Business Correspondence">General Business Correspondence</option>
              </select>
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium">Message Details *</label>
              <textarea id="message" name="message" required rows={5} className="w-full bg-background border border-input rounded-md px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-accent" placeholder="Please provide specific details about your requirements (e.g. products, quantities, target dates)..."></textarea>
            </div>

            {error && (
              <div className="text-sm text-destructive bg-destructive/10 p-3 rounded-md border border-destructive/20">
                {error}
              </div>
            )}

            <button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full py-4 rounded-full bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-primary/20 disabled:opacity-70 disabled:hover:scale-100 flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="size-5 animate-spin" /> Sending...
                </>
              ) : (
                'Submit Inquiry'
              )}
            </button>
          </form>
        </div>

        <div className="space-y-10">
          <div>
            <h3 className="font-display text-2xl mb-6">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="size-12 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                  <Mail className="size-5 text-accent" />
                </div>
                <div>
                  <div className="font-medium mb-1">Email Us</div>
                  <a href="mailto:info@bluefeathertrading.com" className="text-muted-foreground hover:text-accent transition">info@bluefeathertrading.com</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="size-12 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                  <Phone className="size-5 text-accent" />
                </div>
                <div>
                  <div className="font-medium mb-1">Call Us</div>
                  <a href="tel:+923212345678" className="text-muted-foreground hover:text-accent transition">+92 321 2345678</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="size-12 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                  <MapPin className="size-5 text-accent" />
                </div>
                <div>
                  <div className="font-medium mb-1">Headquarters & Manufacturing</div>
                  <p className="text-muted-foreground">S.I.T.E. Industrial Area<br/>Karachi, Pakistan</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-muted p-8 rounded-2xl border border-border">
            <Building className="size-8 text-accent mb-4" />
            <h3 className="font-display text-xl mb-3">Why Karachi?</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Karachi is Pakistan's premier industrial and port city. By basing our manufacturing and logistics here, we have direct access to world-class textile mills and immediate proximity to major shipping routes, ensuring rapid turnaround times for global exports.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
