import React, { useState } from 'react';
import heroimg from '../../assets/Group 171.png'

const Booknow = () => {
  const [starValue, setstarValue] = useState(0);
  const [roomValue, setRoomValue] = useState(0);
  const handleAdd = () => {
    setstarValue(prevValue => prevValue + 1);
    
  };
  const handleroomAdd = () => {
    setRoomValue(pre => pre+ 1);
    
  };

  const handleSubtract = () => {
    setstarValue(prevValue => prevValue - 1);
  };
  const handleRoomSubtract = () => {
    setRoomValue(pre => pre- 1);
  };
    return (
        <div className='mt-10'>
             <div className='block lg:flex  container mx-auto items-center  text-center md:text-start'>

 <div className=' w-full lg:w-3/6 '>
    <img src={heroimg} className='w-full max-w-sm  sm:max-w-md md:max-w-lg mx-auto object-contain'/>
 </div>
  <div  className='w-full lg:w-3/6 '>
<div className='max-w-full lg:max-w-xl mx-auto mt-24'>
<div className="card shrink-0   mx-auto  w-[429px] shadow-2xl bg-base-100">
      <form className="card-body">
        <div>
          <h1 className='text-2xl font-bold text-black '>Book Now</h1>
          <p className='text-black pb-7 pt-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">City</span>
          </label>
          <input type="text" placeholder="placeholder" className="input input-bordered max-w-full " required />
        </div>
        <div className='flex gap-3 '> 
          <div className="form-control">
          <label className="label">
            <span className="label-text">Arrival</span>
          </label>
          <input type="text" placeholder="10 OCT" className="input input-bordered w-full max-w-md text-xs" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Departure</span>
          </label>
          <input type="text" placeholder="11 OCT" className="input input-bordered w-full max-w-sm text-xs" required />
        </div>
        </div>
        <div className='flex gap-3 '> 
          <div className="form-control">
          <label className="label">
            <span className="label-text">Star</span>
          </label>
          <div className='flex'>
          <span className='btn font-bold text-xl' onClick={handleSubtract}>-</span>
          <input type="number" className="input input-bordered w-full max-w-sm text-center" value={starValue} />
          <span className='btn  font-bold text-xl' onClick={handleAdd}>+</span>
          </div>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Room</span>
          </label>
          <div className='flex'>
          <span className='btn font-bold text-xl' onClick={handleRoomSubtract}>-</span>
          <input type="number" className="input input-bordered w-full max-w-sm text-center" value={roomValue} />
          <span className='btn  font-bold text-xl' onClick={handleroomAdd}>+</span>
          </div>
        </div>
        </div>

        
        <div className="form-control mt-6 w-32">
          <button className="btn bg-black text-white px-4  text-sm hover:bg-black ">BOOK NOW</button>
        </div>
      </form>
    </div>
</div>

 </div>
            </div>
        </div>
    );
};

export default Booknow;