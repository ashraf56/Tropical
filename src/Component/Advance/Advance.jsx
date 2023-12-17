import React from 'react';
import av from '../../assets/Saly-12.png'
import big from '../../assets/bogcircle.svg'
import imgs from '../../assets/shape1.svg'
const Advance = () => {
    return (
        <div  className='mt-[30%] relative container mx-auto'>
            <div>
<img src={big} className='absolute right-24 top-[-30%]  hidden lg:block'/>
            </div>
            <div className='block md:flex items-center'>
<div className='w-full lg:w-3/6  xl:max-w-full '>
    <div className='py-10'>
   
<div className="card card-side bg-white justify-center mx-auto shadow-lg shadow-slate-500 items-center w-[360px] mb-4  rounded-lg">
<div className="avatar">
  <div className="w-[80px] h-[80px] rounded-full ">
    <img src={av} className='max-w-full' />
  </div>
</div>  
<div className="card-body">
    <h2 className="text-[18px] font-[500] ">Jenny Wilson</h2>
    <p className='text-[16px] font-[400] '>Click the button to watch on Jetflix app.</p>
   
  </div>
</div>
<div className="card card-side bg-white justify-center mx-auto shadow-lg shadow-slate-500 items-center w-[360px] mb-4  rounded-lg">
<div className="avatar">
  <div className="w-[80px] h-[80px] rounded-full ">
    <img src={av} className='max-w-full' />
  </div>
</div>  
<div className="card-body">
    <h2 className="text-[18px] font-[500] ">Jenny Wilson</h2>
    <p className='text-[16px] font-[400] '>Click the button to watch on Jetflix app.</p>
   
  </div>
</div>
<div className="card card-side bg-white justify-center mx-auto shadow-lg shadow-slate-500 items-center w-[360px] mb-4  rounded-lg">
<div className="avatar">
  <div className="w-[80px] h-[80px] rounded-full ">
    <img src={av} className='max-w-full' />
  </div>
</div>  
<div className="card-body">
    <h2 className="text-[18px] font-[500] ">Jenny Wilson</h2>
    <p className='text-[16px] font-[400] '>Click the button to watch on Jetflix app.</p>
   
  </div>
</div>
     
    </div>

</div>
<div className='w-full lg:w-3/6 mx-auto relative'>
    <div>
        <img src={imgs} className=' absolute left-[-10%] top-[-20%] hidden lg:block' />
    </div>
<div className='ps-8 max-w-full'>
    <h1 className='text-[30px] font-[400] pb-3 text-[#000000]'><span className='text-[40px] font-bold'>Tropical Adventure</span><br />
for Students.</h1>

<p className='text-[#000000] text-[20px] font-[500] pb-5 '>  Student Tropical Vacation: Relax and Recharge </p> 
<ul className='list-disc ps-4 text-[#000000]'>
    <li>Lorem ipsum dolor sit  tortor </li>
    <li>Massa quis natoque sit </li>
    <li>amet quam Eros non pellentesque elit</li>
    <li>id euismod habitant Sed suspendisse id in ultrices</li>
</ul>

<a className="btn text-[16px]
 bg-[#F27A44] 
 rounded-[30px]
  text-white py-[16px]
   px-[50px]  font-[400] mt-[50px] " >
    Explore More
    </a>
</div>


</div>
            </div>
        </div>
    );
};

export default Advance;