import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Website Name */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Prabash7Tech</h3>
            <p className="text-gray-400">
              Learn Programming in Simple Telugu
            </p>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <a 
              href="mailto:contact@prabash7tech.com" 
              className="text-gray-400 hover:text-white transition duration-300"
            >
              📧 contact@prabash7tech.com
            </a>
          </div>
          
          {/* Social Media */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a 
                href="https://youtube.com/@prabash7tech" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-white transition duration-300 text-2xl"
                aria-label="YouTube"
              >
                ▶️
              </a>
              <a 
                href="https://twitter.com/prabash7tech" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-white transition duration-300 text-2xl"
                aria-label="Twitter"
              >
                🐦
              </a>
              <a 
                href="https://linkedin.com/in/prabash7tech" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-white transition duration-300 text-2xl"
                aria-label="LinkedIn"
              >
                💼
              </a>
              <a 
                href="https://github.com/rprabash7" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-white transition duration-300 text-2xl"
                aria-label="GitHub"
              >
                🔗
              </a>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400">
            © 2026 Prabash7Tech. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
