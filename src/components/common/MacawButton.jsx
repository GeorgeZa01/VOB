import React from 'react';
import { COLORS } from '../../constants/colors';

const MacawButton = ({ children, href, style = 'primary' }) => {
  let classes = `inline-block font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:translate-y-[-2px] text-lg `;

  // Note: Tailwind requires the full color value for dynamic classes.
  // Using array notation for JIT/AOT modes to recognize the dynamic classes based on COLORS.
  if (style === 'primary') {
    classes += `bg-[${COLORS.secondaryRed}] text-white hover:shadow-xl hover:shadow-[${COLORS.secondaryRed}50]`;
  } else { // style === 'secondary'
    classes += `bg-white text-[${COLORS.primaryDark}] hover:shadow-xl hover:shadow-gray-300`;
  }

  return (
    <a href={href} className={classes}>
      {children}
    </a>
  );
};

export default MacawButton;