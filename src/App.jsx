import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import Navbar from './Components/Specific/Navbar';

//Pages
import Home from './Pages/Home';
import Footer from './Components/Specific/Footer';
import About from './Pages/About';
import Features from "./Pages/Features";
import Services from "./Pages/Services";
import Pricing from "./Components/Specific/Pricing";
import Contact from "./Components/Specific/Contact";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/features' element={<Features />} />
        <Route path='/pricing' element={<Pricing />} />
        <Route path='/services' element={<Services />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
