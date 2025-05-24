import React from 'react'
import './Title.css'
const Title = (Prop) => {
  return (
    <div className='title'>
        <p>{Prop.subtitle}</p>
        <h2>{Prop.title}</h2>
    </div>
  )
}

export default Title