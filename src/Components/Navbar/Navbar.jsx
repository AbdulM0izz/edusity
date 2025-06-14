import React, { useEffect, useState } from 'react'
import './Navbar.css'
import Logo from '../../assets/logo.png'
import { Link } from 'react-scroll'
import Menu_icon from '../../assets/menu-icon.png'
const Navbar = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    })
  },[])
  const [mobilemenu, setmobilemenu] = useState(false);

  const toggleMenu = () => {
    mobilemenu ? setmobilemenu(false) : setmobilemenu(true);
  }
  
  return (
    <nav className={`container ${sticky? 'dark-nav':''}`}> 
        <img src={Logo} alt="" className='logo' />
        <ul className={mobilemenu ? '' : 'hide-mobile-menu'}>
            <li><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
            <li><Link to='programs' smooth={true} offset={-260} duration={500}>Program</Link></li>
            <li><Link to='about' smooth={true} offset={-150} duration={500}>About us</Link></li>
            <li><Link to='campus' smooth={true} offset={-260} duration={500}>Campus</Link></li>
            <li><Link to='testiominal' smooth={true} offset={-260} duration={500}>Testimonial</Link></li>
            <li><Link to='contact' smooth={true} offset={-260} duration={500} className='btn'>Contact us</Link></li>
        </ul>
        <img src={Menu_icon} alt="" className='menu-icon' onClick={toggleMenu}/>
    </nav>
  )
}

export default Navbar