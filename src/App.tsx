import './App.css';
import Navbar from './components/navbar';

function App() {

  return (
    <div className="main-container">
      <div className="frame-container">
        <div className="homepage-first-frame">
          <Navbar/>
          <div className="homepage-first-titles">  
            <span className="imagine-journey-empower">Imagine. Journey. Empower.</span>
            <div className="make-it-possible">
              <span className="make-it">Let’s make it </span>
              <span className="possible">possible</span>
              <span className="dot">.</span>
            </div>
            <div className="mesh-gradient"></div>
            </div>  
        </div>
      </div>
      <div className="frame-container">
      </div>
    </div>
  )
}

export default App