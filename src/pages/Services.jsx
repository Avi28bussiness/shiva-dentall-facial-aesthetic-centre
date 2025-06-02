import aestheticServices from '../data/aestheticServices.json';
import ServiceCard from '../components/ServiceCard';

function Services() {
  return (
    <div className="row">
      {aestheticServices.map((service, index) => (
        <ServiceCard key={index} title={service} />
      ))}
    </div>
  );
}

export default Services;
