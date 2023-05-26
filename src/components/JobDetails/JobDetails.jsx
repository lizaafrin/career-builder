import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faEnvelope, faLocationDot, faMoneyCheckDollar, faPhone } from '@fortawesome/free-solid-svg-icons';
import { handleApplyBtn } from '../FakeDb/FakeDB';


const JobDetails = () => {
    const location = useLocation();
    const { id, jobDescription, jobResponsibilities, education, experience, salary, position, contactNo, email, address } = location.state;

    return (
        <div className='mt-10 lg:flex  lg:mt-28'>
            <div className='w-full sm:w-3/4 text-justify px-2 sm:pr-32 lg:text-left'>
                <h3 className='text-gray-500 py-4'><span className='font-extrabold text-gray-600'>Job Description:</span> {jobDescription}</h3>
                <h3 className='text-gray-500 py-4'><span className='font-extrabold text-gray-600'>Job Responsibilities:</span> {jobResponsibilities}</h3>
                <h3 className='text-gray-500 py-4'><span className='font-extrabold text-gray-600'>Educational Requirements:</span> {education} </h3>
                <h3 className='text-gray-500 py-4'><span className='font-extrabold text-gray-600'>Experience:</span> {experience} </h3>

            </div>
            <div className='mt-8 lg:w-1/4'>
                <div className='card bg-purple-50'>
                    <h3 className='font-extrabold text-gray-600 my-4 ps-4'>Job Details</h3>
                    <hr className='horizontal-line border-purple-300 w-[80%] mx-auto' />
                    <div className='flex gap-2 items-center my-4 text-left pl-8'>
                        <FontAwesomeIcon icon={faMoneyCheckDollar} />
                        <p className='text-gray-600'><span className='font-semibold'>Salary:</span> {salary}</p>
                    </div>
                    <div className='flex gap-2 items-center text-left pl-8'>
                        <FontAwesomeIcon icon={faCalendar} />
                        <p className='text-gray-600'><span className='font-semibold'>Job Title:</span> {position}</p>
                    </div>
                    <h3 className='font-extrabold text-gray-600 my-4 ps-4'>Contact Information</h3>
                    <hr className='horizontal-line border-purple-300 w-[80%] mx-auto' />
                    <div className='flex gap-2 items-center my-4 text-left pl-8'>
                        <FontAwesomeIcon icon={faPhone} />
                        <p className='text-gray-600'><span className='font-semibold'>Phone:</span> {contactNo}</p>
                    </div>
                    <div className='flex gap-2 items-center text-left pl-8'>
                        <FontAwesomeIcon icon={faEnvelope} />
                        <p className='text-gray-600'><span className='font-semibold'>Email:</span> {email}</p>
                    </div>
                    <div className='flex gap-2 my-4 text-left pl-8'>
                        <FontAwesomeIcon className='pt-1' icon={faLocationDot} />
                        <p className='text-gray-600'><span className='font-semibold'>Address:</span> {address}</p>
                    </div>
                </div>
                <Link state={email} to='/jobs'><button onClick={() => handleApplyBtn(id)} className='btn btn-apply w-full mt-6'>
                    Apply Now
                </button></Link>
            </div>
        </div>
    );
};

export default JobDetails;