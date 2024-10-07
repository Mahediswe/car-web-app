import React from 'react';
import img from '../assets/mission.jpg'

const OurMission = () => {
  return (
    <div className='bg-gray-300'>
        <div>
            <h1 className='text-4xl font-semibold text-center'>Our Mission</h1>
        </div>
        <div className='flex flex-row '>
           <div className='w-full p-2 m-2'>
              <img src={img} alt="img" />
           </div>
           <div className='p-2 m-2'>
              <h1 className='text-3xl font-bold '> To create a community where every journey is extraordinary.</h1>
              <p className='text-2xl pt-3'> Empower individuals to achieve sustainable mobility solutions and
              inspire a positive impact on the environment.</p>
              <p className='pt-3'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci
               maiores obcaecati est natus fugiat officiis, iste ut harum
               consequatur laboriosam praesentium non velit perferendis
               perspiciatis temporibus, error nemo itaque autem.</p>
           </div>
        </div>
    </div>
  )
}

export default OurMission