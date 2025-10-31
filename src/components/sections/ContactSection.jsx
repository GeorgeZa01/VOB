// src/components/sections/ContactSection.jsx - UPDATED MAP PART

import React from 'react';
import { MapPin, Mail, Phone } from 'lucide-react';

// ... (contactDetails array remains the same)

const ContactSection = () => (
  <section id="contact" className="section-padding">
    <div className="container">
      {/* ... (Header remains the same) */}
      
      <div className="contact-grid">
        
        {/* Contact Info Card remains the same */}
        <div className="contact-info-card">
          {/* ... (Details List remains the same) ... */}
          {/* ... (The map-placeholder was here) */}
        </div>

        {/* --- MAP INTEGRATION (NEW) --- */}
        <div 
            className="map-container"
            // Use an inline style to ensure the map fills the grid space
            style={{ 
                borderRadius: '0.75rem', 
                overflow: 'hidden', 
                boxShadow: '0 20px 25px rgba(0, 0, 0, 0.1), 0 8px 10px rgba(0, 0, 0, 0.04)' 
            }}
        >
            {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3742.722427362986!2d18.491204340729027!3d-33.99966172596128!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc43123bdab971%3A0x6b98640778e03664!2sVOB%20Macaws%20Baseball%20and%20Softball%20Club!5e1!3m2!1sen!2sza!4v1761913305512!5m2!1sen!2sza" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
            <iframe 
                title="VOB Macaws Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3742.722427362986!2d18.491204340729027!3d-33.99966172596128!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc43123bdab971%3A0x6b98640778e03664!2sVOB%20Macaws%20Baseball%20and%20Softball%20Club!5e1!3m2!1sen!2sza!4v1761913305512!5m2!1sen!2sza" 
                width="100%" 
                height="100%" // Makes it fill the container
                style={{ border: 0, minHeight: '20rem' }} // minHeight ensures it's tall enough on mobile
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
        </div>
        {/* ----------------------------- */}

      </div>
    </div>
  </section>
);

export default ContactSection;