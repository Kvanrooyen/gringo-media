import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navigation from './components/navbar';
import Home from './components/home'
import About from './components/about'
import Footer from "./components/footer";

export default function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}