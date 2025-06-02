import React, { useEffect, useState } from 'react';

function AestheticServices() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedService, setSelectedService] = useState(null); // For modal

  useEffect(() => {
    fetch('/data/services.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch services');
        }
        return response.json();
      })
      .then(data => {
        setServices(data.aestheticServices || []);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching aesthetic services:', error);
        setLoading(false);
      });
  }, []);

  // Close modal handler
  const closeModal = () => setSelectedService(null);

  return (
    <div className="container mt-5">
      <h2 className="mb-4 text-primary">Aesthetic Services</h2>

      {loading ? (
        <div className="text-center py-5">
          <div className="spinner-border text-primary mb-3" role="status"></div>
          <p className="fw-semibold">Loading...</p>
        </div>
      ) : (
        <>
          <div className="row">
            {services.map((service, index) => (
              <div key={index} className="col-md-6 col-lg-4 mb-4">
                <div className="card shadow rounded h-100 d-flex flex-column">
                  <img
                    src={service.customerImage}
                    alt={service.name}
                    className="card-img-top"
                    style={{ height: '200px', objectFit: 'cover' }}
                  />
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title">{service.name}</h5>
                    <p className="card-text">{service.description}</p>
                    <small className="text-muted mb-3">
                      <strong>{service.customerName}</strong>: "{service.feedback}"
                    </small>
                    <button
                      className="btn btn-outline-primary mt-auto"
                      onClick={() => setSelectedService(service)}
                    >
                      Explore More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Modal */}
          {selectedService && (
            <div
              className="modal fade show"
              style={{ display: 'block', backgroundColor: 'rgba(0,0,0,0.5)' }}
              tabIndex="-1"
              onClick={closeModal}
              aria-modal="true"
              role="dialog"
            >
              <div
                className="modal-dialog modal-dialog-centered"
                onClick={e => e.stopPropagation()} // Prevent modal close on inner click
              >
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title">{selectedService.name}</h5>
                    <button
                      type="button"
                      className="btn-close"
                      aria-label="Close"
                      onClick={closeModal}
                    ></button>
                  </div>
                  <div className="modal-body">
                    <img
                      src={selectedService.customerImage}
                      alt={selectedService.name}
                      className="img-fluid rounded mb-3"
                    />
                    <p>{selectedService.description}</p>
                    <p>
                      <strong>Customer Feedback:</strong> {selectedService.feedback}
                    </p>
                    <p>
                      <strong>Price:</strong> {selectedService.price ? `₹${selectedService.price}` : 'N/A'}
                    </p>
                    <p>
                      <strong>Details:</strong> {selectedService.details || 'More information coming soon.'}
                    </p>
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" onClick={closeModal}>
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default AestheticServices;
