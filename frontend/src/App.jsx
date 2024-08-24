import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './Components/About';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Hero from './Components/Hero';
import Navbar from './Components/Navbar';
import Projects from './Components/Projects';
import Service from './Components/Service';
import PrivacyPolicy from "./Components/PrivacyPolicy";
import TermsOfUse from "./Components/TermsOfUse";


function App() {
  return (
    <Router>
      <div>
        <Navbar/>
        <Routes>
          <Route path="/" element={<><Hero/><About/><Service/><Projects/><Contact/></>} />
          <Route path="/privacy-policy" element={<PrivacyPolicy/>} />
          <Route path="/terms-of-use" element={<TermsOfUse/>} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
