import React from 'react'
import './ServiceCard.css'

function ServiceCard({Servicetitle,Servicedescription}) {
  return (
    <div className='Service-Card'>
        <h2>{Servicetitle}</h2>
        <p>{Servicedescription}</p>
    </div>
  )
}

export default ServiceCard