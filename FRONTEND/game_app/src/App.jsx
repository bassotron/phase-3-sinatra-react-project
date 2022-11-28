
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import GameList from './components/GameList'
import HomePage from './components/HomePage'
import {useState, useEffect} from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';




function App() {
  
  // const [games, setGames] = useState([])

  // useEffect(() => {
  //   fetch('http://localhost:9292/games')
  //     .then((response) => response.json())
  //     .then((games) => {
  //       setGames(games)
  //     })
  // }, [])

  // const addGame = (newGame) => {
  //   setGames((games) => [...games, newGame])
  // }

  // const onDeleteGame = (id) => {
  //   setGames((prevGames) => {
  //     const filteredArray = prevGames.filter((games) => games.id !== id)
  //     console.log(filteredArray)
  //     return filteredArray
  //   })
  // }

  // const editGame = (editedGame) => {
  //   const updatedGames = games.map((game) =>
  //     game.id === editedGame.id ? editedGame : game,
  //   )
  //   setGames(updatedGames)
  // }

  // const addReviewToGame = (newReview) => {
  //   setGames([...games, newReview])
  //   console.log(...games, newReview)
  // }

 

  return (

   <div>
    
    <Router>
      <NavBar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/games" element={ <GameList/> } />
        
      </Routes>
    </Router>
    </div>
   
    
  );
}

export default App;
