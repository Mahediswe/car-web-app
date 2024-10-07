import React from 'react';
import CarsCard from './CarsCard';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    />
  );
}

const Product = () => {

  const carslist = [
    {
      id: 0,
      name: "Toyota Landcruiser",
      img: "/src/assets/landcruiser.jpg",
      price: "20,000,000/=",
    },
    {
      id: 1,
      name: "Toyota Supra",
      img: '/src/assets/supra.jpg',
      price: "2,500,000",
    },
    {
      id: 2,
      name: "Toyota Prius",
      img: '/src/assets/priouss.jpg',
      price: "30,000,000",
    },
    {
      id: 3,
      name: "Toyota Voxy",
      img: '/src/assets/voxy.jpg',
      price: "20,000,000/=",
    },
  ];

  
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };

  return (
    
      
     <div >
       <h1 className='pt-16 pb-10 text-4xl font-bold text-center '>Our Feature Cars</h1>
           <Slider {...settings}>

            {carslist.map((item,id) => {
            return (
               <div key={id} className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  mt-5 w-full    '>
                       <CarsCard
                       key={item.id}
                      img={item.img}
                       name={item.name}
                       price={item.price}
      
                       />
               </div>
              );
           })}

          </Slider>
     </div>
      
    
    
  );
};

export default Product;