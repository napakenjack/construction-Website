import React, { useState, useEffect } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, MapPin, HardHat, ArrowRight } from 'lucide-react';
import { Button } from './ui/Button';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    { name: 'Process', path: '/process' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-3' : 'bg-white py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="bg-brand-500 text-white p-2 rounded-lg group-hover:bg-graphite-950 transition-colors">
              <HardHat size={24} strokeWidth={2.5} />
            </div>
            <span className="text-2xl font-extrabold tracking-tight text-graphite-950">
              APEX<span className="text-brand-500">BUILD</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-semibold tracking-wide uppercase transition-colors hover:text-brand-500 ${
                  location.pathname === link.path ? 'text-brand-500' : 'text-graphite-700'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <div className="flex flex-col items-end mr-4">
              <span className="text-xs text-graphite-500 font-medium uppercase tracking-wider">Call Us Today</span>
              <a href="tel:+1234567890" className="text-sm font-bold text-graphite-950 hover:text-brand-500 transition-colors">
                +1 (555) 123-4567
              </a>
            </div>
            <Button href="/contact" size="sm">Get Estimate</Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-graphite-900"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-t border-graphite-100 shadow-lg py-4 px-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`block py-3 px-4 text-base font-bold uppercase tracking-wide rounded-md ${
                location.pathname === link.path ? 'bg-brand-50 text-brand-600' : 'text-graphite-800 hover:bg-graphite-50'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <div className="mt-4 pt-4 border-t border-graphite-100 flex flex-col gap-4">
            <a href="tel:+1234567890" className="flex items-center gap-3 text-graphite-800 font-bold py-2">
              <Phone size={20} className="text-brand-500" />
              +1 (555) 123-4567
            </a>
            <Button href="/contact" fullWidth>Get Free Estimate</Button>
          </div>
        </div>
      )}
    </header>
  );
};

const Footer = () => {
  return (
    <footer className="bg-graphite-950 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="bg-brand-500 text-white p-2 rounded-lg">
                <HardHat size={24} strokeWidth={2.5} />
              </div>
              <span className="text-2xl font-extrabold tracking-tight text-white">
                APEX<span className="text-brand-500">BUILD</span>
              </span>
            </Link>
            <p className="text-graphite-400 mb-6 leading-relaxed">
              Premium construction and engineering services for residential, commercial, and turnkey projects. Built on trust, driven by quality.
            </p>
            <div className="flex gap-4">
              {/* Social icons could go here */}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-4">
              {[
                { name: 'Home', path: '/' },
                { name: 'About Us', path: '/about' },
                { name: 'Our Services', path: '/services' },
                { name: 'Projects Portfolio', path: '/projects' },
                { name: 'Our Process', path: '/process' },
                { name: 'Contact', path: '/contact' }
              ].map((item, i) => (
                <li key={i}>
                  <Link to={item.path} className="text-graphite-400 hover:text-brand-500 transition-colors flex items-center gap-2">
                    <ArrowRight size={14} className="text-brand-500" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-6 uppercase tracking-wider">Our Services</h4>
            <ul className="space-y-4">
              {['Custom Home Builds', 'Commercial Construction', 'Turnkey Solutions', 'Renovations', 'Project Management'].map((item, i) => (
                <li key={i}>
                  <Link to="/services" className="text-graphite-400 hover:text-brand-500 transition-colors flex items-center gap-2">
                    <ArrowRight size={14} className="text-brand-500" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-6 uppercase tracking-wider">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-graphite-400">
                <MapPin size={20} className="text-brand-500 shrink-0 mt-1" />
                <span>123 Construction Ave, Suite 400<br />New York, NY 10001</span>
              </li>
              <li className="flex items-center gap-3 text-graphite-400">
                <Phone size={20} className="text-brand-500 shrink-0" />
                <a href="tel:+15551234567" className="hover:text-white transition-colors">+1 (555) 123-4567</a>
              </li>
              <li className="flex items-center gap-3 text-graphite-400">
                <Mail size={20} className="text-brand-500 shrink-0" />
                <a href="mailto:hello@apexbuild.com" className="hover:text-white transition-colors">hello@apexbuild.com</a>
              </li>
            </ul>
            <div className="mt-8">
              <Button href="/contact" variant="primary" fullWidth>Request Consultation</Button>
            </div>
          </div>
        </div>

        <div className="border-t border-graphite-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-graphite-500 text-sm">
            &copy; {new Date().getFullYear()} Apex Build Construction. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-graphite-500">
            <Link to="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Header />
      <main className="flex-grow pt-20">
        <Outlet />
      </main>
      <Footer />
      
      {/* Sticky Mobile CTA */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-graphite-200 p-3 flex gap-3 z-40 shadow-[0_-4px_10px_rgba(0,0,0,0.05)]">
        <Button href="tel:+15551234567" variant="outline" className="flex-1 flex gap-2">
          <Phone size={18} /> Call
        </Button>
        <Button href="/contact" variant="primary" className="flex-1">
          Get Quote
        </Button>
      </div>
    </div>
  );
};
