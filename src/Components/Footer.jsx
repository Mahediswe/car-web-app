import React from 'react'
import { Link } from 'react-scroll'

const Footer = () => {
  return (
    <div className='grid grid-cols-2 p-10 m-5 bg-blue-500 '>
        <div className=' text-center pt-8' >
            &copy;<span>copyright from BD Motors.</span><br />
            <span> All rightd reserved by BD Motors</span>
        </div>
        <div className='flex flex-col'>
             <h1>Links</h1>
                  <Link to="home" spy={true} smooth={true} duration={500} className=' cursor-pointer hover:underline '>Home</Link>
                  <Link to="about" spy={true} smooth={true} duration={500} className=' cursor-pointer hover:underline '>About Us</Link>
                  <Link to="product" spy={true} smooth={true} duration={500} className=' cursor-pointer hover:underline '>Our Product</Link>
                  <Link to="ourservice" spy={true} smooth={true} duration={500} className='cursor-pointer hover:underline '>Contact</Link>
        </div>
    </div>
  )
}

export default Footer