import React, { useState } from 'react'

const Search = ({searchUsers}) => {
  const [text, setText] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
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
        <input type='submit' className='btn btn-dark btn-block' Submit/>
      </form>
      <input type='submit' className='btn btn-dark btn-block' Clear onClick={clear} />
    </div>
  )
}

export default Search
