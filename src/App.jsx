import React from "react";
import './App.css';
import './index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Computer from './pages/Computer';
import Mechanical from './pages/Mechanical';
import Aids from './pages/Aids';  // Aids page with chatbot
import IT from './pages/It';  // IT page with chatbot
import Entc from './pages/Entc';
import Navbar from './pages/Navbar';
import ApplyNowButton from './components/ApplyNowButton';
import Bca from './pages/IntegratedMcaBca';

import BbaMba from './pages/IntegratedBbaMba '

function App() {
  return (
    <Router>
      <div className="relative">
        <Navbar />
        <Routes>
          <Route path="/comp" element={<PageWithDynamicTitle title="Comp" />} />
          <Route path="/mech" element={<PageWithDynamicTitle title="Mech" />} />
          <Route path="/aids" element={<PageWithDynamicTitle title="AIDS" />} />
          <Route path="/it" element={<PageWithDynamicTitle title="IT" />} />
          <Route path="/entc" element={<PageWithDynamicTitle title="ENTC" />} />
          <Route path="/bca" element={<PageWithDynamicTitle title="Bca" />} />
          <Route path="/bbamba" element={<BbaMba title="BbaMba" />} />

        </Routes>
        <ApplyNowButton />
      </div>
    </Router>
  );
}

// Component to handle dynamic title
function PageWithDynamicTitle({ title }) {
  const dynamicTitle = `ICEM | ${title}`;

  return (
    <>
      <Helmet>
        <title>{dynamicTitle}</title>
      </Helmet>

      {/* Render the component based on the route */}
      {title === "Comp" && <Computer />}
      {title === "Mech" && <Mechanical />}
      {title === "AIDS" && <Aids />} {/* Aids page with chatbot */}
      {title === "IT" && <IT />} {/* IT page with chatbot */}
      {title === "ENTC" && <Entc />}
      {title === "Bca" && <Bca />}
    </>
  );
}

export default App;
