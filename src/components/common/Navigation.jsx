import React from 'react';
import { COLORS } from '../../constants/colors';

// Reusable component for the Header Navigation Link (Desktop)
export const NavLink = ({ href, children }) => (
  <a href={href} 
    className={`text-white hover:text-[${COLORS.secondaryRed}] transition duration-200`}>
    {children}
  </a>
);

// Mobile Navigation Link
export const MobileNavLink = ({ href, children, onClick }) => (
  <a href={href} 
    onClick={onClick}
    className={`text-white hover:bg-[${COLORS.secondaryRed}] hover:text-white block px-3 py-2 rounded-md text-base font-medium transition duration-200`}>
    {children}
  </a>
);