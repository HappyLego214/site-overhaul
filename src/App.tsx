import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Homepage from './components/homepage';
import Navbar from './components/navbar';

function App() {
  return (
    <Router>
      <div className="main-container">
        <Navbar />
        <Routes>
          <Route path="/contact" element={<Homepage />} />
          <Route path="/" element={<Homepage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App