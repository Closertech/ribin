import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import PrivacyPolicy from '../src/components/PrivacyPolicy';
import './App.css';
import ComingSoon from './components/ComingSoon';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<>
          {/* <Navbar />
          <Hero />
          <Section1 />
          <Section2 />
          <Section3 />
          <Section4 />
          <Section5 />
          <Footer /> */}
          <ComingSoon />
        </>} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
    </Router>
  );
}

export default App;
