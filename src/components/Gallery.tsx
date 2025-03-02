
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { ArrowLeft, ArrowRight, ZoomIn } from 'lucide-react';

const Gallery = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const galleryImages = [
    {
      id: 1,
      src: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
      title: 'Diamond Cutting Process',
      description: 'Precision cutting by our master craftsmen',
    },
    {
      id: 2,
      src: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05',
      title: 'Polishing Perfection',
      description: 'Bringing out the brilliance and fire',
    },
    {
      id: 3,
      src: 'https://images.unsplash.com/photo-1482881497185-d4a9ddbe4151',
      title: 'Final Inspection',
      description: 'Meeting our exacting standards of quality',
    },
    {
      id: 4,
      src: 'https://images.unsplash.com/photo-1439337153520-7082a56a81f4',
      title: 'Finished Masterpieces',
      description: 'Ready to become cherished heirlooms',
    },
  ];
  
  const nextSlide = () => {
    setActiveIndex((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1));
  };
  
  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1));
  };

  return (
    <section id="gallery" className="section-padding bg-white">
      <div className="container">
        <div className="section-title">
          <span className="inline-block text-diamond-gold font-medium mb-2">OUR CRAFTSMANSHIP</span>
          <h2 className="heading-lg text-diamond">The Art of Diamond Making</h2>
          <p className="max-w-2xl mx-auto text-diamond-accent mt-4">
            Witness the journey of our diamonds from rough stones to brilliant gems through our meticulous crafting process.
          </p>
        </div>
        
        {/* Gallery Showcase */}
        <div className="relative mt-10 max-w-4xl mx-auto">
          <div className="relative overflow-hidden aspect-video rounded-lg shadow-lg">
            {galleryImages.map((image, index) => (
              <div
                key={image.id}
                className={cn(
                  'absolute inset-0 transition-opacity duration-500',
                  index === activeIndex ? 'opacity-100' : 'opacity-0'
                )}
              >
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-diamond to-transparent opacity-60"></div>
                
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <h3 className="text-white font-playfair text-2xl md:text-3xl">{image.title}</h3>
                  <p className="text-white/80 mt-2">{image.description}</p>
                </div>
                
                <button className="absolute top-4 right-4 p-2 rounded-full bg-white/20 text-white backdrop-blur-sm hover:bg-white/30 transition-colors">
                  <ZoomIn className="h-5 w-5" />
                </button>
              </div>
            ))}
          </div>
          
          {/* Navigation Controls */}
          <div className="absolute top-1/2 left-4 -translate-y-1/2">
            <button
              onClick={prevSlide}
              className="p-2 rounded-full bg-white/20 text-white backdrop-blur-sm hover:bg-white/30 transition-colors"
              aria-label="Previous image"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>
          </div>
          
          <div className="absolute top-1/2 right-4 -translate-y-1/2">
            <button
              onClick={nextSlide}
              className="p-2 rounded-full bg-white/20 text-white backdrop-blur-sm hover:bg-white/30 transition-colors"
              aria-label="Next image"
            >
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
          
          {/* Indicators */}
          <div className="flex justify-center space-x-2 mt-4">
            {galleryImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={cn(
                  'w-2 h-2 rounded-full transition-all',
                  index === activeIndex ? 'bg-diamond-gold w-6' : 'bg-zinc-300'
                )}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
        
        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
          {galleryImages.map((image) => (
            <div 
              key={image.id} 
              className="relative overflow-hidden rounded-md aspect-square group animate-fade-in"
              onClick={() => setActiveIndex(galleryImages.findIndex(img => img.id === image.id))}
            >
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-diamond bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300 flex items-center justify-center">
                <ZoomIn className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
