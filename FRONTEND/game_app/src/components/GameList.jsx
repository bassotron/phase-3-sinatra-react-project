import React from 'react'
import { useState, useEffect } from 'react'
import GameCard from './GameCard'
import { useParams } from 'react-router-dom'

const GameList = () => {

const [games, setGames] = useState([])
const [gameFormFlag, setGameFormFlag] = useState(false)
const [title, setTitle] = useState("")
const [platform, setPlatform] = useState("")
const [genre, setGenre] = useState("")

const params = useParams



  useEffect(() => {
    fetch('http://localhost:9292/games')
      .then((response) => response.json())
      .then((games) => {
        setGames(games);
      })
  }, [])

  const addGame = (newGame) => {
    setGames((games) => [...games, newGame])
  }
  
  
  

  const handleSubmit = (e) => {
    
    fetch('http://localhost:9292/games', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: title,
        genre: genre,
        platform: platform
      }),
      
    })
    .then((response) => response.json())
    .then((game) => {
     addGame(game);
       
    })
    .catch((err) => {
       console.log(err.message);
    });
    setTitle("")
    setPlatform("")
    setGenre("")
    
   }

  
  return (
    <div>
      <div> 
        <h3>
          <form onSubmit={handleSubmit}>
            <label name="title">
              Title
              <input type="text" id="title" name="title" onChange={(e) => setTitle(e.target.value)} />
            </label>
            <label name="platform">
              Platform
              <input type="text" id="platform" name="platform" onChange={(e) => setPlatform(e.target.value)} />
            </label>
            <label name="genre">
              Genre
              <input type="text" id="genre" name="genre" onChange={(e) => setGenre(e.target.value)}/>
            </label>
            <input  type="submit" value="Add New Game" />
          </form>
        </h3>
      </div>
      {games.map((games) => (
        <GameCard 
          setTitle={setTitle}
          setGenre={setGenre}
          setPlatform={setPlatform}
          key={games.id}  
          games={games}
          setGames={setGames}
          title={games.title}
          score={games.reviews.map((score) => score.score)}
          platform={games.platform}
          review={games.reviews.map((review) => review.comment)}
        />
      ))}
    </div>
  )
}

export default GameList
