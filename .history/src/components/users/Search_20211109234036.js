import React from 'react'

export const Search = () => {
  return (
    <div>
      <form className='form'>
        <input  type="text" name ="text" placeholder="Search Users..."/>
        <input type="submit" value="Search" className="btn "/>
      </form>
    </div>
  )
}
