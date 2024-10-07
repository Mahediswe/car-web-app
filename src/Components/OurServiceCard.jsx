import React from 'react'


const OurServiceCard = ({icon,title}) => {
  return (
    <div  className='text-center bg-slate-400 cursor-pointer rounded-md space-x-3 space-y-4 p-10 m-2 border-2 hover:bg-slate-500 hover:font-semibold  border-amber-600'>
          {icon}
        <h1 className='text-primary text-3xl font-bold text-yellow-700'>{title}</h1>
        <p className='font-normal'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Molestiae eos illum optio eaque fugiat perferendis, 
            placeat velit cupiditate repellat rem quod itaque iusto nisi libero.</p>
            
    </div>
  )
}

export default OurServiceCard