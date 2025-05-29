import React, { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import '../index.css'; // Import the CSS file for animations

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100); // Delay for the animation to start
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="home" className="pt-32 pb-20 bg-gradient-to-br from-red-50 to-red-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6 ${isVisible ? 'slide-in fade-in' : ''}`}>
            <span className="text-red-600">Innovative</span> Digital Solutions for Your Business
          </h1>
          <p className={`text-lg md:text-xl text-gray-700 mb-10 leading-relaxed ${isVisible ? 'slide-in fade-in' : ''}`}>
            We're a passionate team of experts delivering cutting-edge programming, 
            creative design, and strategic digital marketing solutions to help your 
            business thrive in the digital landscape.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="#services" 
              className={`px-8 py-3 bg-black text-white rounded-lg font-medium hover:bg-red-700 transition-colors duration-300 flex items-center justify-center ${isVisible ? 'slide-in fade-in' : ''}`}
            >
              Explore Our Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a 
              href="#contact" 
              className={`px-8 py-3 bg-white text-red-600 border border-red-600 rounded-lg font-medium hover:bg-red-50 transition-colors duration-300 ${isVisible ? 'slide-in fade-in' : ''}`}
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default Hero;