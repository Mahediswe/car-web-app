import React from 'react'
import { BsStarFill } from 'react-icons/bs'
import { BsStarHalf } from 'react-icons/bs'
import { BsCartCheckFill } from 'react-icons/bs'

const CarsCard = ({id,name,img,price}) => {
  return (
  <div>
    
         <div className='border-2 border-secondary bg-slate-200 text-black rounded-xl mb-2 cursor-pointer relative object-cover w-full ' key={id}>
      
        <img src={img} alt="img" className='w-full h-[360px]' />
        <h2 className='font-bold text-2xl text-orange-600'>{name}</h2>
        <p className='font-semibold'>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Ducimus, quae.</p>
        <div>
          <div className='flex flex-row pt-3 pb-2 '>
            <BsStarFill/>
            <BsStarFill/>
            <BsStarFill/>
            <BsStarHalf/>
            <BsStarHalf/>
          
          </div>
            <h3 className='text-2xl'>{price}</h3>
          <div className=''>
             <BsCartCheckFill size={36}/>
          </div>
        </div>


    </div>
  </div>
  )
}

export default CarsCard