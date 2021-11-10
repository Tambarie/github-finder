import React,{useState} from 'react'

const Search = () => {

    const [state, setstate] = useState('')

    const onChange = (e) =>{
setstate
    }
  return (
    <div>
      <form className='form'>
        <input type='text' name='text' placeholder='Search Users...' />
        <input
          type='submit'
          value={state}
          className='btn btn-dark btn-block'
          onChange={e => onChange}
        />
      </form>
    </div>
  )
}

export default Search
