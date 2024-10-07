import React from 'react'

const Contact = () => {
  return (
    <div className='bg-slate-300'>
        <h6 className='text-3xl text-center font-bold m-5'>Contact Us?</h6>
        <div className='m-20 mt-3 p-5 '>
            <label className='font-semibold m-2'> Name:</label><br />
            <input type="text" placeholder='Enter Your Name'/><br /><br />
            <label className='font-semibold m-2 '> Name:</label><br />
            <input type="email" placeholder='Enter Your Email'/><br /><br />
            <label className='font-semibold m-2'> Message:</label><br />
            <textarea placeholder='Enter Your Message'/><br /><br />
            <button type="submit" className='font-bold p-1 rounded-full border-solid bg-blue-800 text-1xl w-28 hover:bg-sky-500 hover:text-2xl'>Sent</button>
        </div>
    </div>
  )
}

export default Contact