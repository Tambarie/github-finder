import React from 'react'

function Alert({color,message}) {
  return (
    alert.message !== null && (
      <div className={`alert alert-${alert.color}`}>
        <i className='fas fa-info-circle' />
        {alert.message}
      </div>
    )
  )
}

export default Alert
