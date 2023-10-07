import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navigation from './components/navbar';
import Home from './components/home'
import About from './components/about'
import Contact from './components/contact'

export default function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route component={Home} path='/' exact />
        <Route component={About} path='/about' />
        <Route component={Contact} path='/contact' />
      </Routes>
    </BrowserRouter>
  );
}