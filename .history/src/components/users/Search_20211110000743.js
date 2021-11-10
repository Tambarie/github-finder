import React, { useState } from 'react'

const Search = () => {
  const [state, setState] = useState('')

  function handleChange(e) {
    setState(e.target.value)
    con
  }

  return (
    <div>
      <form className='form'>
        <input type='text' name='text' placeholder='Search Users...' />
        <input
          type='submit'
          value={state}
          className='btn btn-dark btn-block'
          onChange={handleChange}
        />
      </form>
    </div>
  )
}

export default Search
