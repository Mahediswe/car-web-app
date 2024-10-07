import React from 'react';
import { FaMoneyCheckAlt } from "react-icons/fa";
import { FaUsersRectangle } from "react-icons/fa6";
import { FaShippingFast } from "react-icons/fa";
import WhyUsCard from './WhyUsCard';


const WhyUs = () => {
    const icon1=<FaMoneyCheckAlt  className=" text-green-500 mx-auto" size={48}/>
    const icon2=<FaUsersRectangle  className=" text-green-500 mx-auto"  size={48}/>
    const icon3=<FaShippingFast  className=" text-green-500 mx-auto"  size={48}/>
  return (
    <div className='flex flex-col container justify-center bg-slate-300 gap-4'>
        <h1 className='text-4xl font-bold text-center '>Why choose <span className=" text-primary">WheelsDeal </span>?</h1>
        <p className='text-center'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore, quibusdam?</p>
        <div className='grid grid-cols-3'>
            <WhyUsCard icon={icon1} title="Financing Options"/>
            <WhyUsCard icon={icon2} title="Satisfied Customers"/>
            <WhyUsCard icon={icon3} title="Fast & Easy Booking"/>
        </div>
    </div>
  )
}

export default WhyUs