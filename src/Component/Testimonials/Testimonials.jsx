import React from 'react';
import avater from '../../assets/Ellipse 1.png'

const Testimonials = () => {
    return (
        <div className='container mx-auto mt-20'>
            <h2 className='text-center text-[40px] font-semibold'>Testimonials</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 container mx-auto justify-center '>
                <div className="card  ">
                    <div className="avatar justify-center">
                        <div className="w-24 rounded-full mt-16">
                            <img src={avater} alt='avatar' />
                        </div>
                    </div>
                    <h2 className=" text-center pt-4">Corey Korsgaard</h2>
                    <hr className='w-32  mx-auto mt-4' />
                    <div className="card-body  text-center">

                        <p>IIt is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>

                    </div>
                </div>
                <div className="card  ">
                    <div className="avatar justify-center">
                        <div className="w-24 rounded-full mt-16">
                            <img src={avater} alt='avatar' />
                        </div>
                    </div>
                    <h2 className=" text-center pt-4">Jakob Aminoff</h2>
                    <hr className='w-32  mx-auto mt-4' />
                    <div className="card-body  text-center">

                        <p>IIt is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>

                    </div>
                </div>
                <div className="card  ">
                    <div className="avatar justify-center">
                        <div className="w-24 rounded-full mt-16">
                            <img src={avater} alt='avatar' />
                        </div>
                    </div>
                    <h2 className=" text-center pt-4">Carla Press</h2>
                    <hr className='w-32  mx-auto mt-4' />
                    <div className="card-body  text-center">

                        <p>IIt is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;