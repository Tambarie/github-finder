import React from 'react'

function Alert() {
  return (
    <div className={`alert alert-${alert.color}`}>
      <i className='fas fa-info-circle' />
      {alert.message}
    </div>
  )
}

export default Alert
