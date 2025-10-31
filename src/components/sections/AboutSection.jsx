import React from 'react';
import { CheckCircle } from 'lucide-react';
import { COLORS } from '../../constants/colors';


const AboutSection = () => {
  return (
    <section id="about" className={`py-20 bg-[${COLORS.lightGray}]`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:flex lg:items-center lg:space-x-12">
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <img 
              src={`https://github.com/GeorgeZa01/Project-Screenshots/blob/main/VOB/vobteam.jpg?raw=true`} 
              alt="VOB Baseball Training Session" 
              className="rounded-xl shadow-2xl w-full h-auto object-cover"
              onError={(e) => { e.target.onerror = null; e.target.src = `/vob-team`; }}
            />
          </div>
          <div className="lg:w-1/2">
            <h3 className="text-4xl font-bold mb-4">More Than Just a Club</h3>
            <p className="text-xl text-gray-700 mb-6">
              VOB Macaws is a pillar of the Cape Town baseball community, committed not just to winning titles, but to developing the game from grassroots to Major League level.
            </p>
            <ul className="space-y-4 text-gray-700">
              {[
                { strong: 'Local Hub:', text: 'Hosts for major events like the South African National Baseball Championships.' },
                { strong: 'Youth Focus:', text: 'Structured development programs fostering future champions like Josh November.' },
                { strong: 'Macaws Legacy:', text: 'A tradition of excellence established over decades at the Chukker Road Sports Complex.' },
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className={`w-6 h-6 text-[${COLORS.secondaryRed}] mr-3 mt-1 shrink-0`} />
                  <div>
                    <strong className="font-semibold">{item.strong}</strong> {item.text}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
