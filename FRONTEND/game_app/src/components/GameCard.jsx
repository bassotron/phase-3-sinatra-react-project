import React from 'react'

const GameCard = ({ key, games, setGames, title, score, platform, review, setPlatform, setGenre, setTitle}) => {
  
	
  const deleteGame = (deletedGame) => {
    setGames((games) => [...games, deletedGame ])
  }

  const handleDelete = (e) => {
    e.preventDefault()

    fetch(`http://localhost:9292/games/${games.id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        deleteGame(data);
      })
    
   }
  

  return (
    <div>
      <h3>
        Title:{title} {key}
      </h3>
      <h5>
        Score::{score} {key}
      </h5>
      <h5>Platform:{platform}</h5>
      <p>
        <strong>
          Review:{review} {key}
        </strong>
      </p>
      <form>
        <label>
          Add Review:
          <input type="text" />
        </label>
        <button>Submit Review</button>
      </form>
      <button>Edit game</button>
      <button onClick={handleDelete}>Delete Game</button>
    </div>
  )
}

export default GameCard
