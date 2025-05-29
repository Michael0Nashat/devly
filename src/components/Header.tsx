import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, sectionId: string) => {
    e.preventDefault();
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <motion.header 
      initial={{ opacity: 0, y: -20 }}
      animate={{ 
        opacity: mounted ? 1 : 0, 
        y: mounted ? 0 : -20,
        backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.98)' : 'rgba(255, 255, 255, 0)',
        backdropFilter: scrolled ? 'blur(10px)' : 'none',
        paddingTop: scrolled ? '0.75rem' : '1.25rem',
        paddingBottom: scrolled ? '0.75rem' : '1.25rem',
      }}
      transition={{ 
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1],
        backgroundColor: { duration: 0.3 },
        backdropFilter: { duration: 0.3 }
      }}
      className="fixed top-0 left-0 right-0 z-50 shadow-sm"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center cursor-pointer"
            >
              <img 
                src="/Logo-De-Devly-Web.png" 
                alt="Devly Logo" 
                className="h-10 w-auto"
              />
              <motion.span 
                className="ml-2 text-2xl font-bold bg-gradient-to-r from-black to-red-600 bg-clip-text text-transparent"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                Devly
              </motion.span>
            </motion.div>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {['#home', '#services', '#contact', '#join-us'].map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <NavLink 
                  href={item} 
                  label={item.replace('#', '').replace('-us', ' us')}
                  onClick={(e) => scrollToSection(e, item)}
                />
              </motion.div>
            ))}
          </nav>
          
          {/* Mobile Navigation Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-500 hover:text-gray-700 focus:outline-none"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="md:hidden overflow-hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
              {['#home', '#services', '#contact', '#join-us'].map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.1 * index }}
                >
                  <MobileNavLink 
                    href={item} 
                    label={item.replace('#', '').replace('-us', ' us')}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(e, item);
                      setTimeout(() => {
                        setIsOpen(false);
                      }, 900); // delay to allow scroll to start
                    }}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

interface NavLinkProps {
  href: string;
  label: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
}

const NavLink: React.FC<NavLinkProps> = ({ href, label, onClick }) => (
  <a
    href={href}
    onClick={onClick}
    className="relative px-3 py-2 text-black hover:text-red-600 transition-colors duration-300 group"
  >
    {label}
    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full"></span>
  </a>
);

const MobileNavLink: React.FC<NavLinkProps> = ({ href, label, onClick }) => (
  <a
    href={href}
    onClick={onClick}
    className="block px-4 py-3 rounded-lg text-base font-medium text-gray-800 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-200 transform hover:translate-x-1"
  >
    {label}
  </a>
);

export default Header;
