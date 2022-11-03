import React from 'react'
import { useState } from 'react'

const GameForm = ({ addGame }) => {
  const [title, setTitle] = useState('')
  const [platform, setPlatform] = useState('')
  const [genre, setGenre] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    fetch('http://localhost:9292/games', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: title,
        genre: genre,
        platform: platform,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        addGame(data)
      })
      .catch((err) => {
        console.log(err.message)
      })
    setTitle('')
    setPlatform('')
    setGenre('')
  }

  return (
    <div>
      <h3>
        <form onSubmit={handleSubmit}>
          <label name="title">
            Title
            <input
              type="text"
              id="title"
              name="title"
              onChange={(e) => setTitle(e.target.value)}
            />
          </label>
          <label name="platform">
            Platform
            <input
              type="text"
              id="platform"
              name="platform"
              onChange={(e) => setPlatform(e.target.value)}
            />
          </label>
          <label name="genre">
            Genre
            <input
              type="text"
              id="genre"
              name="genre"
              onChange={(e) => setGenre(e.target.value)}
            />
          </label>
          <input type="submit" value="Add New Game" />
        </form>
      </h3>
    </div>
  )
}

export default GameForm
