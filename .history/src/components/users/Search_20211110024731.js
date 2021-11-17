import React, { useState } from 'react'

const Search = ({ searchUsers, clearUsers, display }) => {
  const [text, setText] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (text === ''){
        
    }
    searchUsers(text)
    setText('')
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className='form'>
        <input
          type='text'
          name='text'
          value={text}
          placeholder='Search Users...'
          onChange={(e) => setText(e.target.value)}
        />
        <input
          type='submit'
          className='btn btn-dark btn-block'
          value=' Search '
        />
      </form>

      {display && (
        <button className='btn btn-dark btn-block' onClick={clearUsers}>
          Clear
        </button>
      )}
    </div>
  )
}

export default Search
