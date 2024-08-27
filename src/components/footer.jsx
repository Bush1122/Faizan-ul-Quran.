import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faPinterestP, faGooglePlus, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faLocationPin, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer.css';
import logo from '../images/logo.png';

const Footer = () => {
  return (
    <footer>
      <div className="gap top-spac60 drk-bg remove-bottom">
        <div className="container">
          <div className="footer-data">
            <div className="row">
              <div className="col-md-4 col-sm-12 col-lg-4">
                <div className="wdgt-box">
                  <div className="logo mb-4">
                     <h3 className='text-warning' >Faizan-ul-Quran</h3>
                  </div>
                  <p>
                    Our goal is to make Arabic Language easy to learn, read and
                    understand. As this is the rope of Allah which ensures that we
                    all are on the straight path.
                  </p>
                </div>
              </div>
              <div className="col-md-8 col-sm-12 col-lg-8">
                <div className="row">
                  <div className="col-md-4 col-sm-4 col-lg-4">
                    <div className="wdgt-box">
                      <h4>Quick Links</h4>
                      <ul>
                        <li><a href="#" title="">About Us</a></li>
                        <li><a href="#current-container" title="">Courses</a></li>
                        <li><a href="#current-container" title="">Lectures</a></li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-4 col-lg-4">
                    <div className="wdgt-box">
                      <h4>Useful Links</h4>
                      <ul>
                        <li><a href="#" title="">Contact Us</a></li>
                        <li><a href="#" title="">Blogs</a></li>
                        <li><a href="#" title="">Privacy Policy</a></li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-4 col-lg-4">
                    <div className="wdgt-box">
                      <h4>Contact Us</h4>
                      <ul className="cont-lst">
                        <li>
                          <FontAwesomeIcon icon={faLocationPin} /> Islamabad
                        </li>
                        <li>
                          <FontAwesomeIcon icon={faPhone} /> +
                        </li>
                        <li>
                          <FontAwesomeIcon icon={faEnvelope} />
                          <a href="mailto:info@faizanulquran.com" title="">
                            info@faizanulquran.com
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Footer Data */}
          <div className="bottom-bar">
            <p>&copy; Copyright 2024. All Rights Reserved.</p>
            <div className="scl">
              <a href="#" title="Twitter" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="#" title="Pinterest" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faPinterestP} />
              </a>
              <a href="#" title="Google Plus" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGooglePlus} />
              </a>
              <a href="#" title="Facebook" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
            </div>
          </div>
          {/* Bottom Bar */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
