import React, { useRef } from 'react'
import './Testimonial.css'
import Next_icon from '../../assets/next-icon.png'
import Back_icon from '../../assets/back-icon.png'
import User_1 from '../../assets/user-1.png'
import User_2 from '../../assets/user-2.png'
import User_3 from '../../assets/user-3.png'
import User_4 from '../../assets/user-4.png'

const Testimonial = () => {
    const Slider = useRef();
    let Tx = 0;
    const slideForward = () =>{
        if(Tx > -50){
            Tx -= 25;
        }
        Slider.current.style.transform = `translateX(${Tx}%)`;
    }
    const sildeBackward = () =>{
        if (Tx < 0) {
            Tx += 25
        }
        Slider.current.style.transform = `translateX(${Tx}%)`;
    }
  return (
    <div className='testiominal'>
        <img src={Next_icon} alt="" className='next-btn' onClick={slideForward}/>
        <img src={Back_icon} alt="" className='back-btn' onClick={sildeBackward}/>
        <div className="slider">
            <ul ref={Slider}>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={User_1} alt="" />
                            <div>
                                <h3>Wiliam Jackson</h3>
                                <span>Edusity</span>
                            </div>
                        </div>
                        <p>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={User_2} alt="" />
                            <div>
                                <h3>Emily Williams</h3>
                                <span>Edusity, USA</span>
                            </div>
                        </div>
                        <p>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={User_3} alt="" />
                            <div>
                                <h3>Emily Williams</h3>
                                <span>Edusity, USA</span>
                            </div>
                        </div>
                        <p>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={User_4} alt="" />
                            <div>
                                <h3>William Jackson</h3>
                                <span>Edusity, USA</span>
                            </div>
                        </div>
                        <p>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
                    </div>
                </li>

            </ul>
        </div>
    </div>

  )
}

export default Testimonial