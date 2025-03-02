
import React from 'react';
import { Diamond, Facebook, Instagram, Twitter, Linkedin, Mail, ArrowRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-diamond text-white">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div className="space-y-4">
            <a href="#home" className="flex items-center gap-2 text-white font-playfair font-semibold text-xl">
              <Diamond className="h-6 w-6 text-diamond-gold" />
              <span>DIAMOND ELITE</span>
            </a>
            <p className="text-zinc-300 text-sm">
              Crafting exquisite diamonds with unparalleled precision and artistry since 1985. Each gem tells a story of excellence and beauty.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="#" className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors">
                <Twitter className="h-4 w-4" />
              </a>
              <a href="#" className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors">
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-playfair mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-zinc-300 hover:text-white transition-colors inline-flex items-center">
                  <ArrowRight className="h-3 w-3 mr-2" />
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-zinc-300 hover:text-white transition-colors inline-flex items-center">
                  <ArrowRight className="h-3 w-3 mr-2" />
                  About Us
                </a>
              </li>
              <li>
                <a href="#products" className="text-zinc-300 hover:text-white transition-colors inline-flex items-center">
                  <ArrowRight className="h-3 w-3 mr-2" />
                  Products
                </a>
              </li>
              <li>
                <a href="#gallery" className="text-zinc-300 hover:text-white transition-colors inline-flex items-center">
                  <ArrowRight className="h-3 w-3 mr-2" />
                  Gallery
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-zinc-300 hover:text-white transition-colors inline-flex items-center">
                  <ArrowRight className="h-3 w-3 mr-2" />
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#contact" className="text-zinc-300 hover:text-white transition-colors inline-flex items-center">
                  <ArrowRight className="h-3 w-3 mr-2" />
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-lg font-playfair mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-zinc-300 hover:text-white transition-colors inline-flex items-center">
                  <ArrowRight className="h-3 w-3 mr-2" />
                  Custom Diamond Cutting
                </a>
              </li>
              <li>
                <a href="#" className="text-zinc-300 hover:text-white transition-colors inline-flex items-center">
                  <ArrowRight className="h-3 w-3 mr-2" />
                  Diamond Certification
                </a>
              </li>
              <li>
                <a href="#" className="text-zinc-300 hover:text-white transition-colors inline-flex items-center">
                  <ArrowRight className="h-3 w-3 mr-2" />
                  Diamond Appraisal
                </a>
              </li>
              <li>
                <a href="#" className="text-zinc-300 hover:text-white transition-colors inline-flex items-center">
                  <ArrowRight className="h-3 w-3 mr-2" />
                  Private Consultations
                </a>
              </li>
              <li>
                <a href="#" className="text-zinc-300 hover:text-white transition-colors inline-flex items-center">
                  <ArrowRight className="h-3 w-3 mr-2" />
                  Wholesale Distribution
                </a>
              </li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-playfair mb-4">Newsletter</h3>
            <p className="text-zinc-300 text-sm mb-4">
              Subscribe to our newsletter for exclusive insights, new collection announcements, and special events.
            </p>
            <form className="space-y-3">
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-400" />
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full pl-10 pr-4 py-2 rounded-md bg-white/10 border border-white/20 text-white placeholder:text-zinc-400 focus:outline-none focus:ring-1 focus:ring-diamond-gold"
                />
              </div>
              <button type="submit" className="w-full py-2 rounded-md bg-diamond-gold text-diamond font-medium hover:bg-opacity-90 transition-colors">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-10 pt-6 text-center text-zinc-400 text-sm">
          <p>© {new Date().getFullYear()} Diamond Elite. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
