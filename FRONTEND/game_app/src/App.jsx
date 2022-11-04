
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import GameList from './components/GameList'

import HomePage from './components/HomePage'
import 'bootstrap/dist/css/bootstrap.min.css';


import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';


function App() {
  



  return (

   <div>
    
    <Router>
      <NavBar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/games" element={ <GameList /> } />
        
      </Routes>
    </Router>
    </div>
   
    
  );
}

export default App;
