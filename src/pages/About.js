import React from 'react';
import AboutImage from '../assets/south.jpg';
import '../styles/About.css';

function About() {
    return (
        <div className="about">
            <div className="aboutTop" style={{backgroundImage: `url(${AboutImage})`}}>
            
            </div>
            <div className="aboutBottom">
                <h1>About Us</h1>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ultricies lorem et ipsum venenatis, et egestas urna varius. Proin non euismod nisi. Nulla ut libero et felis consequat vestibulum. Nunc in justo at sem placerat auctor. Duis faucibus condimentum dolor id condimentum. Mauris semper erat non odio faucibus, sit amet porta risus vulputate. Integer accumsan, dolor in auctor auctor, sem enim tristique ante, et vehicula orci augue quis tellus. Aenean sed bibendum orci, malesuada euismod est. Phasellus venenatis, leo quis sodales ultrices, sem lectus auctor quam, ut auctor libero risus tristique ipsum. In nec purus quam. Ut vehicula orci velit, in dignissim magna tincidunt non. Aliquam eget pellentesque lorem. Nunc finibus malesuada diam in vulputate. Maecenas tincidunt scelerisque molestie. Duis efficitur, dolor ut aliquet molestie, nulla nunc faucibus nisl, sed tempor tellus massa ut erat. Curabitur luctus eget elit sed convallis.                
                </p>
            </div>
        </div>
    );
}

export default About;
