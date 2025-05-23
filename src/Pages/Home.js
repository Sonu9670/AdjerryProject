import React from 'react';
import { NavLink } from "react-router-dom";
import './Home.css';
import Feq from './Feq';


const Home = () => {
  return (
    <div>
      <div>
        <section className="sec-1">
          <h1>
            <span className="h1span">Advertise</span> Your Brand <span className="h1span">on</span> Everyday <br /><span className="h1span">Essentials!</span>
          </h1>
          <p>Reach Your Target Audience with eye-catching designs on disposables that stand out.
            Transform ordinary cups, bottles, and plates into powerful marketing tools that leave a lasting impression.
          </p>
          <NavLink to="/proceed">
            <button className='but'>Join Now</button>
          </NavLink>
          <figure>
            <img src="/images/Vector 32 (1).png" width="100%" />
          </figure>
        </section>
        <figure className='heroBox'>
          <img src="/images/Hero section Image.png" className="hero" alt="image 5" />
        </figure>
        <img src="/images/group.png" className="circle" alt="circle" />
      </div>
      <section className="homeBox mt-5">
        <figure className="figure1" style={{ backgroundImage: `url(/images/rectangle1.png)` , backgroundRepeat : 'no-repeat' , backgroundSize : 'contain' }}>
          <div className="fig">
            <img src="/images/Content Box.png" className="fig2" alt="Content Box" />
            <img src="/images/image.png" className="fig4" alt="Image" />
            </div>
            <div className="figa">
            <img src="/images/image (1).png" className="fig3" alt="Another image" />
            <img src="/images/Frame 56.png" className="fig5" alt="Frame" />
          </div>
        </figure>

        <aside className="aside">
          <h3>The Process</h3>
          <h1>
            <span className="spanhead">Business Users</span> Post Their Requirements:
          </h1>
          <div className="d2">
            <img src="/images/one1.png" className='num1' /><img src="/images/circle1.png" className='circle1' />
            <p className="d6">
              Sign up as a business user and share your brand's message, LOGO, and design preferences.
            </p>
          </div>

          <div className="d4">
            <img src="/images/two1.png" className='num1' /><img src="/images/circle2.png" className='circle1' />
            <p className="d6" >
              Our platform connects you with talented designers who will create stunning ad concepts tailored to your brand.
            </p>
          </div>

          <NavLink to="/proceed">
            <button>Join now</button>
          </NavLink>
        </aside>
      </section>
      <section className="homeBox">
        <figure className="figure1">
          <img src="/images/rectangle2.png" className="img1" alt="Design Image 1" />
          <img src="/images/rectangle3.png" className="img2" alt="Design Image 2" />
          <div className='innerImg'>
          <img src="/images/image (5).png" className="img3" alt="Design Image 3" />
          <img src="/images/image (6).png" className="img4" alt="Design Image 4" />
          <img src="/images/image (7).png" className="img5" alt="Design Image 5" />
          </div>
        </figure>

        <aside className="aside d9">
          <h3>CREATIVITY <i className="fa-regular fa-comment-dots"></i></h3>
          <h1>
            <span className="spanhead">Designers</span> Bring Your Vision to Life:
          </h1>

          <div className="d2">
            <img src="/images/one2.png" className='num1' /><img src="/images/circle2.png" className='circle1' />
            <p className="d3">
              Designers receive your brief and create eye-catching advertisements that match your requirements.
            </p>
          </div>

          <div className="d4">
            <img src="/images/two2.png" className='num1' /><img src="/images/circle3.png" className='circle1' />
            <p className="d6">
              Once the designs are ready, Business Users can browse and select their favorite concept.
            </p>
          </div>

          <NavLink to="/proceed">
            <button >
              Join now
            </button>
          </NavLink>
        </aside>
      </section>
      <section className="homeBox">
        <figure className="figure1" style={{ backgroundImage: 'url(/images/Rectangle47.png)' , backgroundRepeat : 'no-repeat', backgroundSize : 'contain' }}>
          <img src="/images/image 5 (1).png" className="figure-img3" alt="Retail Image 2" />
        </figure>

        <aside className="aside d7">
          <h3>THE FINAL TOUCH</h3>
          <h1>
            <span className="spanhead">Retailers</span> Make it Real
          </h1>

          <div className="d2">
            <img src="/images/one2.png" className='num1' /><img src="/images/circle2.png" className='circle1' />
            <p style={{ marginLeft: '30px' }}>
              The selected design is sent directly to our retailers, who print your advertisement
              on cups, water bottles, plates, or any other disposables.
            </p>
          </div>

          <div style={{ display: 'flex', paddingTop: '30px' }}>
            <img src="/images/two2.png" className='num1' /><img src="/images/circle3.png" className='circle1' />
            <p style={{ marginLeft: '15px' }}>
              Your custom-printed products are ready to be distributed, ensuring your brand reaches
              a wider audience in a unique and memorable way.
            </p>
          </div>

          <NavLink to="/proceed">
            <button className='lstbtn'>
              Join now
            </button>
          </NavLink>
        </aside>
      </section>
      <section className="sec-5">
        <div className="menu">
          <img src="/images/Icon3.png" />
          <h5>Time Period</h5>
          <p>
            Dui Consectetur gravida platea ut dis
            <br /> diam. Enim morbi proin auctor yet.
          </p>
        </div>

        <div className="menu">
          <img src="/images/Icon1.png" />
          <h5>Employee</h5>
          <p>
            Dui Consectetur gravida platea ut dis
            <br /> diam. Enim morbi proin auctor yet.
          </p>
        </div>

        <div className="menu">
          <img src="/images/Icon2.png" />
          <br />

          <h5>Result</h5>
          <p>
            Dui Consectetur gravida platea ut dis
            <br /> diam. Enim morbi proin auctor yet.
          </p>
        </div>
      </section>
      <Feq />
      <section className="sec-7">
        <h1>Ready For your brand's Advertisement?</h1>
        <p>Sit elit feugiat turpis sed integer integer accumsan turpis.</p>
        <NavLink to="/get-started">
          <button>Get Started</button>
        </NavLink>
      </section>
    </div>
  )
}

export default Home