import React from 'react'
import { useState, useEffect } from 'react'
import GameCard from './GameCard'
import GameForm from './GameForm'

const GameList = () => {
  const [games, setGames] = useState([])

  useEffect(() => {
    fetch('http://localhost:9292/games')
      .then((response) => response.json())
      .then((games) => {
        setGames(games)
      })
  }, [])

  const addGame = (newGame) => {
    setGames((games) => [...games, newGame])
  }

  const onDeleteGame = (id) => {
    setGames((prevGames) => {
      const filteredArray = prevGames.filter((games) => games.id !== id)
      return filteredArray
    })
  }

  return (
    <div>
      <GameForm
        addGame={addGame}
        id={games.id}
        title={games.title}
        platform={games.platform}
        genre={games.genre}
      />
      {games.map((game) => (
        <GameCard
          key={game.id}
          game={game}
          title={game.title}
          score={game.reviews.map((score) => score.score)}
          platform={game.platform}
          review={game.reviews.map((review) => review.comment)}
          deleteGame={onDeleteGame}
        />
      ))}
    </div>
  )
}

export default GameList
