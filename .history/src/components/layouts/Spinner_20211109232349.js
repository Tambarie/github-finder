import React from 'react'

export const Spinner = () => {
  return (
    <div className='ui segment'>
      <div class='ui active inverted dimmer'>
        <div class='ui text loader'>Loading</div>
      </div>
      <p></p>
    </div>
  )
}

export default Spinner
