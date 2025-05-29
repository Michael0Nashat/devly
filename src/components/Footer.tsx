import React from 'react';
import { Mail, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  return (
    <motion.footer 
      className="bg-white py-12 border-t border-gray-100"
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="flex items-center mb-6 md:mb-0">
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
          
          <motion.div className="flex space-x-6">
            <motion.a 
              href="mailto:contact@devly.com"
              className="text-gray-600 hover:text-red-600 transition-colors duration-300 flex items-center"
              whileHover={{ y: -2, scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail className="h-5 w-5" />
            </motion.a>
            <motion.a 
              href="https://linkedin.com/company/devly" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-red-600 transition-colors duration-300 flex items-center"
              whileHover={{ y: -2, scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Linkedin className="h-5 w-5" />
            </motion.a>
          </motion.div>
        </div>
        
        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 mb-4 md:mb-0">
              &copy; Devly 2025. All rights reserved.
            </p>
            <div className="flex space-x-8">
              <div className="space-x-6">
                {['#home', '#services', '#contact', '#join-us'].map((item) => (
                  <motion.a 
                    key={item}
                    href={item} 
                    className="text-gray-600 hover:text-red-600 transition-colors duration-300"
                    whileHover={{ y: -2, scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {item.replace('#', '').replace('-us', ' us')}
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;