import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import AestheticServices from './pages/AestheticServices';
import DentalServices from './pages/DentalServices';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <>
      <Header />
      <main className="container my-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aesthetic-services" element={<AestheticServices />} />
          <Route path="/dental-services" element={<DentalServices />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
