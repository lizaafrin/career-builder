import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faMoneyCheckDollar } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const SingleJob = ({ job }) => {
    const { id, logo, position, company, jobType, location, salary } = job;
    return (
        <div className='border border-indigo-100 rounded-lg pl-10 pt-10 text-left'>
            <img className='h-10 w-30 mb-6' src={logo} alt="" srcset="" />
            <h3 className='font-bold text-2xl'>{position}</h3>
            <p className='my-2 text-gray-500 font-semibold text-xl'>{company}</p>
            <div className='flex gap-2 lg:gap-4 my-2'>
                <p className='border border-indigo-200 font-medium text-violet-500 text-center rounded-md h-9 w-24 pt-1'>{jobType[0]}</p>
                <p className='border border-indigo-200 font-medium text-violet-500 text-center rounded-md h-9 w-24 pt-1'>{jobType[1]}</p>
            </div>
            <div className='lg:flex gap-8 my-4'>
                <div className='flex lg:flex-row gap-2 items-center'>
                    <FontAwesomeIcon icon={faLocationDot} />
                    <p className='font-semibold text-gray-500'>{location}</p>
                </div>
                <div className='flex lg:flex-row gap-2 items-center'>
                    <FontAwesomeIcon icon={faMoneyCheckDollar} />
                    <p className='font-semibold text-gray-500'>Salary: {salary}</p>
                </div>
            </div>
            <button className='btn btn-apply h-10 w-32 mx-auto mb-6 mt-2'>
                <Link state={job} to='/details'>View Details</Link>
            </button>
        </div>
    );
};

export default SingleJob;