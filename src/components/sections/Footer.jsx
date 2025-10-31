import React from 'react';
import { Instagram, Facebook, Twitter } from 'lucide-react';
import { COLORS } from '../../constants/colors';

const socialLinks = [
  { icon: Instagram, label: 'Instagram', href: '#' },
  { icon: Facebook, label: 'Facebook', href: '#' },
  { icon: Twitter, label: 'Twitter', href: '#' },
];

const Footer = () => (
  <footer className={`bg-[${COLORS.primaryDark}] text-white py-10`}>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <div className="mb-4">
        <img 
          src={`https://raw.githubusercontent.com/GeorgeZa01/Project-Screenshots/5e6c1bd2a722bbb1402e831b8485fe7e28ed4a9d/VOB/vov-logo.svg`} 
          alt="VOB Macaws Baseball Club Logo" 
          className="h-10 md:h-12 w-auto mx-auto mb-2"
        />
        <p className="text-sm text-gray-400">The home of baseball in Lansdowne, Cape Town.</p>
      </div>
      
      {/* Social Icons */}
      <div className="flex justify-center space-x-6 mb-6">
        {socialLinks.map(({ icon: Icon, label, href }) => (
          <a key={label} href={href} aria-label={label} className={`text-gray-400 hover:text-[${COLORS.accentYellow}] transition duration-200`}>
            <Icon className="w-6 h-6" />
          </a>
        ))}
      </div>

      <p className="text-sm text-gray-500">
        &copy; 2025 VOB Baseball Club. All Rights Reserved.
      </p>
    </div>
  </footer>
);

export default Footer;