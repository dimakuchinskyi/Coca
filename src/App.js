import React from 'react';
import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './screens/Home/Home';
import About from './screens/About/About';
import Pricing from './screens/Pricing/Pricing';
import Contact from './screens/ContactUs/Contact';
import Blog from './screens/Blog/Blog';
import DetailBlog from './screens/DetailBlog/DetailBlog';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/detail-blog" element={<DetailBlog />} />
      </Routes>
    </Router>
  );
}

export default App;