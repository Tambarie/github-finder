import React, { useState } from 'react'

const Search = () => {
  const [state, setState] = useState('')

  function handleChange(e) {
    setState(e.target.value)
  }

  console.log(state)
  return (
    <div>
      <form className='form'>
        <input type='text' name='text' placeholder='Search Users...' />
        <input
          type='submit'
          value={state}
          className='btn btn-dark btn-block'
          onChange={(e) => setState(e.target.value)}
        />
      </form>
    </div>
  )
}

export default Search
