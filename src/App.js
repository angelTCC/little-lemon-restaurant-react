import logo from './logo.png';
import './App.css';
import './styles/navbar.css';


import Home from './components/Home';
import About from './components/About';
import Menu from './components/Menu';
import Reservation from './components/Reservation';

import { Route, Routes, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">

      <nav className="navbar">
        <div className="navbar-logo">
          <img src={logo} alt="Logo" />
        </div>
        <ul className="navbar-links">
          <li><Link to="/" className="nav-item">Home</Link></li>
          <li><Link to="/about" className="nav-item">About</Link></li>
          <li><Link to="/menu" className="nav-item">Menu</Link></li>
          <li><Link to="/reservation" className="nav-item">Reservation</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/reservation" element={<Reservation />} />
      </Routes>

    </div>
  );
}

export default App;
