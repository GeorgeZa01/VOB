import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { COLORS } from '../../constants/colors';
import { NavLink, MobileNavLink } from '../common/Navigation';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#news", label: "News & Results" },
    { href: "#teams", label: "Teams" },
    { href: "#about", label: "About Us" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className={`bg-[${COLORS.primaryDark}] shadow-lg sticky top-0 z-50`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img 
            src={`https://raw.githubusercontent.com/GeorgeZa01/Project-Screenshots/5e6c1bd2a722bbb1402e831b8485fe7e28ed4a9d/VOB/vov-logo.svg`} 
            alt="VOB Macaws Baseball Club Logo" 
            className="h-10 md:h-12 w-auto" 
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 text-lg">
          {navItems.map(item => (
            <NavLink key={item.href} href={item.href}>{item.label}</NavLink>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button 
          onClick={toggleMenu} 
          className="md:hidden text-white focus:outline-none p-1 rounded-md"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
        >
          {isMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
        </button>
      </div>
      
      {/* Mobile Menu Dropdown */}
      <div id="mobile-menu" 
        className={`md:hidden bg-[${COLORS.primaryDark}] px-2 pt-2 pb-3 space-y-1 transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        {navItems.map(item => (
          <MobileNavLink key={item.href} href={item.href} onClick={() => setIsMenuOpen(false)}>
            {item.label}
          </MobileNavLink>
        ))}
      </div>
    </header>
  );
};

export default Header;