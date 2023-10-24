import Home from './Components/Home.js';
import Login from './Components/login.js';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Publication from './Components/Publication.js';
import NavBar from './Components/NavBar.js';
import Footer from './Components/Footer.js';

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/publication" element={<Publication />} />
          <Route exact path="/" element={<Login />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
