import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About2 from './pages/About2';
import Contact from './pages/Contact';
import Impressum from './pages/Impressum';
import Datenschutz from './pages/Datenschutz';
import Behandlung from './pages/Behandlung';
import Sitzung from './pages/Sitzung';
import Geschichte from './pages/Geschichte'; 


const App = () => {
  return (
    <div>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About2 />} />
          <Route path="/behandlung" element={<Behandlung />} />
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
