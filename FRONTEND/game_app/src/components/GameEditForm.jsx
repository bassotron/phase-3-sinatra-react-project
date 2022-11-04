import React from 'react'
import { useState } from 'react'


const GameEditForm = ({ id, editGame, game }) => {
  const [title, setTitle] = useState('')
  const [platform, setPlatform] = useState('')
 
 

  const handleEditSubmit = (e) => {
    e.preventDefault()
    fetch(`http://localhost:9292/games/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: title,
        platform: platform,
      }),
    })
      .then((response) => response.json())
      .then((data) => { editGame(data) 
      
       
      })
      .catch((err) => {
        console.log(err.message)
      })
    setTitle('')
    setPlatform('')
  }

  return (
    <div>
      <h3>
        <form onSubmit={handleEditSubmit}>
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

          <input type="submit" value="Submit Changes" />
        </form>
      </h3>
    </div>
  )
}

export default GameEditForm
