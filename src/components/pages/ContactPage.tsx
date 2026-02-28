import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Menu, X } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { Link } from 'react-router-dom';

export default function ContactPage() {
  const { toast } = useToast();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));

    toast({
      title: 'Message Sent Successfully!',
      description: 'Thank you for contacting Khalsa Properties. We will get back to you shortly.',
    });

    setFormData({ name: '', email: '', phone: '' });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: '+91 959595 3333',
      link: 'tel:+919595953333'
    },
    {
      icon: Mail,
      title: 'Email',
      details: 'info@khalsaproperties.com',
      link: 'mailto:info@khalsaproperties.com'
    },
    {
      icon: MapPin,
      title: 'Location',
      details: 'Pune, Maharashtra, India',
      link: null
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: 'Mon - Sat: 9:00 AM - 7:00 PM',
      link: null
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-primary px-6 py-6 md:px-12 flex justify-between items-center">
        <Link to="/" className="font-heading text-2xl md:text-3xl text-primary tracking-tighter z-50">
          KHALSA<span className="text-white">.</span>
        </Link>
        
        <div className="hidden md:flex gap-8 items-center">
          <Link 
            to="/"
            className="font-heading text-sm text-foreground hover:text-primary transition-colors uppercase tracking-widest"
          >
            HOME
          </Link>
          <Link 
            to="/about"
            className="font-heading text-sm text-foreground hover:text-primary transition-colors uppercase tracking-widest"
          >
            ABOUT
          </Link>
          <Link 
            to="/contact"
            className="font-heading text-sm text-primary transition-colors uppercase tracking-widest"
          >
            CONTACT
          </Link>
          <a 
            href="tel:+919595953333" 
            className="border border-primary text-primary px-6 py-2 font-heading text-xs hover:bg-primary hover:text-black transition-all duration-300"
          >
            +91 959595 3333
          </a>
        </div>

        <button 
          className="md:hidden text-primary z-50"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 bg-black z-40 flex flex-col items-center justify-center gap-8"
          >
            <Link 
              to="/"
              onClick={() => setIsMenuOpen(false)}
              className="font-heading text-4xl text-primary hover:text-white transition-colors"
            >
              HOME
            </Link>
            <Link 
              to="/about"
              onClick={() => setIsMenuOpen(false)}
              className="font-heading text-4xl text-primary hover:text-white transition-colors"
            >
              ABOUT
            </Link>
            <Link 
              to="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="font-heading text-4xl text-primary hover:text-white transition-colors"
            >
              CONTACT
            </Link>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="contact" className="w-full max-w-[120rem] mx-auto px-6 md:px-12 lg:px-24 pt-32 pb-24 md:pt-48 md:pb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-5xl mx-auto"
        >
          <h1 className="font-heading text-6xl md:text-8xl lg:text-9xl text-primary mb-8">
            CONTACT US
          </h1>
          <p className="font-paragraph text-lg md:text-xl text-foreground">
            Get in touch with us today. Our team is ready to assist you with all your real estate needs.
          </p>
        </motion.div>
      </section>

      {/* Contact Info Cards */}
      <section className="w-full py-16 md:py-24">
        <div className="max-w-[100rem] mx-auto px-6 md:px-12 lg:px-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="border border-primary p-6 md:p-8 bg-background hover:bg-primary hover:bg-opacity-5 transition-colors"
                >
                  <Icon className="w-10 h-10 md:w-12 md:h-12 text-primary mb-4" strokeWidth={1.5} />
                  <h3 className="font-heading text-xl md:text-2xl text-foreground mb-3">
                    {info.title}
                  </h3>
                  {info.link ? (
                    <a
                      href={info.link}
                      className="font-paragraph text-sm md:text-base text-foreground hover:text-primary transition-colors"
                    >
                      {info.details}
                    </a>
                  ) : (
                    <p className="font-paragraph text-sm md:text-base text-foreground">
                      {info.details}
                    </p>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="w-full py-16 md:py-24">
        <div className="max-w-[100rem] mx-auto px-6 md:px-12 lg:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-heading text-4xl md:text-5xl text-primary mb-8">
                SEND US A MESSAGE
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block font-heading text-base text-foreground mb-3">
                    NAME *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-background border-2 border-primary text-foreground font-paragraph px-4 py-3 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block font-heading text-base text-foreground mb-3">
                    EMAIL *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-background border-2 border-primary text-foreground font-paragraph px-4 py-3 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary"
                    placeholder="Enter your email address"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block font-heading text-base text-foreground mb-3">
                    PHONE NUMBER *
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-background border-2 border-primary text-foreground font-paragraph px-4 py-3 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary"
                    placeholder="Enter your phone number"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary text-primary-foreground font-heading text-base px-8 py-4 font-bold hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'SENDING...' : 'SUBMIT'}
                </button>
              </form>
            </motion.div>

            {/* Additional Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <h2 className="font-heading text-4xl md:text-5xl text-primary mb-8">
                  WHY REACH OUT?
                </h2>
                <div className="space-y-6">
                  <div className="border-l-4 border-primary pl-6">
                    <h3 className="font-heading text-xl md:text-2xl text-foreground mb-2">
                      Property Consultation
                    </h3>
                    <p className="font-paragraph text-sm md:text-base text-foreground opacity-80">
                      Get expert advice on buying, selling, or investing in properties across Pune.
                    </p>
                  </div>

                  <div className="border-l-4 border-primary pl-6">
                    <h3 className="font-heading text-xl md:text-2xl text-foreground mb-2">
                      Market Insights
                    </h3>
                    <p className="font-paragraph text-sm md:text-base text-foreground opacity-80">
                      Access detailed market analysis and property valuations from our experts.
                    </p>
                  </div>

                  <div className="border-l-4 border-primary pl-6">
                    <h3 className="font-heading text-xl md:text-2xl text-foreground mb-2">
                      Property Viewing
                    </h3>
                    <p className="font-paragraph text-sm md:text-base text-foreground opacity-80">
                      Schedule a viewing of properties that match your requirements and budget.
                    </p>
                  </div>

                  <div className="border-l-4 border-primary pl-6">
                    <h3 className="font-heading text-xl md:text-2xl text-foreground mb-2">
                      Legal Assistance
                    </h3>
                    <p className="font-paragraph text-sm md:text-base text-foreground opacity-80">
                      Get help with documentation, RERA compliance, and legal formalities.
                    </p>
                  </div>
                </div>
              </div>

              <div className="border-2 border-primary p-8 md:p-10">
                <h3 className="font-heading text-2xl md:text-3xl text-primary mb-4">
                  CALL US DIRECTLY
                </h3>
                <a
                  href="tel:+919595953333"
                  className="font-heading text-3xl md:text-4xl text-foreground hover:text-primary transition-colors block mb-4"
                >
                  +91 959595 3333
                </a>
                <p className="font-paragraph text-sm md:text-base text-foreground opacity-80">
                  Available Monday to Saturday, 9:00 AM - 7:00 PM
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full bg-black border-t border-primary/20 py-12">
        <div className="max-w-[120rem] mx-auto px-6 md:px-12 lg:px-24 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h2 className="font-heading text-2xl text-white mb-2">KHALSA PROPERTIES</h2>
            <p className="font-paragraph text-xs text-gray-500">© {new Date().getFullYear()} All Rights Reserved.</p>
          </div>
          <div className="flex gap-8">
            {['Privacy Policy', 'Terms of Service', 'RERA Compliance'].map((link) => (
              <a key={link} href="#" className="font-paragraph text-xs text-gray-500 hover:text-primary transition-colors">
                {link}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
