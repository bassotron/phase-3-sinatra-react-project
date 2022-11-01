import React from 'react'
import GameCard from './GameCard'

const GameList = ({games, setGames}) => {
  return (  
	<div>
    {games.map((games) => (
<GameCard
          key={games.id}
          title={games.title}
          score={games.score}
          platform={games.platform}
          review={games.comment}
        />

    ))}
  </div>
  )
}

export default GameList