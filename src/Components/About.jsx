import React from 'react';
import img1 from '../assets/about0.jpg';
import img2 from '../assets/about2.jpg'

const About = () => {
  return (
    <div className='bg-slate-300'>

        <div>
        <h3 className='text-3xl font-bold text-center pt-12 '>About us</h3>
            <div className='flex flex-row '>
                <p className='font-semibold p-20 text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Beatae dignissimos quaerat sit debitis atque enim,
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Beatae dignissimos quaerat sit debitis atque enim,
                    reprehenderit in inventore, dolor culpa at minus magni dicta distinctio!</p>
                    <img src={img1} alt="img" className='w-full' />

            </div>
            <div className='flex'>
                <img src={img2} alt="img" className='w-full' />
                <div>
                <h4 className=' text-center text-lg font-bold pt-6'>We also Provide Servicing</h4>
                <p className='font-semibold p-20 text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Beatae dignissimos quaerat sit debitis atque enim,
                    reprehenderit in inventore, dolor culpa at minus magni dicta Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Beatae dignissimos quaerat sit debitis atque enim,
                    reprehenderit in inventore, dolor culpa at minus magni dicta distinctio!</p>
                </div>
                    
                
            </div>
        </div>
    </div>
  )
}

export default About