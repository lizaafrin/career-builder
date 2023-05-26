import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalculator, faLightbulb, faArrowsToEye, faHelmetSafety } from '@fortawesome/free-solid-svg-icons';
import SingleJob from '../SingleJob/SingleJob';
import { JobContext } from '../HomePage/HomePage';

const FeaturedJobs = ({ jobs}) => {
    const [allJobs, setAllJobs] = useContext(JobContext);
    const changeJobState = (jobState) => {
        if(!jobState){
            setAllJobs(true)
        }
    }
    const handleClick = event => {
        event.Target.disabled = true;
        console.log('clicked');
    };
    // console.log(allJobs);
    return (
        <div className='mt-12'>
            <div className=''>
                <h2 className='text-3xl font-bold'>Job Category List</h2>
                <p className='pt-4 text-base'>Explore thousands of job opportunities with all the information you need. Its your future</p>
                <div className='grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4 text-left justify-items-center mt-6'>
                    <div className='category-list'>
                        <div className='icon-style'>
                            <FontAwesomeIcon icon={faCalculator} />
                        </div>
                        <h3 className='font-bold'>Account & Finance</h3>
                        <p className='sm:text-sm'>300 Jobs Available</p>
                    </div>
                    <div className='category-list'>
                        <div className='icon-style'>
                            <FontAwesomeIcon icon={faLightbulb} />
                        </div>
                        <h3 className='font-bold'>Creative Design</h3>
                        <p className='text-sm'>100+ Jobs Available</p>
                    </div>
                    <div className='category-list'>
                        <div className='icon-style'>
                            <FontAwesomeIcon icon={faArrowsToEye} />
                        </div>
                        <h3 className='font-bold'>Marketing & Sales</h3>
                        <p className='text-sm'>150 Jobs Available</p>
                    </div>
                    <div className='category-list'>
                        <div className='icon-style'>
                            <FontAwesomeIcon icon={faHelmetSafety} />
                        </div>
                        <h3 className='font-bold'>Engineering Job</h3>
                        <p className='text-sm'>224 Jobs Available</p>
                    </div>
                </div>
            </div>
            <div className='mt-12' >
                <h2 className='text-3xl font-bold'>Featured Jobs</h2>
                <p className='pt-4'>Explore thousands of job opportunities with all the information you need. Its your future</p>
                <div className='mt-12 grid sm:grid-cols-2 grid-cols-1 gap-6 justify-center'>
                    { !allJobs && jobs.slice(0,4).map(job =>
                            <SingleJob job={job} key={job.id}></SingleJob>
                        )
                    }
                    {
                        allJobs && jobs.map(job =>
                            <SingleJob job={job} key={job.id}></SingleJob>
                        )
                    }
                </div>
                <button onClick={() => changeJobState(allJobs)} className={`btn btn-apply h-10 w-32 mb-6 mt-12 ${allJobs ? 'hidden' : 'inline-block'}`}>See All Jobs</button>
            </div>
        </div>
    );
};

export default FeaturedJobs;