import React from 'react'
import './Campus.css'
import Gallery1 from '../../assets/gallery-1.png'
import Gallery2 from '../../assets/gallery-2.png'
import Gallery3 from '../../assets/gallery-3.png'
import Gallery4 from '../../assets/gallery-4.png'
import Whitearrow from '../../assets/white-arrow.png'
const Campus = () => {
  return (
    <div className='campus'>
        <div className="gallery">
          <img src={Gallery1} alt="" />
          <img src={Gallery2} alt="" />
          <img src={Gallery3} alt="" />
          <img src={Gallery4} alt="" />
        </div>
        <button className='btn dark-btn'>See more here <img src={Whitearrow} alt="" /></button>

    </div>
  )
}

export default Campus