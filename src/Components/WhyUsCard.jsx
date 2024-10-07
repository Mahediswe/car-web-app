import React from 'react'

const WhyUsCard = ({icon,title}) => {
  return (
    <div className='text-center  space-y-4 p-8 bg-slate-200 hover:font-semibold hover:bg-red-100 border-lime-500 border-2 gap-2'>
        <h1 className='text-center'>{icon}</h1>
        <h1 className='text-orange-900 text-3xl font-bold'>{title}</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Soluta error sit iusto laborum porro quidem quisquam? Ullam, voluptate. Nam, blanditiis?
        </p>
    </div>
  )
}

export default WhyUsCard