import React from 'react';
import { Code, Palette, LineChart } from 'lucide-react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, className }) => {
  return (
    <div className={`bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 transform hover:scale-105 hover:rotate-1 transition-transform duration-300 border border-gray-100 flex flex-col items-center text-center group ${className || ''} animate-fade-in`}>
      <div className="p-4 bg-red-50 rounded-full mb-6 text-red-600 group-hover:bg-black group-hover:text-white transition-colors duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
};

const Services: React.FC = () => {
  const services = [
    {
      icon: <Code className="h-8 w-8" />,
      title: "Programming",
      description: "Custom software development, web applications, mobile apps, and API integrations tailored to your business needs."
    },
    {
      icon: <Palette className="h-8 w-8" />,
      title: "Design",
      description: "User-centered UI/UX design, branding, graphic design, and visual storytelling that captivates your audience."
    },
    {
      icon: <LineChart className="h-8 w-8" />,
      title: "Digital Marketing",
      description: "Data-driven SEO, content marketing, social media management, and PPC campaigns to grow your online presence."
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">Our Services</h2>
          <p className="text-gray-600 text-lg">
            We provide comprehensive digital solutions to help your business succeed in today's competitive landscape.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              className="fade-in"
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;