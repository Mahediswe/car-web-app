import React from 'react'

const FeatureCar = () => {
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
        }
      ];
  return (
    <div>
        <div>
            <h1 className='text-5xl font-bold text-orange-400 text-center'>Our Products</h1>
            <p className='text-2xl mt-2 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo in ratione consectetur magni quidem eos rem similique autem iste nihil, facere, officiis unde cum officia.</p>
        </div>
        <div className='grid grid-cols-3 gap-5 border-2 space-y-3 mt-10'>
            {carslist.map((item,id)=>{
                return(
                    <div key={id} className='border-blue-400  text-center bg-slate-300'>
                        <img src={item.img} alt="" className='w-full h-[360px]'/>
                        <h1 className='font-bold mt-3 text-2xl text-orange-500'>{item.name}</h1>
                        <p className='mt-3 font-bold text'>{item.price}</p>
                        <button className='bg-slate-500 mt-3'>Add to cart</button>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default FeatureCar