import { motion } from 'framer-motion';
import { Target, Users, TrendingUp, Heart, Menu, X } from 'lucide-react';
import { Image } from '@/components/ui/image';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function AboutPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const values = [
    {
      icon: Target,
      title: 'Our Mission',
      description: 'To provide exceptional real estate services that exceed client expectations while maintaining the highest standards of integrity and professionalism.'
    },
    {
      icon: Users,
      title: 'Client-Centric',
      description: 'Every decision we make is centered around our clients\' needs. Your satisfaction and success are our top priorities.'
    },
    {
      icon: TrendingUp,
      title: 'Market Expertise',
      description: 'Deep understanding of Pune\'s real estate market, backed by years of experience and thousands of successful transactions.'
    },
    {
      icon: Heart,
      title: 'Trust & Transparency',
      description: 'Building lasting relationships through honest communication, transparent processes, and unwavering commitment to our clients.'
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
            className="font-heading text-sm text-primary transition-colors uppercase tracking-widest"
          >
            ABOUT
          </Link>
          <Link
            to="/contact"
            className="font-heading text-sm text-foreground hover:text-primary transition-colors uppercase tracking-widest"
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
      <section id="about" className="w-full max-w-[120rem] mx-auto px-6 md:px-12 lg:px-24 pt-32 pb-24 md:pt-48 md:pb-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-5xl mx-auto"
        >
          <h1 className="font-heading text-6xl md:text-8xl lg:text-9xl text-primary mb-8">
            ABOUT US
          </h1>
          <p className="font-paragraph text-lg md:text-xl text-foreground mb-12">
            Khalsa Properties is Pune's premier real estate agency, dedicated to helping individuals and families find their perfect property. With over 1000 successful transactions, RERA certification, and a reputation built on trust, we are your reliable partner in the real estate journey.
          </p>
        </motion.div>
      </section>

      {/* Story Section */}
      <section className="w-full py-24 md:py-32">
        <div className="max-w-[100rem] mx-auto px-6 md:px-12 lg:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-heading text-4xl md:text-6xl text-primary mb-8">
                OUR STORY
              </h2>
              <div className="space-y-6">
                <p className="font-paragraph text-base md:text-lg text-foreground">
                  Founded with a vision to revolutionize the real estate experience in Pune, Khalsa Properties has grown from a small team of passionate professionals to one of the city's most trusted real estate agencies.
                </p>
                <p className="font-paragraph text-base md:text-lg text-foreground">
                  Our journey began with a simple belief: that buying or selling property should be a transparent, stress-free, and rewarding experience. Today, with over 1000 properties successfully delivered, we continue to uphold this belief in every transaction.
                </p>
                <p className="font-paragraph text-base md:text-lg text-foreground">
                  As a RERA-certified agency, we adhere to the highest standards of compliance and ethics, ensuring that every client receives professional service backed by legal expertise and market knowledge.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-primary opacity-20 blur-2xl"></div>
              <Image
                src="https://static.wixstatic.com/media/011e47_80959c60858b40b8b886f40df28b61f7~mv2.png?originWidth=576&originHeight=448"
                alt="Khalsa Properties team and office"
                width={600}
                className="relative w-full h-auto border border-primary"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="w-full py-24 md:py-32 bg-background">
        <div className="max-w-[100rem] mx-auto px-6 md:px-12 lg:px-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-4xl md:text-6xl lg:text-7xl text-primary mb-6">
              OUR VALUES
            </h2>
            <p className="font-paragraph text-base md:text-lg text-foreground max-w-3xl mx-auto">
              The principles that guide every decision we make and every relationship we build
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="border border-primary p-8 md:p-12 bg-background hover:bg-primary hover:bg-opacity-5 transition-colors"
                >
                  <Icon className="w-12 h-12 md:w-16 md:h-16 text-primary mb-6" strokeWidth={1.5} />
                  <h3 className="font-heading text-2xl md:text-3xl text-foreground mb-4">
                    {value.title}
                  </h3>
                  <p className="font-paragraph text-sm md:text-base text-foreground opacity-80">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="w-full py-24 md:py-32">
        <div className="max-w-[100rem] mx-auto px-6 md:px-12 lg:px-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center border border-primary p-8 md:p-12"
            >
              <h3 className="font-heading text-5xl md:text-6xl text-primary mb-4">
                500+
              </h3>
              <p className="font-paragraph text-base md:text-lg text-foreground">
                Properties Successfully Delivered
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center border border-primary p-8 md:p-12"
            >
              <h3 className="font-heading text-5xl md:text-6xl text-primary mb-4">
                100%
              </h3>
              <p className="font-paragraph text-base md:text-lg text-foreground">
                RERA Compliant & Certified
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center border border-primary p-8 md:p-12"
            >
              <h3 className="font-heading text-5xl md:text-6xl text-primary mb-4">
                5000+
              </h3>
              <p className="font-paragraph text-base md:text-lg text-foreground">
                Satisfied Clients & Families
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-24 md:py-32 bg-background">
        <div className="max-w-[100rem] mx-auto px-6 md:px-12 lg:px-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center border-2 border-primary p-12 md:p-16 lg:p-24"
          >
            <h2 className="font-heading text-4xl md:text-6xl text-primary mb-6">
              READY TO FIND YOUR DREAM PROPERTY?
            </h2>
            <p className="font-paragraph text-base md:text-lg text-foreground mb-12 max-w-3xl mx-auto">
              Let our experienced team guide you through every step of your real estate journey
            </p>
            <a
              href="/contact"
              className="inline-block bg-primary text-primary-foreground font-heading text-base px-8 py-4 font-bold hover:opacity-90 transition-opacity"
            >
              CONTACT US TODAY
            </a>
          </motion.div>
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
