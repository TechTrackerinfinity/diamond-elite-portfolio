
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { SearchIcon, Filter, Diamond } from 'lucide-react';

const Products = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  
  const categories = [
    { id: 'all', name: 'All Diamonds' },
    { id: 'round', name: 'Round Brilliant' },
    { id: 'princess', name: 'Princess Cut' },
    { id: 'emerald', name: 'Emerald Cut' },
    { id: 'oval', name: 'Oval' },
  ];
  
  const products = [
    {
      id: 1,
      name: 'Eternal Radiance',
      category: 'round',
      price: '$28,500',
      image: 'https://images.unsplash.com/photo-1482881497185-d4a9ddbe4151',
      specs: 'Round Brilliant, 3.2ct, Color D, VS1',
    },
    {
      id: 2,
      name: 'Royal Splendor',
      category: 'princess',
      price: '$34,750',
      image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05',
      specs: 'Princess Cut, 4.1ct, Color E, VVS2',
    },
    {
      id: 3,
      name: 'Celestial Elegance',
      category: 'emerald',
      price: '$42,900',
      image: 'https://images.unsplash.com/photo-1439337153520-7082a56a81f4',
      specs: 'Emerald Cut, 5.0ct, Color F, IF',
    },
    {
      id: 4,
      name: 'Infinity Brilliance',
      category: 'oval',
      price: '$31,200',
      image: 'https://images.unsplash.com/photo-1523712999610-f77fbcfc3843',
      specs: 'Oval, 3.8ct, Color G, VVS1',
    },
    {
      id: 5,
      name: 'Divine Clarity',
      category: 'round',
      price: '$25,800',
      image: 'https://images.unsplash.com/photo-1482881497185-d4a9ddbe4151',
      specs: 'Round Brilliant, 2.5ct, Color D, VVS2',
    },
    {
      id: 6,
      name: 'Majestic Purity',
      category: 'princess',
      price: '$38,400',
      image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05',
      specs: 'Princess Cut, 4.7ct, Color E, IF',
    },
  ];
  
  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(product => product.category === activeCategory);

  return (
    <section id="products" className="section-padding bg-zinc-50">
      <div className="container">
        <div className="section-title">
          <span className="inline-block text-diamond-gold font-medium mb-2">OUR COLLECTION</span>
          <h2 className="heading-lg text-diamond">Exquisite Diamonds</h2>
          <p className="max-w-2xl mx-auto text-diamond-accent mt-4">
            Discover our curated selection of the world's finest diamonds, each one a masterpiece of nature enhanced by our expert craftsmanship.
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          {/* Categories */}
          <div className="flex overflow-x-auto pb-2 md:pb-0 hide-scrollbar space-x-2 w-full md:w-auto">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={cn(
                  'px-4 py-2 rounded-full text-sm whitespace-nowrap transition-all',
                  activeCategory === category.id
                    ? 'bg-diamond text-white'
                    : 'bg-white text-diamond hover:bg-zinc-100'
                )}
              >
                {category.name}
              </button>
            ))}
          </div>
          
          {/* Search & Filter */}
          <div className="flex items-center space-x-2 w-full md:w-auto">
            <div className="relative flex-grow md:flex-grow-0">
              <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-400" />
              <input
                type="text"
                placeholder="Search diamonds..."
                className="w-full md:w-64 pl-10 pr-4 py-2 rounded-md border border-zinc-200 focus:outline-none focus:ring-1 focus:ring-diamond-gold"
              />
            </div>
            <button className="p-2 rounded-md bg-white border border-zinc-200 text-diamond hover:bg-zinc-50">
              <Filter className="h-5 w-5" />
            </button>
          </div>
        </div>
        
        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredProducts.map((product) => (
            <div key={product.id} className="diamond-card group animate-fade-in">
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-diamond to-transparent opacity-60"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <div className="flex justify-between items-end">
                    <h3 className="text-white font-playfair text-xl">{product.name}</h3>
                    <span className="text-diamond-gold font-medium">{product.price}</span>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <div className="flex items-center mb-3">
                  <Diamond className="h-4 w-4 text-diamond-gold mr-1" />
                  <span className="text-sm text-diamond-accent">{product.specs}</span>
                </div>
                <a href="#" className="btn-outline w-full text-center mt-2">View Details</a>
              </div>
            </div>
          ))}
        </div>
        
        {/* View All Button */}
        <div className="text-center mt-10">
          <a href="#" className="btn-primary">
            View Complete Collection
          </a>
        </div>
      </div>
    </section>
  );
};

export default Products;
