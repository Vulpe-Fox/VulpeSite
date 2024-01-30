import './App.css';

import Nav from './components/Nav';
import Footer from './components/Footer';

import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Connect from './pages/Connect';

import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" exact element={<About />} />
          <Route path="/projects" exact element={<Projects />} />
          <Route path="/connect" exact element={<Connect />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
