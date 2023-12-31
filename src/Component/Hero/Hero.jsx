import React from 'react';
import imgs from '../../assets/shape1.svg'
import heroimg from '../../assets/Group 171.png'
import sh2 from '../../assets/shape2.svg'
import sh3 from '../../assets/shape3.svg'
import cir from '../../assets/circle1.svg'
import cir2 from '../../assets/gcircle.svg'
import greenshape from '../../assets/greenshape.svg'
const Hero = () => {
    return (
        <div className='bg-[#F8F1D340] lg:h-[969px]'>
            <div className='block lg:flex container mx-auto items-center  text-center md:text-start'>
                <div className='w-full lg:w-3/6 '>
                    <div className='max-w-full lg:max-w-xl mx-auto relative'>
                        <img src={imgs} className='mt-[141px]  hidden lg:block' alt='shape' />
                        <p className='text-[#1F2027] font-[Inter] text-base sm:text-[20px] font-[600] pt-8 text-center md:text-start'>Discover the beauty of the tropics</p>
                        <img src={sh2} className='absolute right-0 lg:bottom-[55%] xl:bottom-[55%] hidden lg:block' alt='shape' />
                        <img src={cir} className='absolute right-0 bottom-[10%] hidden lg:block' alt='shape' />
                        <img src={sh3} className='absolute right-0 bottom-[-7%] left-[50%]  hidden lg:block' alt='shape' />
                        <h1 className=' text-2xl sm:text-7xl md:text-[80px] font-[Poppins]  text-center md:text-start text-[#1F2027] md:leading-[100px] pb-1 lg:pb-[50px] lg:pt-8'>
                            <span className='font-extrabold'>Tropical Destinations<br /></span>
                            For Student
                        </h1>
                        <p className='text-[#505C59] text-center md:text-start'>Lorem ipsum dolor sit amet consectetur. Sit mattis donec mi bibendum integer rutrum nisi. A nec nisl vitae </p>
                        <a className="btn text-[16px] bg-[#F27A44] rounded-[30px] text-white lg:py-[16px] px-[32px]  font-[400] mt-0 lg:mt-[50px] text-center md:text-start " >SIGN UP</a>
                    </div>

                </div>
                <div className=' w-full lg:w-3/6 relative'>
                    <img src={heroimg} className='w-24 md:w-[30%] lg:w-full  md:max-w-lg mx-auto object-contain' alt='heroimg' />
                    <img src={greenshape} className='absolute left-0 top-10 hidden lg:block' alt='shape' />
                    <img src={cir2} className='absolute right-16 bottom-[-17%]  hidden lg:block' alt='shape' />
                </div>
            </div>
        </div>
    );
};

export default Hero;