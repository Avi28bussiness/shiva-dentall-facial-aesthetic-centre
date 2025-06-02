import React from 'react';

function Home() {
  return (
    <div className="container py-5 text-center">
          <div className="mb-5">
        <img
          src="/images/ShivaBanner.jpeg"
          alt="banner"
          className="img-fluid rounded shadow"
          style={{ maxHeight: '400px', objectFit: 'cover' }}
        />
      </div>

      <h1 className="display-4 fw-bold mb-3">
        Welcome to <span className="text-primary">Shiva Dental & Facial Aesthetic Centre</span>
      </h1>
      <p className="lead mb-4">
        Your smile and skin are in good hands.
      </p>
      
      <a
        href="https://www.google.com/maps/place/Shiva+Dental+%26+Facial+Aesthetic+Centre" 
        target="_blank" 
        rel="noopener noreferrer"
        className="btn btn-lg btn-outline-primary"
      >
        📍 Find us on Google Maps
      </a>

    </div>
  );
}

export default Home;
