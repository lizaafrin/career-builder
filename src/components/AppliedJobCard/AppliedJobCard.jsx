import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faMoneyCheckDollar } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const AppliedJobCard = ({ job }) => {
    const { id, logo, position, company, jobType, location, salary } = job;
    return (
        <div className='job-card'>
            <div className='bg-gray-200 sm:w-1/4 m-2 flex justify-center items-center rounded-lg'>
                <img className='h-20 py-4' src={logo} alt="" srcset="" />
            </div>
            <div className='w-1/2 text-left m-2'>
                <h3 className='font-bold text-2xl'>{position}</h3>
                <p className='my-2 text-gray-500 font-semibold text-xl'>{company}</p>
                <div className='flex gap-4 my-2 w-72'>
                    <p className='border border-indigo-200 font-medium text-violet-500 text-center rounded-md sm:h-9 sm:w-24 sm:pt-1 p-1'>{jobType[0]}</p>
                    <p className='border border-indigo-200 font-medium text-violet-500 text-center rounded-md sm:h-9 sm:w-24 sm:pt-1 p-1'>{jobType[1]}</p>
                </div>
                <div className=' gap-12 sm:gap-4 my-4 w-72 sm:w-full'>
                    <div className='flex gap-1 items-center mb-4'>
                        <FontAwesomeIcon className='w-16' icon={faLocationDot} />
                        <p className='font-semibold text-gray-500 w-full'>{location}</p>
                    </div>
                    <div className='flex gap-2 items-center'>
                        <FontAwesomeIcon className='w-16' icon={faMoneyCheckDollar} />
                        <p className='font-semibold text-gray-500 w-full'>Salary: {salary}</p>
                    </div>
                </div>
            </div>
            <div className='w-72 my-4'>
                <button className='btn btn-apply h-10 w-32 '>
                    <Link state={job} to='/details'>View Details</Link>
                </button>
            </div>
        </div>
    );
};

export default AppliedJobCard;