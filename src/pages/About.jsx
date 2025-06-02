import React, { useEffect, useState } from 'react';


function About() {

  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    fetch('/data/testimonials.json')
      .then((res) => res.json())
      .then((data) => setTestimonials(data))
      .catch((err) => console.error('Error loading testimonials:', err));
  }, []);

  return (
    <div className="container mt-5 mb-5">
      {/* Clinic Overview */}
      <div className="card border-0 shadow-lg rounded bg-light p-4 mb-5">
        <div className="row align-items-center">
          <div className="col-md-6 mb-4 mb-md-0">
            <img
              src="/images/clinic.webp"
              alt="Clinic Interior"
              className="img-fluid rounded shadow"
            />
          </div>
          <div className="col-md-6">
            <h2 className="text-primary mb-3">About Us</h2>
            <p className="lead">
              Welcome to <strong>Shiva Dental & Facial Aesthetic Centre</strong>, where your smile and confidence are our top priority.
            </p>
            <p>
              We specialize in combining modern dental solutions with aesthetic treatments to help you look and feel your best.
            </p>
            <ul className="list-unstyled">
              <li>✅ Modern Equipment & Technology</li>
              <li>✅ Experienced Doctors</li>
              <li>✅ Personalized Care Plans</li>
              <li>✅ Hygienic & Comfortable Environment</li>
            </ul>
          </div>
        </div>
      </div>

{/* Doctors Section */}
<div className="card border-0 shadow-lg rounded bg-light p-4 mb-5">
  <div className="row align-items-center">
        <div className="col-md-6">
      <img
        src="/images/DrSK.jpeg"
        alt="Dr. S.K. Srivastava"
        className="img-fluid rounded shadow"
      />
    </div>
    <div className="col-md-6">
      <h3 className="text-primary mb-3">Meet Our Expert</h3>
      <h5 className="text-secondary">Dr. S.K. Srivastava</h5>
      <p className="mb-1">BDS, PGDCC, MIDA, MISC</p>
      <p className="mb-1">Maxillofacial & Aesthetic Surgeon</p>
      <p className="mb-2">Ex. Lecturer, Dental College Azamgarh</p>
      <p className="text-muted small">
        Dr. Srivastava brings decades of experience in both dental and facial aesthetics. His compassionate approach and mastery in modern techniques have earned the trust of hundreds of happy patients.
      </p>
    </div>
  </div>
</div>


      {/* Testimonials Section */}
       <div className="bg-light text-black p-5 rounded shadow mt-5">
      <h3 className="text-primary text-center mb-4">What Our Patients Say</h3>
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
                className="rounded-circle mb-3"
                style={{ width: '100px', height: '100px', objectFit: 'cover' }}
              />
              <p className="lead px-4">"{testimonial.feedback}"</p>
              <h5 className="mt-2">- {testimonial.name}</h5>
              <p className="small text-white-50">{testimonial.treatment}</p>
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
    </div>
  );
}

export default About;
