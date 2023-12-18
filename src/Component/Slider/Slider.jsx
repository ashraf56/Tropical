import React from 'react';
import card1 from '../../assets/card-image-1.png'
import card2 from '../../assets/card-image.png'
import card3 from '../../assets/card-image-2.png'
import card4 from '../../assets/card-image3.png'
import ic from '../../assets/Icons.svg'



let carddata = [

  {
    id: 1,
    Name: 'Oxford University',
    adress: 'Oxford, England',
    image: `${card1}`
  },
  {
    id: 2,
    Name: 'Harvard University',
    adress: 'Cambridge, Massachusetts, UK',
    image: `${card2}`
  },
  {
    id: 3,
    Name: 'Stanford University',
    adress: 'Stanford, California',
    image: `${card3}`
  },
  {
    id: 4,
    Name: 'Nanyang Technological University',
    adress: 'Nanyang Ave, Singapura',
    image: `${card4}`
  },
]

const Slider = () => {




  return (
    <div className=' mt-16 container mx-auto overflow-hidden'>
      <h1 className='text-[40px] pb-10 ps-10 md:ps-[119px]'>Our Destinations</h1>
      <div className='w-[1400px] flex gap-5 ms-10 md:ms-[80px]'>
        {
          carddata.map(c => (
            <div className="card w-[360px] h-[496px]  bg-base-100 shadow-xl">
              <figure><img src={c.image} alt='img' /></figure>
              <div className="card-body">
                <h2 className="card-title font-[900] ">{c.Name}</h2>

                <div className="flex justify-between items-center">
                  <p className='text-[14px] text-black'>{c.adress}</p>
                  <button className=" rounded-full p-3">
                    <img src={c.adress && ic} alt='adress' />
                  </button>
                </div>
              </div>
            </div>
          ))
        }
      </div>

      <div className='w-32 flex items-center mx-auto mt-[70px]'>
        <span><svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 45 45" fill="none">
          <path d="M45 21.0826H5.42659L14.3463 12.1628L12.3418 10.1583L0 22.4999L12.3418 34.8418L14.3463 32.8372L5.42659 23.9175H45V21.0826Z" fill="#262626" />
        </svg></span>
        <p className='text-[16px] px-4'> <span className='text-[32px]'> 2</span>/144</p>
        <span>
          <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 45 45" fill="none">
            <path d="M0 21.0826H39.5734L30.6537 12.1628L32.6582 10.1583L45 22.4999L32.6582 34.8418L30.6537 32.8372L39.5734 23.9175H0V21.0826Z" fill="#F27A44" />
          </svg>
        </span>
      </div>
    </div>

  );
};

export default Slider;