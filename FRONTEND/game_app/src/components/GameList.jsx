import React from 'react'
import GameCard from './GameCard'

const GameList = ({ games, setGames }) => {
  return (
    
    <div>

<div>
		<button><h3>ADD A NEW GAME</h3></button>
	</div>
      {games.map((games) => (
        <GameCard
          key={games.id}
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
