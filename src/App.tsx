import './App.css';
import Homepage from './components/homepage';
import { useState } from 'react';
import Navbar from './components/navbar';

function App() {

  const [page, setPage] = useState(['homepage', 'contact'])

  return (
    <div className="main-container">
      <Navbar></Navbar>
      <Homepage />
    </div>
  )
}

export default App