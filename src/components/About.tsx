
import React from 'react';
import { Diamond, Award, Shield } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container">
        <div className="section-title">
          <span className="inline-block text-diamond-gold font-medium mb-2">OUR LEGACY</span>
          <h2 className="heading-lg text-diamond">Crafting Excellence Since 1985</h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image */}
          <div className="relative rounded-lg overflow-hidden animate-scale-in">
            <img 
              src="https://images.unsplash.com/photo-1523712999610-f77fbcfc3843" 
              alt="Our Diamond Craftsmanship" 
              className="w-full h-[500px] object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-diamond to-transparent">
              <p className="text-white font-playfair italic">
                "Perfection is not attainable, but if we chase perfection, we can catch excellence."
              </p>
            </div>
          </div>
          
          {/* Right Column - Text Content */}
          <div className="space-y-8">
            <p className="body-lg text-diamond-accent">
              At Diamond Elite, we have dedicated over three decades to the pursuit of perfection in diamond manufacturing. Our journey began with a simple vision: to create the world's most exquisite diamonds through uncompromising craftsmanship and innovation.
            </p>
            
            <p className="body-md">
              Each diamond that bears our name undergoes a meticulous process of selection, cutting, and polishing by our master craftsmen, many of whom have been with us for generations. We source only the finest rough diamonds from ethical suppliers, ensuring that every gem in our collection not only meets but exceeds the highest standards of quality and brilliance.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
              <div className="flex flex-col items-center text-center p-4 glass-panel">
                <Diamond className="h-10 w-10 text-diamond-gold mb-3" />
                <h3 className="text-diamond font-medium mb-1">Superior Quality</h3>
                <p className="text-sm text-diamond-accent">Only the finest gems make it into our collection</p>
              </div>
              
              <div className="flex flex-col items-center text-center p-4 glass-panel">
                <Award className="h-10 w-10 text-diamond-gold mb-3" />
                <h3 className="text-diamond font-medium mb-1">Master Craftsmanship</h3>
                <p className="text-sm text-diamond-accent">Cut to perfection by expert artisans</p>
              </div>
              
              <div className="flex flex-col items-center text-center p-4 glass-panel">
                <Shield className="h-10 w-10 text-diamond-gold mb-3" />
                <h3 className="text-diamond font-medium mb-1">Ethical Sourcing</h3>
                <p className="text-sm text-diamond-accent">Responsibly acquired from trusted partners</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
