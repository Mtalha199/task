import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Pages/Header';
import Home from './Pages/Home';
import About from './Pages/About';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<About />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
