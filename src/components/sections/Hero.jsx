import React from 'react';
import { COLORS } from '../../constants/colors';
import MacawButton from '../common/MacawButton';

const Hero = () => (
  <section id="home" 
    className={`h-[60vh] md:h-[80vh] flex items-center justify-center text-center relative overflow-hidden bg-[${COLORS.primaryDark}]`} 
    style={{
      backgroundImage: `url('https://scontent-cpt1-1.xx.fbcdn.net/v/t39.30808-6/481075118_10165349735314657_8605545604802061396_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=111&ccb=1-7&_nc_sid=aa7b47&_nc_eui2=AeElfLOuH-guycu_L8b3vtmB2FTCy2qbgGbYVMLLapuAZke-GkBG1ZT8R4MGV1UVl9XfZ7jNil7_6_srctoTbY7X&_nc_ohc=5GKhMdHk9CMQ7kNvwHUqZwz&_nc_oc=Adkqqrr4ApUqrPA14ipu7XVwmkwalXubss4TdwxMNMHkb-D58VTwnK_bNcx8R7iZNXU&_nc_zt=23&_nc_ht=scontent-cpt1-1.xx&_nc_gid=bdLvKSa4d-_L4Wpu6z65kg&oh=00_AfdivYoJ5l_8J4Wup-pHHfmd68hIZ0di4WF10ODM_EPAAg&oe=690A87BA')`, // `url('https://placehold.co/1920x800/${COLORS.primaryDark.substring(1)}/${COLORS.accentYellow.substring(1)}?text=VOB+MACAWS+BASEBALL+FIELD')`, 
      backgroundSize: 'cover', 
      backgroundPosition: 'center'
    }}>
    
    <div className={`absolute inset-0 bg-[${COLORS.primaryDark}] opacity-80`}></div>
    <div className="z-10 p-6 max-w-4xl">
      <p className={`text-[${COLORS.accentYellow}] text-lg font-semibold uppercase tracking-widest mb-2`}>
        Chukker Road, Cape Town
      </p>
      <h2 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-4">
        The Pride of Western Cape Baseball
      </h2>
      <p className="text-white text-xl md:text-2xl mb-8 opacity-90">
        Home of the <b>Macaws</b> - Major League Playoff Champions & Unbeaten Season Record Holders.
      </p>
      <div className="space-x-4">
        <MacawButton href="#teams" style="primary">
          View Teams
        </MacawButton>
        <MacawButton href="https://docs.google.com/forms/d/e/1FAIpQLSeUn6Xfx2OfmLnd3wKdwwMLt2nJzH3LRki6IIW4cnyUisMCxg/viewform?vc=0&c=0&w=1&flr=0 " style="secondary">
          Join The Club
        </MacawButton>
      </div>
    </div>
  </section>
);

export default Hero;