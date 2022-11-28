import React from 'react'
import GameEditForm from './GameEditForm'
import ReviewForm from './ReviewForm'


const GameCard = ({
  id,
  game,
  title,
  score,
  platform,
  review,
  deleteGame,
  editGame,
  reviewID,
  addReviewToGame
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
        reviews={review}
        score={score}
      />
      <h4>Add your own Review to this Game</h4>
      <ReviewForm 
      addReviewToGame={addReviewToGame}
      id={id}
      reviewID={reviewID}
      />
      <br></br>
      <button variant="primary" onClick={handleDeleteClick}>
        Delete Game
      </button>
    </div>
  )
}

export default GameCard
