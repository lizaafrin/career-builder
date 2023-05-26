import React from 'react';

const Header = () => {
    return (
        <div className='header container sm:flex pt-12 px-12 items-center'>
            <div className='sm:w-[55%] text-left lg:items-center'>
                <h1 className='text-2xl lg:text-7xl font-bold w-full sm:w-[80%]'>One Step Closer To Your <span className='text-violet-500'>Dream Job</span> </h1>
                <p className='mt-8'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                <button className="btn btn-apply mt-6 mx-auto">Get Started</button>
            </div>
            <div className='mt-8 sm:w-[45%]'>
                <img className='pl-10' src="https://i.ibb.co/1sRpycb/woman-removebg-preview.png" alt="" />
            </div>
        </div>
    );
};

export default Header;