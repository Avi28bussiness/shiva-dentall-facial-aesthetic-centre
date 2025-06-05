import React ,{ useEffect, useState } from 'react';

function Home() {


  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    fetch('/data/testimonials.json')
      .then((res) => res.json())
      .then((data) => setTestimonials(data))
      .catch((err) => console.error('Error loading testimonials:', err));
  }, []);

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



             <div className="bg-light text-black p-5 rounded shadow mt-5 mb-5">
      <h3 className="text-primary text-center mb-4">Our Happy Patients </h3>
      <div id="testimonialCarousel" className="carousel slide" data-bs-ride="carousel"  data-bs-interval="3000" >
        <div className="carousel-inner text-center">
          {testimonials.map((testimonial, index) => (
            <div
              className={`carousel-item ${index === 0 ? 'active' : ''}`}
              key={index}
            >
              <img
                src={testimonial.photo}
                alt={testimonial.name}
                className="mb-3 shadow"
                style={{ width: '250px', height: '250px', objectFit: 'cover' }}
              />
              <h5 className="mt-2">- {testimonial.name}</h5>
            </div>
          ))}
        </div>

       <button
  className="carousel-control-prev"
  type="button"
  data-bs-target="#testimonialCarousel"
  data-bs-slide="prev"
>
  <span
    className="carousel-control-prev-icon"
    aria-hidden="true"
    style={{ filter: 'invert(1)' }} // makes it black
  ></span>
</button>
<button
  className="carousel-control-next"
  type="button"
  data-bs-target="#testimonialCarousel"
  data-bs-slide="next"
>
  <span
    className="carousel-control-next-icon"
    aria-hidden="true"
    style={{ filter: 'invert(1)' }} // makes it black
  ></span>
</button>

      </div>
    </div>
      
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
