import React from 'react'

const GameCard = ({ id, game, title, score, platform, review, deleteGame }) => {
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
      <h3>
        Title:{title} {id}
      </h3>
      <h5>
        Score::{score} {id}
      </h5>
      <h5>Platform:{platform}</h5>
      <p>
        <strong>
          Review:{review} {id}
        </strong>
      </p>

      <button>Edit game</button>
      <button onClick={handleDeleteClick}>Delete Game</button>
    </div>
  )
}

export default GameCard
