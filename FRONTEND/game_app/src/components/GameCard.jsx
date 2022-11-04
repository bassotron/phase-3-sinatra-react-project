import React from 'react'
import GameEditForm from './GameEditForm'


const GameCard = ({
  id,
  game,
  title,
  score,
  platform,
  review,
  deleteGame,
  editGame,
}) => {
  const handleDeleteClick = () => {
    fetch(`http://localhost:9292/games/${game.id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then(() => deleteGame(game.id))
    console.log(game.id)
  }

  return (
  

    <div>
      <h3>Title:{title}</h3>
      <h5>Score:{score}</h5>
      <h5>Platform:{platform}</h5>
      <p>
        <strong>Review:{review}</strong>
      </p>
      <h4>Edit This Game:</h4>
      <GameEditForm
        id={game.id}
        game={game}
        editGame={editGame}
        review={review}
        score={score}
      />
      <br></br>
      <button variant="primary" onClick={handleDeleteClick}>
        Delete Game
      </button>
    </div>
  )
}

export default GameCard
