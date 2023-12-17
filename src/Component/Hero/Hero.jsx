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
        <div className=''>
            <div className='block lg:flex container mx-auto items-center  text-center md:text-start'>
 <div  className='w-full lg:w-3/6 '>
<div className='max-w-full lg:max-w-xl mx-auto relative'>
<img src={imgs} className='mt-[141px]  hidden sm:block' />
<p className='text-[#1F2027] font-[Inter] text-base sm:text-[20px] font-[600] pt-8 text-center md:text-start'>Discover the beauty of the tropics</p>
<img src={sh2} className='absolute right-0 lg:bottom-[70%] xl:bottom-[50%] hidden md:block'  />
<img src={cir} className='absolute right-0 bottom-[10%] hidden md:block'  />
<img src={sh3} className='absolute right-0 bottom-[-7%] left-[50%]  hidden md:block' />
<h1 className=' text-2xl sm:text-7xl md:text-[80px] font-[Poppins]  text-center md:text-start text-[#1F2027] md:leading-[100px] pb-[50px] pt-8'>
<span className='font-extrabold'>Tropical Destinations<br /></span> 
For Student
</h1>
<p className='text-[#505C59] text-center md:text-start'>Lorem ipsum dolor sit amet consectetur. Sit mattis donec mi bibendum integer rutrum nisi. A nec nisl vitae </p>
<a className="btn text-[16px] bg-[#F27A44] rounded-[30px] text-white py-[16px] px-[32px]  font-[400] mt-[50px] text-center md:text-start " >SIGN UP</a>
</div>

 </div>
 <div className=' w-full lg:w-3/6 relative'>
    <img src={heroimg} className='max-w-sm  sm:max-w-md md:max-w-lg mx-auto object-contain'/>
    <img src={greenshape} className='absolute left-0 top-10'/>
    <img src={cir2} className='absolute right-16 bottom-[-17%] '/>
 </div>
            </div>
        </div>
    );
};

export default Hero;