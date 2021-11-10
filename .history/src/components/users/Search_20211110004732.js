import React, { useState } from 'react'

const Search = () => {
  const [text, setText] = useState('jhsd')

  const handleSubmit = (e) => {
    e.preventDefault()
    setText(e.target.value)
    console.log(text)
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className='form'>
        <input type='text' name='text' placeholder='Search Users...' />
        <input
          type='submit'
          value={text}
          className='btn btn-dark btn-block'
          
        />
      </form>
    </div>
  )
}

export default Search
