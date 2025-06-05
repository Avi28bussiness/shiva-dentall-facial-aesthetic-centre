import React from 'react';

function Contact() {
  return (
    <div className="container pt-3 mt-5 mb-5">
      <div className="row justify-content-center">
        <div className="col-md-10">
          <div className="card shadow rounded border-0">
            <div className="card-body p-4 bg-light">
              <h2 className="text-center text-primary mb-4">Contact Us</h2>

              <div className="row mb-3">
                <div className="col-md-6">
                  <h5>📞 Phone Numbers</h5>
                  <p><strong>Clinic:</strong> +91-9415162622</p>
                  <p><strong>Emergency:</strong> +91-9415162622</p>
                  <p><strong>WhatsApp:</strong> <a href="https://wa.me/9415162622" target="_blank" rel="noreferrer">Chat Now</a></p>
                </div>
                <div className="col-md-6">
                  <h5>🕒 Working Hours</h5>
                  <p><strong>Mon - Sat:</strong> 4:00 PM – 9:00 PM</p>
                  <p><strong>Sunday:</strong> 10:00 AM – 4:00 PM</p>
                </div>
              </div>

              <hr />

              <div className="mb-3">
                <h5>📍 Address</h5>
                <p>
                  Shiva Dental & Facial Aesthetic Centre, <br />
                  123 Smile Street, Radiant Colony, <br />
                  Jaunpur UP, India - 222002
                </p>
              </div>

              <div className="text-center mb-4">
                <a
                  href="https://www.google.com/maps?q=Shiva+Dental+&+Facial+Aesthetic+Centre"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-primary btn-lg"
                >
                  📍 Find us on Google Maps
                </a>
              </div>

              {/* Optional Embedded Map */}
              {/* <div className="ratio ratio-16x9">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1dXXXX!2dXX.XXXXX!3dXX.XXXXX!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xXXXX!2sShiva+Dental+%26+Facial+Aesthetic+Centre!5e0!3m2!1sen!2sin!4vXXXXXXXX"
                  allowFullScreen=""
                  loading="lazy"
                  title="Clinic Map"
                  style={{ border: 0 }}
                ></iframe>
              </div> */}

              {/* <div className="text-center mt-4">
                <h5 className="mb-3">Need help or want to book an appointment?</h5>
                <a href="/contact-form" className="btn btn-outline-primary btn-lg">📅 Book Appointment</a>
              </div> */}

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
