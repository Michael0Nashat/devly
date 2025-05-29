import React from 'react';
import { Users } from 'lucide-react';

const JoinUs: React.FC = () => {
  return (
    <section id="join-us" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block p-3 bg-red-100 rounded-full text-red-600 mb-4 animate-bounce">
              <Users className="h-8 w-8" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Join Our Team</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We're always looking for talented individuals who are passionate about technology, design, and marketing to join our growing team.
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-100 transition-transform transform hover:scale-105">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-gray-900">Why Work With Us</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-black-600 mr-2">•</span>
                    <span className="text-gray-700">Collaborative work environment</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-black-600 mr-2">•</span>
                    <span className="text-gray-700">Continuous learning opportunities</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-black-600 mr-2">•</span>
                    <span className="text-gray-700">Work on exciting, cutting-edge projects</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-black-600 mr-2">•</span>
                    <span className="text-gray-700">Competitive compensation and benefits</span>
                  </li>
                </ul>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-gray-900">Open Positions</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-black-600 mr-2">•</span>
                    <span className="text-gray-700">Full Stack Developer</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-black-600 mr-2">•</span>
                    <span className="text-gray-700">UI/UX Designer</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-black-600 mr-2">•</span>
                    <span className="text-gray-700">Digital Marketing Specialist</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-black-600 mr-2">•</span>
                    <span className="text-gray-700">Project Manager</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <a 
                href="mailto:careers@devly.com" 
                className="w-full px-6 py-3 bg-black text-white rounded-lg font-medium hover:bg-red-700 transition-colors duration-300 transform hover:scale-105"
              >
                Apply Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinUs;