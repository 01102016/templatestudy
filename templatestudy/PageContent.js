import React from 'react'
import About from './About';
import Contact from './Contact';
import Project from './Project';

function PageContent() {
  return (
    <>
      <div className="w3-content w3-padding" style={{ maxWidth: 1564 }}>
        {/* Project Section */}
       <Project />

        {/* About Section */}
        <About />

        {/* Contact Section */}
        <Contact />
      
        {/* Image of location/map */}
        <div className="w3-container">
          <img
            src="https://www.w3schools.com/w3images/map.jpg"
            className="w3-image"
            style={{ width: "100%" }}
          />
        </div>
        {/* End page content */}
      </div>
    </>
  );
}

export default PageContent