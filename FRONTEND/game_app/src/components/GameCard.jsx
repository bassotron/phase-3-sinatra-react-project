import React from 'react'

const GameCard = (props) => {
  return (
	<div>
      
      <h3>Title:{props.title} {props.id}</h3>
      <h5>Score::{props.score} {props.id}</h5>
	  <h5>Platform:{props.platform}</h5>
      <p>
        <strong>Review:{props.review} {props.id}</strong>
      </p>
      <form>
		<label>Add Review:<input type="text"/></label><button>Submit Review</button></form>
	  <button>Edit game</button>
	  <button>Delete Game</button>	
    </div>
  )
}

export default GameCard