import React from 'react';
import { ArrowRight } from 'lucide-react';
import { COLORS } from '../../constants/colors';

const NewsSection = () => {
  return (
    <section id="news" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h3 className="text-4xl font-bold">MACAWS IN THE NEWS</h3>
          <div className={`w-16 h-1 bg-[${COLORS.secondaryRed}] mx-auto mt-3`}></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {[
            { 
              tag: 'MAJOR LEAGUE', 
              title: 'VOB Maintains Unbeaten Run with Emphatic Victory', 
              body: 'Playing at home at Chukker Road, VOB Macaws continued their dominance with a commanding 11-2 victory over the Bellville Tygers. The combined pitching brilliance of Jesse Johnson and Tyron Brickhill limited Bellville to just one hit.', 
              sub: 'Key Players: Luke November, Liam Willenberg, Jordyn Riffel (Consistent Hitting)',
              linkText: 'Read Full Article'
            },
            { 
              tag: 'CHAMPIONS', 
              title: 'VOB Clinches Cape Town Baseball Play-off Title', 
              body: 'Led by coaches Kevin Johnson and Jody Burch, the Macaws secured the Major League Play-off title by defeating the Bellville Tygers 8-1 and 11-5 in the final series at Chukker Road, highlighting a commitment to nurturing young talent like 18-year-old pitcher Josh November.', 
              sub: 'Coaches: Kevin Johnson, Jody Burch',
              linkText: 'View History'
            },
          ].map((item, index) => (
            <div key={index} className="bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-100">
              <div className="p-6">
                <span className={`inline-block bg-[${item.tag === 'CHAMPIONS' ? COLORS.primaryDark : COLORS.secondaryRed}] text-white text-xs font-bold px-3 py-1 rounded-full mb-4`}>{item.tag}</span>
                <h4 className={`text-2xl font-bold text-[${COLORS.primaryDark}] mb-3`}>{item.title}</h4>
                <p className="text-gray-600 mb-4">{item.body}</p>
                <p className="text-sm font-semibold text-gray-500">{item.sub}</p>
                <a href="#" className={`text-[${COLORS.secondaryRed}] font-semibold mt-4 inline-flex items-center hover:underline`}>
                  {item.linkText}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
