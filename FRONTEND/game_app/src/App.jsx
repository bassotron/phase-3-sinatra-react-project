import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import GameList from './components/GameList'
import GameReviews from './components/GameReviews'
import HomePage from './components/HomePage'


function App() {
  const [games, setGames] = useState([])

  useEffect(() => {
    fetch('http://localhost:9292/games')
      .then((response) => response.json())
      .then((games) => {
        setGames(games);
      })
  }, [])

  const onAddGame = (newGame) => {
    setGames([...games, newGame])
  }



  return (

    <div>
    <Router>
      <NavBar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/games" element={ <GameList games={games} setGames={setGames} /> } />
        <Route path="/reviews" element={<GameReviews/>} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
