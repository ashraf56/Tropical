import React from 'react';

const Footer = () => {
    return (
        <footer className='text-center my-20 mx-auto'>
            <h1 className='text-[40px] font-bold text-black pb-8' >Student Special: Discounted rates <br /> on tropical getaways!</h1>
            <p className='text-[16px] font-medium pb-12'>Let’s embody your beautiful ideas together, simplify the <br /> way you visualize your next big things.</p>

            <div>
                <ul className="menu menu-horizontal  mx-auto">
                    <li><a>Privacy Policy</a></li>
                    <li><a>Terms of Use</a></li>
                    <li><a>Sales and Refunds</a></li>
                    <li><a>Legal</a></li>
                    <li><a>About</a></li>
                    <li><a>Schedules</a></li>
                    <li><a>Pricing</a></li>
                    <li><a>Membership</a></li>
                    <li><a>Joins</a></li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;