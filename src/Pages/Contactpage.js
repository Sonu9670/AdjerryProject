import React from "react";
import "./Contactpage.css";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMailBulk,
  FaPhone,
  FaTwitter,
} from "react-icons/fa";

const Contactpage = () => {
  return (
    <div>
      <div className="contact-header">
        <h1>
          We’d love to hear from you! Need support or have any advertising idea?
          Just contact us 👋.
        </h1>
      </div>
      <div className=" container contact-container">
        <div className="contactpage-left">
          <h2>AdJerry</h2>
          <p>
            We have all kinds of advertisements, we know how to market brands .
          </p>

          <div className="compnyAddress">
            <div className="location">
              <FaLocationArrow />
              <p>Ghaziabad,UttarPradesh</p>
            </div>
            <div className="location">
              <FaMailBulk />
              <p>team@adjerry.com</p>
            </div>
            <div className="location">
              <FaPhone />
              <p>7042584234</p>
            </div>
          </div>

          <div className="social-links">
            <h3>Contact with us:</h3>
            <div className="socialIconBottom">
              <FaFacebook />
              <FaTwitter />
              <FaLinkedin />
              <FaInstagram />
            </div>
          </div>
        </div>

        <div className="contact-right">
          <div className="contactSideText">
            <div className="emailSection">
              <FaMailBulk />
              <div className="emaiText">
                <p>Email</p>
                <p>team@adjerry.com</p>
              </div>
            </div>
            <div className="emailSection">
              <FaPhone />
              <div className="emaiText">
                <p>Phone</p>
                <p>7042584234</p>
              </div>
            </div>
          </div>
          <h2>
            Contact <span>Us</span>
          </h2>
          <form>
            <input type="text" name="name" placeholder="Name *" required />
            <input type="email" name="email" placeholder="Email" required />
            <input
              type="tel"
              name="phone"
              placeholder="Phone number *"
              required
            />
            <select name="how" required>
              <option value="" disabled selected>
                How did you find us?
              </option>
              <option value="search">Search Engine</option>
              <option value="social">Social Media</option>
              <option value="ads">Advertisements</option>
              <option value="other">Other</option>
            </select>
            <button type="submit">SEND</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contactpage;
