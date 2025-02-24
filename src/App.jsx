import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import About2 from './pages/About2';
import Contact from './pages/Contact';
import Impressum from './pages/Impressum';
import Datenschutz from './pages/Datenschutz';
import Behandlung from './pages/Behandlung';
import Sitzung from './pages/Sitzung';
import Geschichte from './pages/Geschichte'; 
import CustomNavbar from './components/Navbar';
import './App.css'


const App = () => {
  return (
    <div>
      <CustomNavbar />
      <main>
        <Routes>
          <Route path="/about" element={<About2 />} />
          <Route path="/" element={<Behandlung />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/geschichte" element={<Geschichte />} />
          <Route path="/impressum" element={<Impressum />} />
          <Route path="/datenschutz" element={<Datenschutz />} />
          <Route path="/sitzung" element={<Sitzung />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
