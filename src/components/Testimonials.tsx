
import React from 'react';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Elizabeth Warren',
      role: 'Jewelry Collector',
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
      content: 'The exceptional quality of Diamond Elite's gems is unmatched. Each piece I've acquired has exceeded my expectations in brilliance and craftsmanship.',
      rating: 5,
    },
    {
      id: 2,
      name: 'James Richardson',
      role: 'Luxury Retail Partner',
      image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05',
      content: 'As a retailer of fine jewelry, I trust only Diamond Elite for our diamond needs. Their consistent quality and ethical practices set them apart in the industry.',
      rating: 5,
    },
    {
      id: 3,
      name: 'Alexandra Chen',
      role: 'Private Client',
      image: 'https://images.unsplash.com/photo-1482881497185-d4a9ddbe4151',
      content: 'Working with Diamond Elite on my custom engagement ring was a dream. Their attention to detail and personalized service created a truly one-of-a-kind piece.',
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="section-padding bg-zinc-50">
      <div className="container">
        <div className="section-title">
          <span className="inline-block text-diamond-gold font-medium mb-2">CLIENT EXPERIENCES</span>
          <h2 className="heading-lg text-diamond">What Our Clients Say</h2>
          <p className="max-w-2xl mx-auto text-diamond-accent mt-4">
            The trust and satisfaction of our clients is our greatest achievement. Here's what they have to say about their Diamond Elite experience.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="glass-panel p-6 md:p-8 flex flex-col animate-fade-in"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-medium text-diamond">{testimonial.name}</h3>
                  <p className="text-sm text-diamond-accent">{testimonial.role}</p>
                </div>
              </div>
              
              <div className="flex mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-diamond-gold text-diamond-gold" />
                ))}
              </div>
              
              <p className="text-diamond-accent italic flex-grow">"{testimonial.content}"</p>
              
              <div className="mt-6 pt-4 border-t border-zinc-200">
                <div className="text-diamond-gold text-sm font-medium">Verified Purchase</div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Trust Indicators */}
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 mt-16">
          <div className="text-center">
            <div className="text-4xl font-playfair text-diamond-gold font-semibold mb-2">98%</div>
            <p className="text-sm text-diamond-accent">Client Satisfaction</p>
          </div>
          
          <div className="text-center">
            <div className="text-4xl font-playfair text-diamond-gold font-semibold mb-2">35+</div>
            <p className="text-sm text-diamond-accent">Years of Excellence</p>
          </div>
          
          <div className="text-center">
            <div className="text-4xl font-playfair text-diamond-gold font-semibold mb-2">1000+</div>
            <p className="text-sm text-diamond-accent">Luxury Clients</p>
          </div>
          
          <div className="text-center">
            <div className="text-4xl font-playfair text-diamond-gold font-semibold mb-2">12</div>
            <p className="text-sm text-diamond-accent">International Awards</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
