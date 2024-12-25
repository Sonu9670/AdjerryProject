import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-section">
      <div class="hero">
        <img src="./images/people-about.png" alt="Adjerry Logo" />
        <div class="text-content">
          <h1>Revolutionizing Advertising, adding value at every level.</h1>
          <p>
            Welcome to Adjerry, a cutting-edge platform dedicated to
            transforming the way businesses advertise. We specialize in creating
            customized branding solutions on disposable products like cups,
            bottles, and plates-turning everyday items into powerful marketing
            tools.
          </p>
          <p>
            Our Vision is to redefine the advertising landscape by fostering
            creativity, innovation, and collaboration among businesses,
            designers, and manufacturers.
          </p>
          <div class="stats">
            <div class="stat">
              <h2>100+</h2>
              <p>Advertisement Services</p>
            </div>
            <div class="stat">
              <h2>15+</h2>
              <p>Advertisement Categories</p>
            </div>
            <div class="stat">
              <h2>10+</h2>
              <p>Team Members</p>
            </div>
          </div>
        </div>
      </div>

      <div class="hero-1">
        <div class="header">
          <h1>
            A unified platform where businesses, designers, and manufacturers
            connect
            <br /> effortlessly.
          </h1>
          {/* <p>
            <img src="quote-icon-placeholder.png" alt="Quote Icon" />
            Effortlessly.
          </p> */}
        </div>
        <div class="image-grid">  
        <img
            src="./images/about us page.png"
            alt="Laptop Image"
            className="main"
          />
          
          </div>        
            <img
              src="./images/Outside Subway.png"
              alt="Sign 1"
              className="image-one"
            />
        
            <img
              src="./images/car.png"
              alt="Car Branding"
              className="image-two"
            />
          
         
            <img
              src="./images/Subway.png"
              alt="Sign 2"
              className="image-three"
            />
        
            
        
        
      </div>

      <div class="hero-2">
        <div class="content">
          <div class="text-section">
            <h2>Why Choose Us?</h2>
            <p>
              End-to-End Support: From ideation to execution, we cover every
              aspect of your advertising needs.
            </p>
            <p>
              Trusted Network: Collaborate with talented designers and reliable
              manufacturers who ensure quality and precision.
            </p>
            <p>
              Data-Driven Insights: We leverage technology to provide actionable
              insights for more effective campaigns.
            </p>
          </div>

          <div class="logo-section">
            <img src="./images/logo adjerry (1) 1.png" alt="Adjerry Logo" />
          </div>
        </div>

        <div class="text-section">
          <h2>Our Values</h2>
          <ul>
            <li>
              <strong>Innovation:</strong> Pushing boundaries to bring fresh
              ideas to the table.
            </li>
            <li>
              <strong>Integrity:</strong> Building trust through transparency
              and reliability.
            </li>
            <li>
              <strong>Creativity:</strong> Nurturing designs that resonate and
              captivate.
            </li>
            <li>
              <strong>Collaboration:</strong> Fostering partnerships that drive
              success.
            </li>
          </ul>
        </div>

        <div class="footer-last">
          <h2>Join Us on This Journey</h2>
          <p>
            Whether you’re a business seeking impactful advertising, a designer
            showcasing your talent, or a manufacturer delivering excellence,
            Adjerry is your gateway to success. Together, we create
            advertisements that not only stand out but also make a difference.
          </p>
          <p>Let me know if you’d like to personalize this further!</p>
        </div>
      </div>
    </div>
  );
};

export default About;
