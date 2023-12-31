import React from 'react';
import imgs from '../../assets/shape1.svg'
import heroimg from '../../assets/Group 171.png'
import sh2 from '../../assets/shape2.svg'
import sh3 from '../../assets/shape4.svg'

const Discount = () => {
    return (
        <div className=' container mx-auto mt-8'>
            <div className='block container  mx-auto lg:flex items-center  text-center md:text-start'>
                <div className='w-full lg:w-3/6 '>
                    <div className='w-full max-w-full lg:max-w-xl  relative ml-0 lg:ml-20'>
                        <img src={imgs} className='mt-[141px] hidden sm:block' alt='shape' />
                        <p className='text-[#1F2027] sm:text-[20px] font-[600] pt-8'>Get 20% off for student</p>
                        <img src={sh2} className='absolute right-[0%] lg:top-[15%] xl:top-[25%] hidden md:block' alt='shape' />
                        <img src={sh3} className='absolute  bottom-[-7%] right-[10%]  hidden md:block' alt='shape' />
                        <h1 className=' text-lg sm:text-3xl    text-[#1F2027]  pb-5 pt-2'>
                            <span className='font-extrabold text-lg sm:text-4xl'>Student discounts available.<br /></span>
                            Get ready for some fun in the sun!

                        </h1>
                        <ul className='md:list-disc md:ps-4 text-[#000000] '>
                            <li>Lorem ipsum dolor sit  tortor </li>
                            <li>Massa quis natoque sit </li>
                            <li>amet quam Eros non pellentesque elit</li>
                            <li>id euismod habitant Sed suspendisse id in ultrices</li>
                        </ul>

                        <a className="btn text-[16px]
 bg-[#F27A44] 
 rounded-[30px]
  text-white py-[16px]
   px-[50px]  font-[400] mt-16 " >
                            Explore More
                        </a>
                    </div>



                </div>
                <div className='w-full lg:w-3/6'>

                    <div className="w-full mx-auto">
                        <img src={heroimg} className='w-full mx-auto  max-w-sm sm:max-w-md   object-contain ' alt='heroimg'/>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default Discount;