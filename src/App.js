import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from '../src/components/Footer';
import Hero from '../src/components/Hero';
import Navbar from '../src/components/Navbar';
import PrivacyPolicy from '../src/components/PrivacyPolicy';
import Section1 from '../src/components/Section1';
import Section2 from '../src/components/Section2';
import Section3 from '../src/components/Section3';
import Section4 from '../src/components/Section4';
import Section5 from '../src/components/Section5';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/" element={<>
          <Navbar />
          <Hero />
          <Section1 />
          <Section2 />
          <Section3 />
          <Section4 />
          <Section5 />
          <Footer />
        </>} />
      </Routes>
    </Router>
  );
}

export default App;
