import React from 'react';

const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-base-100 container">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
      <li><a>Home</a></li>
      <li><a>About</a></li>
      <li><a>Schedules</a></li>
      <li><a>Membership</a></li>
      <li><a>Pricing</a></li>
     
      </ul>
    </div>
    <a className="btn btn-ghost text-xl"></a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 text-[16px] text-[#262626]">
      <li><a>Home</a></li>
      <li><a>About</a></li>
      <li><a>Schedules</a></li>
      <li><a>Membership</a></li>
      <li><a>Pricing</a></li>
          </ul>
  </div>
  <div className="navbar-end">
  <a className=" mx-1 pe-[40px] text-[#7D7D7D]">Offers</a>
<a className="btn text-[16px] bg-[#F27A44] rounded-[30px] text-white py-[16px] px-[32px]  font-[400] " >Courses</a>
  </div>
</div>
        </div>
    );
};

export default Navbar;