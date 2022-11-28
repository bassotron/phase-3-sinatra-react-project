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
      console.log(filteredArray)
      return filteredArray
    })
  }

  const editGame = (editedGame) => {
    const updatedGames = games.map((game) =>
      game.id === editedGame.id ? editedGame : game,
    )
    setGames(updatedGames)
  }

  const addReviewToGame = (newReview, id) => {
    const findGame = games.find((game) => (game.id === id ? id : game))
    const addedReview = games.map((game) => (game.id === id ? newReview : game))
    setGames((games) => [...games], {
      reviews: [findGame.review, addedReview]
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
      <br></br>
      <br></br>
      <br></br>
      <h1>CURRENT GAMES IN DATABASE</h1>
      {Array.from(games).map((game) => (
        <GameCard
          key={game.id}
          id={game.id}
          game={game}
          title={game.title}
          score={game.reviews.map((score) => score.score)}
          platform={game.platform}
          review={game.reviews.map((review) => review.comment)}
          deleteGame={onDeleteGame}
          editGame={editGame}
          addReviewToGame={addReviewToGame}
          reviewID={game.reviews.id}
        />
      ))}
      )
    </div>
  )
}

export default GameList
