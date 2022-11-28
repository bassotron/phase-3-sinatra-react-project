import React from 'react'
import { useState } from 'react'

const ReviewForm = ({ addReviewToGame, id }) => {
  const [review, setReview] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    fetch(`http://localhost:9292/reviews`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        game_id: id,
        comment: review,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        addReviewToGame(data, id)
        console.log(data)
      })
      .catch((err) => {
        console.log(err.message)
      })
    setReview('')
  }

  return (
    <div>
      <h3>
        <form onSubmit={handleSubmit}>
          <label name="Add Review">
            Add Review
            <input
              type="text"
              id="comment"
              name="Review"
              placeholder="Add Review"
              onChange={(e) => setReview(e.target.value)}
            />
          </label>
          <input type="submit" value="Submit Changes" />
        </form>
      </h3>
    </div>
  )
}

export default ReviewForm
