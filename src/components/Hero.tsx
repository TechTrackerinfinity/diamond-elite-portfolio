
import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-diamond to-transparent opacity-80"></div>
        <img 
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb" 
          alt="Luxury Diamond Background" 
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 md:px-6 py-12 md:py-20">
        <div className="max-w-2xl space-y-6 animate-fade-in-slow">
          <h1 className="heading-xl text-white">
            Extraordinary <span className="text-diamond-gold">Diamonds</span> of Unparalleled Beauty
          </h1>
          
          <p className="body-lg text-white/90 max-w-lg">
            Experience the pinnacle of diamond craftsmanship. Each gem is meticulously cut to perfection, revealing its true brilliance and fire.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a href="#products" className="btn-primary">
              Explore Collection
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
            
            <a href="#about" className="btn-outline text-white border-white hover:bg-white hover:text-diamond">
              Our Story
            </a>
          </div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
      
      <div className="absolute -bottom-16 -right-16 w-64 h-64 bg-diamond-gold opacity-10 rounded-full blur-3xl"></div>
      <div className="absolute top-1/4 -left-24 w-48 h-48 bg-diamond-silver opacity-10 rounded-full blur-2xl"></div>
    </section>
  );
};

export default Hero;
