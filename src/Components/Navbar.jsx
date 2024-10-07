import React from 'react';
import {Link} from 'react-scroll';
import { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import Aboutt from '../pages/Aboutt'

const Navbar = () => {
  const [menu,setMenu]=useState(false);
  const [showForm,setShowForm]=useState(false);

  const handlechange=()=>{
    setMenu(!menu);
  };
  const closemenu=()=>{
    setMenu(false);
  };
  const openForm=()=>{
    setShowForm(true);
    setMenu(false);
  };
  const closeForm=()=>{
    setShowForm(false);
  };


  return (
    
    <div>

      <div>
        <div className='flex flex-row justify-between  text-lg font-semibold bg-slate-400 p-3 z-10 fixed w-full'>
          
           <div>
                <a href="" className='hover:text-1xl'>Bd Motors</a>
           </div>
           <div className=''>
               <nav className='flex flex-row justify-between gap-10 '>
                  <Link to="/aboutt" spy={true} smooth={true} duration={500} className='group relative inline-block cursor-pointer hover:underline hover:text-white'>Home</Link>
                  <Link to="/about" spy={true} smooth={true} duration={500} className=' cursor-pointer hover:underline hover:text-white'>About Us</Link>
                  <Link to="/featurecar" spy={true} smooth={true} duration={500} className=' cursor-pointer hover:underline hover:text-white'>Our Product</Link>
                  <Link to="ourservice" spy={true} smooth={true} duration={500} className='cursor-pointer hover:underline hover:text-white'>Contact</Link>
               </nav>
            </div>

            <div>
                <button className='bg-emerald-500 rounded-full  p-1 px-4 border-2 hover:bg-emerald-700'>Login</button>
            </div>
            {showForm && <Contact closeForm={closeForm} />}

            <div className='lg:hidden flex items-center cursor-pointer'>
                  {menu? 
                  (<AiOutlineClose size={28} onClick={handlechange} />)
                  :
                  (<AiOutlineMenu size={28} onClick={handlechange} />)}
             </div>
        </div>
        <div className={`${
            menu ? "translate-x-0" : "-translate-x-full"
          } lg:hidden flex flex-col absolute bg-yellow-300 text-sky-900 left-0 top-16 font-semibold text-2xl text-center pt-8 pb-4 gap-8 w-full h-fit transition-transform duration-300`}
        >
                  <Link  spy={true} smooth={true} duration={500} className='group relative inline-block hover:underline hover:text-white'onClick={closemenu} >Home</Link>
                  <Link  spy={true} smooth={true} duration={500} className='hover:underline hover:text-white' onClick={closemenu}>About Us</Link>
                  <Link  spy={true} smooth={true} duration={500} className='hover:underline hover:text-white' onClick={closemenu}>Our Product</Link>
                  <Link spy={true} smooth={true} duration={500} className='hover:underline hover:text-white' onClick={closemenu}>Contact</Link>
                  <div>
                    <button onClick={openForm}>Contact Use</button>
                  </div>
               
        </div>

      </div>
    </div>
  )
}

export default Navbar



