import './App.css';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './pages/Home';

import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={Home} />
          <Route path='/channel' component={() => {
            window.location.href = 'https://www.twitch.tv/vulpefox';
            return null;
          }}/>
          <Route path="/projects" exact component={Home} />
          <Route path="/connect" exact component={Home} />
          
          {/* default redirect to home page */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
