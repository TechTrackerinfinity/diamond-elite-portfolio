
import React from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container">
        <div className="section-title">
          <span className="inline-block text-diamond-gold font-medium mb-2">GET IN TOUCH</span>
          <h2 className="heading-lg text-diamond">Contact Us</h2>
          <p className="max-w-2xl mx-auto text-diamond-accent mt-4">
            We welcome inquiries from discerning clients. Our diamond specialists are ready to assist you with personalized service and expert guidance.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-10">
          {/* Contact Form */}
          <div className="glass-panel p-6 md:p-8 animate-fade-in">
            <h3 className="text-xl font-playfair mb-6">Send Us a Message</h3>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-diamond mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 rounded-md border border-zinc-200 focus:outline-none focus:ring-1 focus:ring-diamond-gold"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-diamond mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 rounded-md border border-zinc-200 focus:outline-none focus:ring-1 focus:ring-diamond-gold"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-diamond mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-2 rounded-md border border-zinc-200 focus:outline-none focus:ring-1 focus:ring-diamond-gold"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-diamond mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-2 rounded-md border border-zinc-200 focus:outline-none focus:ring-1 focus:ring-diamond-gold resize-none"
                  required
                ></textarea>
              </div>
              
              <div>
                <button type="submit" className="btn-primary w-full">
                  <Send className="h-4 w-4 mr-2" />
                  Send Message
                </button>
              </div>
            </form>
          </div>
          
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="glass-panel p-6 md:p-8 animate-fade-in">
              <h3 className="text-xl font-playfair mb-6">Contact Information</h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-diamond-gold mt-1 mr-3" />
                  <div>
                    <h4 className="font-medium text-diamond">Our Location</h4>
                    <p className="text-diamond-accent">1250 Diamond District, New York, NY 10036</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="h-5 w-5 text-diamond-gold mt-1 mr-3" />
                  <div>
                    <h4 className="font-medium text-diamond">Phone Number</h4>
                    <p className="text-diamond-accent">+1 (212) 555-7890</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="h-5 w-5 text-diamond-gold mt-1 mr-3" />
                  <div>
                    <h4 className="font-medium text-diamond">Email Address</h4>
                    <p className="text-diamond-accent">info@diamondelite.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock className="h-5 w-5 text-diamond-gold mt-1 mr-3" />
                  <div>
                    <h4 className="font-medium text-diamond">Business Hours</h4>
                    <p className="text-diamond-accent">Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p className="text-diamond-accent">Saturday: 10:00 AM - 4:00 PM (By Appointment)</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Map */}
            <div className="h-[300px] rounded-lg overflow-hidden animate-fade-in">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.3509877568825!2d-73.98568192439536!3d40.75602167138796!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c258fe4d0cfc0d%3A0x48dd34a4dad69a3!2sDiamond%20District%2C%20New%20York%2C%20NY%2010036%2C%20USA!5e0!3m2!1sen!2suk!4v1687974012566!5m2!1sen!2suk"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Diamond Elite Location"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
