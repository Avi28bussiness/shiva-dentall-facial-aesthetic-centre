import React from 'react';

function Footer() {
  return (
    <footer className="bg-primary text-white text-center py-4 mt-5 border-top">
      <div className="container">
        <div className="mb-3">
          <a
            href="https://www.facebook.com/Shivadentalfacialaesthetic/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-decoration-none mx-3 text-white"
            aria-label="Facebook"
          >
            <i className="fab fa-facebook fa-lg"></i>
          </a>
          <a
            href="https://www.instagram.com/ShivaDentalCentre"
            target="_blank"
            rel="noopener noreferrer"
            className="text-decoration-none mx-3 text-white"
            aria-label="Instagram"
          >
            <i className="fab fa-instagram fa-lg"></i>
          </a>
          <a
            href="https://twitter.com/ShivaDentalCentre"
            target="_blank"
            rel="noopener noreferrer"
            className="text-decoration-none mx-3 text-white"
            aria-label="Twitter"
          >
            <i className="fab fa-twitter fa-lg"></i>
          </a>
        </div>
        <p className="mb-0">&copy; {new Date().getFullYear()} Shiva Dental & Facial Aesthetic Centre. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
