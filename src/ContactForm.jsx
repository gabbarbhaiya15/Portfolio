import React, { useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPaperPlane, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

import BackToTopButton from './BackToTopButton';
import './stylle.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

 

  return (
    <section id="contact">
      <h1 className="heading">Contact Me</h1>
      <div className="contact-wrapper">
        <div className="direct-contact-container">
          <ul className="contact-list">
            <li className="list-item">
              <FontAwesomeIcon icon={faPhone} />
              <span className="contact-text phone">
                <a href="tel:9455887824" title="Give me a call">
                  +91-9455887824
                </a>
              </span>
            </li>
            <li className="list-item">
              <FontAwesomeIcon icon={faEnvelope} />
              <span className="contact-text gmail">
                <a href="mailto:keniyashraj@gmail.com" title="Send me an email">
                  keniyashraj@gmail.com
                </a>
              </span>
            </li>
          </ul>
          <hr />
          <ul className="social-media-list">
    <li>
      <a href="https://instagram.com/golu_lucknowii?igshid=OGQ5ZDc2ODk2ZA==" target="_blank" className="contact-icon" rel="noreferrer">
        <FontAwesomeIcon icon={faFacebook} aria-hidden="true" />
      </a>
    </li>
    <li>
      <a href="https://instagram.com/golu_lucknowii?igshid=OGQ5ZDc2ODk2ZA==" target="_blank" className="contact-icon" rel="noreferrer">
        <FontAwesomeIcon icon={faInstagram} aria-hidden="true" />
      </a>
    </li>
    <li>
      <a href="https://instagram.com/golu_lucknowii?igshid=OGQ5ZDc2ODk2ZA==" target="_blank" className="contact-icon" rel="noreferrer">
        <FontAwesomeIcon icon={faTwitter} aria-hidden="true" />
      </a>
    </li>
  </ul>
          <hr />
        </div>
      
      </div>
      <BackToTopButton />
    </section>
  );
};

export default ContactForm;

