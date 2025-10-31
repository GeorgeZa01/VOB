import React from 'react';
import { Trophy, Zap, MapPin } from 'lucide-react';
import { COLORS } from '../../constants/colors';

const statData = [
  { count: '2025', label: 'Play-off Champions', icon: Trophy },
  { count: '3', label: 'Consecutive Wins', icon: Zap },
  { count: 'Home', label: 'Chukker Road Field', icon: MapPin },
];

const GlorySection = () => (
  <section className={`bg-[${COLORS.lightGray}] py-16`}>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h3 className="text-4xl font-bold">RECENT GLORY</h3>
        <div className={`w-16 h-1 bg-[${COLORS.secondaryRed}] mx-auto mt-3`}></div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        {statData.map((item, index) => {
          const Icon = item.icon;
          return (
            <div key={index} className={`bg-white p-6 rounded-xl shadow-2xl border-b-4 border-[${COLORS.secondaryRed}]`}>
              <Icon className={`w-12 h-12 text-[${COLORS.secondaryRed}] mx-auto mb-4 fill-[${COLORS.secondaryRed}]/20`} />
              <p className={`text-5xl font-extrabold text-[${COLORS.primaryDark}] mb-2`}>{item.count}</p>
              <p className="text-lg font-semibold text-gray-700 uppercase tracking-wider">{item.label}</p>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

export default GlorySection;