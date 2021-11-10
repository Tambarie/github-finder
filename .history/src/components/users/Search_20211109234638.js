import React from 'react'

export default const Search = () => {
  return (
    <div>
      <form className='form'>
        <input type='text' name='text' placeholder='Search Users...' />
        <input
          type='submit'
          value='Search'
          className='btn btn-dark btn-block'
        />
      </form>
    </div>
  )
}
