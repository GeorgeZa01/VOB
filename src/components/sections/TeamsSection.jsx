import React from 'react';
import { Sword, Award, Zap } from 'lucide-react';
import { COLORS } from '../../constants/colors';

const TeamsSection = () => {
  return (
    <section id="teams" className={`bg-[${COLORS.primaryLight}] text-white py-20`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h3 className="text-4xl font-bold text-white">OUR TEAMS & DEVELOPMENT</h3>
          <div className={`w-16 h-1 bg-[${COLORS.secondaryRed}] mx-auto mt-3`}></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: 'Major League (Seniors)', body: 'The elite team competing at the highest level of Cape Town Baseball, consistently delivering championship-winning performance and showcasing top local talent.', icon: 'Sword' },
            { title: 'Youth & Juniors', body: 'The backbone of the club\'s future. We are dedicated to nurturing young talent, providing comprehensive training and competitive exposure, including hosting national events.', icon: 'Award' },
            { title: 'Softball Program', body: 'VOB proudly fields competitive teams in the Cape Town Softball leagues, offering excellent facilities and coaching for all age groups.', icon: 'Flame' },
          ].map((item, index) => {
            const Icon = item.icon === 'Sword' ? Sword : item.icon === 'Award' ? Award : Zap;
            return (
              <div key={index} className={`bg-[${COLORS.primaryDark}] p-6 rounded-xl shadow-2xl text-center border-t-4 border-[${COLORS.secondaryRed}]`}>
                <Icon className={`w-10 h-10 text-[${COLORS.accentYellow}] mx-auto mb-4`} />
                <h4 className="text-2xl font-bold mb-3">{item.title}</h4>
                <p className="text-gray-300">{item.body}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TeamsSection;
