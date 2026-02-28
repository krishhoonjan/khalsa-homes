import { Building2, Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full bg-background border-t border-primary">
      <div className="max-w-[100rem] mx-auto px-6 md:px-12 lg:px-24 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Building2 className="w-8 h-8 text-primary" strokeWidth={1.5} />
              <h3 className="font-heading text-2xl text-primary">
                KHALSA PROPERTIES
              </h3>
            </div>
            <p className="font-paragraph text-sm text-foreground opacity-80">
              Your trusted partner in real estate. Building dreams, delivering excellence.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-xl text-primary mb-6">
              QUICK LINKS
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="/" className="font-paragraph text-sm text-foreground hover:text-primary transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="font-paragraph text-sm text-foreground hover:text-primary transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#contact" className="font-paragraph text-sm text-foreground hover:text-primary transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading text-xl text-primary mb-6">
              CONTACT
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-primary mt-1 flex-shrink-0" strokeWidth={1.5} />
                <a href="tel:+919595953333" className="font-paragraph text-sm text-foreground hover:text-primary transition-colors">
                  +91 959595 3333
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-primary mt-1 flex-shrink-0" strokeWidth={1.5} />
                <a href="mailto:info@khalsaproperties.com" className="font-paragraph text-sm text-foreground hover:text-primary transition-colors">
                  info@khalsaproperties.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" strokeWidth={1.5} />
                <span className="font-paragraph text-sm text-foreground">
                  Pune, Maharashtra, India
                </span>
              </li>
            </ul>
          </div>

          {/* Certifications */}
          <div>
            <h4 className="font-heading text-xl text-primary mb-6">
              CERTIFICATIONS
            </h4>
            <div className="space-y-4">
              <div className="border border-primary p-4">
                <p className="font-heading text-base text-primary mb-1">
                  RERA CERTIFIED
                </p>
                <p className="font-paragraph text-xs text-foreground opacity-80">
                  Fully compliant with regulatory standards
                </p>
              </div>
              <div className="border border-primary p-4">
                <p className="font-heading text-base text-primary mb-1">
                  1000+ PROPERTIES
                </p>
                <p className="font-paragraph text-xs text-foreground opacity-80">
                  Successfully delivered across Pune
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-paragraph text-sm text-foreground opacity-80 text-center md:text-left">
              © {new Date().getFullYear()} Khalsa Properties. All rights reserved.
            </p>
            <p className="font-paragraph text-sm text-foreground opacity-80 text-center md:text-right">
              Trusted by thousands of families in Pune
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
