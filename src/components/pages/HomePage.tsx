import { Image } from '@/components/ui/image';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Award, Building2, Mail, MapPin, Menu, Phone, Shield, X } from 'lucide-react';
import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Head from '@/components/Head';

// --- Types & Interfaces ---
interface Achievement {
  icon: React.ElementType;
  count: string;
  label: string;
  description: string;
}

interface ServicePoint {
  title: string;
  description: string;
}

// --- Canonical Data Sources ---
const ACHIEVEMENTS_DATA: Achievement[] = [
  {
    icon: Building2,
    count: '500+',
    label: 'Properties Sold',
    description: 'Successfully delivered dream homes to families across Pune.'
  },
  {
    icon: Award,
    count: 'RERA',
    label: 'Certified',
    description: 'Fully compliant with Real Estate Regulatory Authority standards.'
  },
  {
    icon: Shield,
    count: 'Trusted',
    label: 'By Thousands',
    description: 'Building relationships and trust with every transaction.'
  }
];

const WHY_CHOOSE_US_DATA: ServicePoint[] = [
  {
    title: 'Expert Guidance',
    description: 'Our experienced team provides personalized consultation to help you make informed decisions about your property investment.'
  },
  {
    title: 'Transparent Process',
    description: 'We believe in complete transparency. Every step of your property journey is clear, documented, and legally compliant.'
  },
  {
    title: 'Prime Locations',
    description: 'Access to the best properties in Pune\'s most sought-after neighborhoods, from residential to commercial spaces.'
  }
];

// --- Components ---

const SectionDivider = () => (
  <div className="w-full h-px bg-primary/30 my-0" />
);

const AnimatedText = ({ text, className }: { text: string; className?: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <span ref={ref} className={`inline-block overflow-hidden ${className}`}>
      <motion.span
        initial={{ y: "100%" }}
        animate={isInView ? { y: 0 } : { y: "100%" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="inline-block"
      >
        {text}
      </motion.span>
    </span>
  );
};

export default function HomePage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Parallax effects
  const heroY = useTransform(scrollYProgress, [0, 0.2], ["0%", "50%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <div ref={containerRef} className="bg-background text-foreground min-h-screen overflow-x-clip selection:bg-primary selection:text-background font-paragraph">
      <Head 
        title="Khalsa Properties - Premium Real Estate in Pune | 500+ Properties Sold"
        description="Khalsa Properties is Pune's premier RERA-certified real estate agency. 500+ properties sold, trusted by thousands. Expert guidance for buying, selling, and investing."
        canonical="https://khalsaproperties.com"
      />
      <style>{`
        .text-stroke {
          -webkit-text-stroke: 1px #DAA520;
          color: transparent;
        }
        .clip-diagonal {
          clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
        }
        .clip-diagonal-reverse {
          clip-path: polygon(0 15%, 100% 0, 100% 100%, 0 100%);
        }
      `}</style>
      {/* --- Navigation --- */}
      <nav className="fixed top-0 left-0 right-0 z-50 mix-blend-difference px-6 py-6 md:px-12 flex justify-between items-center">
        <Link to="/" className="font-heading text-2xl md:text-3xl text-primary tracking-tighter z-50">
          KHALSA<span className="text-white">.</span>
        </Link>

        <div className="hidden md:flex gap-8 items-center">
          <Link
            to="/"
            className="font-heading text-sm text-white hover:text-primary transition-colors uppercase tracking-widest"
          >
            HOME
          </Link>
          <Link
            to="/about"
            className="font-heading text-sm text-white hover:text-primary transition-colors uppercase tracking-widest"
          >
            ABOUT
          </Link>
          <Link
            to="/contact"
            className="font-heading text-sm text-white hover:text-primary transition-colors uppercase tracking-widest"
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
      {/* --- Hero Section --- */}
      <section id="home" className="relative w-full h-screen min-h-[800px] flex items-center justify-center overflow-hidden">
        {/* Background Parallax Layer */}
        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          className="absolute inset-0 z-0"
        >
          <div className="absolute inset-0 bg-black/60 z-10" />
          <Image
            src="https://static.wixstatic.com/media/011e47_3fe23bb4d7ad4ac682e7b4f0b11e0878~mv2.png?originWidth=1152&originHeight=768"
            alt="Luxury Pune Real Estate"
            className="w-full h-full object-cover opacity-60"
          />
        </motion.div>

        {/* Hero Content */}
        <div className="relative z-20 w-full max-w-[120rem] mx-auto px-6 md:px-12 lg:px-24 flex flex-col justify-center h-full pt-20">
          <div className="overflow-hidden">
            <motion.p
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-paragraph text-primary text-sm md:text-base tracking-[0.2em] mb-4 uppercase"
            >Pune's Premier Fake Estate</motion.p>
          </div>

          <h1 className="font-heading text-6xl md:text-8xl lg:text-9xl text-white leading-[0.9] tracking-tighter mb-8">
            <span className="block overflow-hidden">
              <motion.span
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
                className="block"
              >
                KHALSA
              </motion.span>
            </span>
            <span className="block overflow-hidden">
              <motion.span
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
                className="block text-primary"
              >
                PROPERTIES
              </motion.span>
            </span>
          </h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="max-w-xl"
          >
            <p className="text-gray-300 text-lg md:text-xl mb-12 leading-relaxed">
              We don't just sell properties; we deliver dreams. With over 500+ properties sold, we are the unyielding foundation of trust in Pune.
            </p>

            <div className="flex flex-col sm:flex-row gap-6">
              <a
                href="#contact"
                className="group relative px-8 py-4 bg-primary text-black font-heading font-bold overflow-hidden"
              >
                <span className="relative z-10 group-hover:text-white transition-colors duration-300">GET IN TOUCH</span>
                <div className="absolute inset-0 bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </a>
              <a
                href="#about"
                className="group px-8 py-4 border border-primary text-primary font-heading font-bold hover:bg-primary hover:text-black transition-all duration-300"
              >
                LEARN MORE
              </a>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20"
        >
          <span className="text-xs text-primary tracking-widest uppercase">Scroll</span>
          <div className="w-[1px] h-16 bg-gradient-to-b from-primary to-transparent" />
        </motion.div>
      </section>
      <SectionDivider />
      {/* --- Achievements Section (Horizontal Scroll / Grid) --- */}
      <section className="w-full bg-background py-24 md:py-32 relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-0 w-1/3 h-full border-l border-primary/10 hidden lg:block" />
        <div className="absolute bottom-0 left-0 w-full h-1/3 border-t border-primary/10" />

        <div className="max-w-[120rem] mx-auto px-6 md:px-12 lg:px-24 relative z-10">
          <div className="mb-20 md:mb-32">
            <AnimatedText
              text="UNCOMPROMISING"
              className="font-heading text-4xl md:text-6xl lg:text-7xl text-white mb-2"
            />
            <br />
            <AnimatedText
              text="EXCELLENCE"
              className="font-heading text-4xl md:text-6xl lg:text-7xl text-primary"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-primary/20 border border-primary/20">
            {ACHIEVEMENTS_DATA.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="bg-background p-12 md:p-16 group hover:bg-zinc-900 transition-colors duration-500 relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 p-6 opacity-20 group-hover:opacity-100 transition-opacity duration-500">
                    <Icon className="w-12 h-12 text-primary" />
                  </div>

                  <h3 className="font-heading text-6xl md:text-7xl text-primary mb-6 group-hover:scale-105 transition-transform duration-500 origin-left">
                    {item.count}
                  </h3>
                  <h4 className="font-heading text-xl md:text-2xl text-white mb-4 tracking-wide">
                    {item.label}
                  </h4>
                  <p className="font-paragraph text-sm text-gray-400 leading-relaxed max-w-xs group-hover:text-white transition-colors">
                    {item.description}
                  </p>

                  {/* Hover Line */}
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
      {/* --- About / Why Choose Us (Sticky Layout) --- */}
      <section id="about" className="w-full bg-zinc-950 relative">
        <div className="max-w-[120rem] mx-auto">
          <div className="flex flex-col lg:flex-row">

            {/* Sticky Left Column */}
            <div className="lg:w-1/2 lg:h-screen lg:sticky lg:top-0 flex flex-col justify-center p-6 md:p-12 lg:p-24 border-r border-primary/10 bg-zinc-950 z-10">
              <div className="mb-12">
                <span className="text-primary font-paragraph text-sm tracking-widest uppercase mb-4 block">Our Philosophy</span>
                <h2 className="font-heading text-5xl md:text-7xl text-white mb-8">
                  WHY <br />
                  <span className="text-stroke">CHOOSE US</span>
                </h2>
                <p className="font-paragraph text-gray-400 text-lg max-w-md">
                  In a market of noise, we offer clarity. Our reputation is built on the solid ground of transparency and results.
                </p>
              </div>

              <div className="relative w-full aspect-[4/3] overflow-hidden border border-primary/20 group">
                <Image
                  src="https://static.wixstatic.com/media/011e47_a4df62dabece496c929d78c742bef9b9~mv2.png?originWidth=1152&originHeight=896"
                  alt="Khalsa Properties Office"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary/10 mix-blend-overlay" />
              </div>
            </div>

            {/* Scrollable Right Column */}
            <div className="lg:w-1/2 bg-black">
              {WHY_CHOOSE_US_DATA.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-20%" }}
                  transition={{ duration: 0.6 }}
                  className="min-h-[50vh] lg:min-h-[70vh] flex flex-col justify-center p-6 md:p-12 lg:p-24 border-b border-primary/10 last:border-b-0 hover:bg-zinc-900/50 transition-colors"
                >
                  <span className="font-heading text-8xl text-primary/10 mb-8 block">0{index + 1}</span>
                  <h3 className="font-heading text-3xl md:text-4xl text-primary mb-6">
                    {item.title}
                  </h3>
                  <p className="font-paragraph text-lg md:text-xl text-gray-300 leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              ))}

              {/* Visual Breaker Image in Flow */}
              <div className="h-[60vh] w-full relative overflow-hidden">
                 <Image
                  src="https://static.wixstatic.com/media/011e47_2c388867e23e4837bd99c1aa2f58d954~mv2.png?originWidth=1152&originHeight=896"
                  alt="Pune Skyline"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                <div className="absolute bottom-12 left-6 md:left-12 lg:left-24">
                  <h3 className="font-heading text-4xl text-white">PUNE, INDIA</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* --- Marquee Section --- */}
      <div className="py-12 bg-primary overflow-hidden whitespace-nowrap flex">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          className="flex gap-12 items-center"
        >
          {[...Array(4)].map((_, i) => (
            <React.Fragment key={i}>
              <span className="font-heading text-6xl md:text-8xl text-black">RERA CERTIFIED</span>
              <span className="font-heading text-6xl md:text-8xl text-black/30 stroke-black">TRUSTED PARTNER</span>
            </React.Fragment>
          ))}
        </motion.div>
      </div>
      {/* --- Contact Section --- */}
      <section id="contact" className="w-full py-24 md:py-32 bg-background relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-primary/10" />

        <div className="max-w-[120rem] mx-auto px-6 md:px-12 lg:px-24 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32">

            {/* Contact Info */}
            <div>
              <AnimatedText
                text="LET'S BUILD"
                className="font-heading text-5xl md:text-7xl lg:text-8xl text-white leading-none"
              />
              <br />
              <AnimatedText
                text="YOUR FUTURE"
                className="font-heading text-5xl md:text-7xl lg:text-8xl text-primary leading-none mb-12"
              />

              <div className="space-y-12 mt-16">
                <div className="group">
                  <h4 className="font-paragraph text-sm text-gray-500 uppercase tracking-widest mb-2">Call Us Directly</h4>
                  <a href="tel:+919595953333" className="flex items-center gap-4 font-heading text-3xl md:text-5xl text-white group-hover:text-primary transition-colors">
                    <Phone className="w-8 h-8 md:w-12 md:h-12" />
                    +91 959595 3333
                  </a>
                </div>

                <div className="group">
                  <h4 className="font-paragraph text-sm text-gray-500 uppercase tracking-widest mb-2">Email Us</h4>
                  <a href="mailto:ajaysingh1269@gmail.com" className="flex items-center gap-4 font-heading text-2xl md:text-4xl text-white group-hover:text-primary transition-colors">
                    <Mail className="w-8 h-8 md:w-10 md:h-10" />
                    ajaysingh1269@gmail.com
                  </a>
                </div>

                <div className="group">
                  <h4 className="font-paragraph text-sm text-gray-500 uppercase tracking-widest mb-2">Visit Us</h4>
                  <div className="flex items-start gap-4 font-paragraph text-xl text-gray-300">
                    <MapPin className="w-8 h-8 text-primary shrink-0 mt-1" />
                    <p>Khalsa Properties ,<br />Wanowrie, Jagtap Chowk, Pune</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form Visual */}
            <div className="bg-zinc-900/50 p-8 md:p-12 border border-primary/20 backdrop-blur-sm">
              <h3 className="font-heading text-3xl text-white mb-8">Send an Inquiry</h3>
              <div className="w-full overflow-hidden rounded-lg">
                <iframe
                  src="https://docs.google.com/forms/d/e/1FAIpQLSe8R2UtmOfNke1rfTgxaKGIO_4dmIewS6tG6CinCYIPgDkbug/viewform?embedded=true"
                  width="100%"
                  height="700"
                  frameBorder="0"
                  marginHeight={0}
                  marginWidth={0}
                  className="w-full"
                  title="Contact Form"
                  style={{ minHeight: '700px' }}
                >
                  Loading…
                </iframe>
              </div>
            </div>

          </div>
        </div>
      </section>
      {/* --- Footer --- */}
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
