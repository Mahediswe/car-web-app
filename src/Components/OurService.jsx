import React from 'react';
import { GiCarWheel } from "react-icons/gi";
import { SiGoogleearthengine } from "react-icons/si";
import { MdDesignServices } from "react-icons/md";
import { IoSettings } from "react-icons/io5";
import { FaCar } from "react-icons/fa";
import { SiCoronaengine } from "react-icons/si";
import OurServiceCard from './OurServiceCard';

const OurService = () => {
    const icon1 = <GiCarWheel className='mx-auto' size={36} />;
    const icon2 = (<SiGoogleearthengine  className='mx-auto' size={36} />);
    const icon3 = (<MdDesignServices  className='mx-auto' size={36} />);
    const icon4 = <IoSettings  className='mx-auto' size={36} />;
    const icon5 = <FaCar  className='mx-auto' size={36} />;
    const icon6 = (<SiCoronaengine  className='mx-auto' size={36} />);

    return (
        <div className="container pt-24">
            <div>
                <h1 className='font-bold text-4xl text-center'>Our Services</h1>
            </div>
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 gap-5 border-2 border-black ">
                <OurServiceCard icon={icon1} title="Tiers" />
                <OurServiceCard icon={icon2} title="Google Earth Engine" />
                <OurServiceCard icon={icon3} title="Cars Maintenance" />
                <OurServiceCard icon={icon4} title="Brake Repairs" />
                <OurServiceCard icon={icon5} title="Body Service" />
                <OurServiceCard icon={icon6} title="Engine Service" />
            </div>
        </div>
    );
};

export default OurService;