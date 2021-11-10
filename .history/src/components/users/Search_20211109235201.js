import React,{useState} from 'react'

const Search = () => {

    const [state, setstate] = useState('')
  return (
    <div>
      <form className='form'>
        <input type='text' name='text' placeholder='Search Users...' />
        <input
          type='submit'
          value={() =>onchange()}
          className='btn btn-dark btn-block'
        />
      </form>
    </div>
  )
}

export default Search
