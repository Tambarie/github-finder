import React, { useState } from 'react'

const Search = () => {
  const [text, setText] = useState('')

  

  return (
    <div>
      <form  onSubmit={handleSubmit} className='form'>
        <input type='text' name='text' placeholder='Search Users...' />
        <input
          type='submit'
          value={text}
          className='btn btn-dark btn-block'
          onChange={(e) => setText(e.target.value)}
        />
      </form>
    </div>
  )
}

export default Search
