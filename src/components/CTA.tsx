import React from 'react';
import { MessageSquare, Calendar } from 'lucide-react';

const CTA: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-black text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 transition-transform transform hover:scale-105">
            Ready to Transform Your Digital Presence?
          </h2>
          <p className="text-lg md:text-xl mb-10 opacity-90 transition-opacity duration-300 hover:opacity-100">
            Let's discuss how our expertise can help your business grow. Reach out to us today for a personalized solution.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a 
              href="https://wa.me/1234567890" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white text-red-600 rounded-lg font-medium hover:bg-red-50 transition-colors duration-300 flex items-center justify-center transform transition-transform duration-300 hover:scale-105"
            >
              <MessageSquare className="mr-2 h-5 w-5" />
              Message us on WhatsApp
            </a>
            <a 
              href="#" 
              className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-medium hover:bg-white hover:text-red-600 transition-colors duration-300 flex items-center justify-center transform transition-transform duration-300 hover:scale-105"
            >
              <Calendar className="mr-2 h-5 w-5" />
              Book a Free Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;