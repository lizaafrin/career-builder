import React, { useContext, useEffect, useState } from 'react';
import { JobContext } from '../HomePage/HomePage';
import { getAppliedjobs } from '../FakeDb/FakeDB';
import AppliedJobCard from '../AppliedJobCard/AppliedJobCard';
import { useLoaderData } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

const AppliedJobs = () => {
    const [appliedJobs, setAppliedJobs] = useState([]);
    const [filteredJobs, setFilteredJobs] = useState([]);

    const jobOpenings = useLoaderData();
    const storedJobs = getAppliedjobs();

    useEffect(() => {
        let savedJob = [];
        for (const id in storedJobs) {
            const addedJobs = jobOpenings.find(job => job.id == id);
            savedJob.push(addedJobs);
        }
        setAppliedJobs(savedJob)
    }, [])

    const filterRemoteJob = () => {
        const remoteJobsArray = [];
        // const remoteJobs = appliedJobs.filter (job => {
        //     job.jobType[1] == 'Remote'
        //     console.log(job.jobType[1]);
        // })
        for (let i=0; i<appliedJobs.length; i++){
            if(appliedJobs[i].jobType[1] == 'Remote'){
                remoteJobsArray.push(appliedJobs[i])
            }
        }
        setFilteredJobs(remoteJobsArray);
    }
    // console.log(filteredJobs);
    const filterOnsiteJob = () => {
        const onsiteJobsArray = [];
        for (let i=0; i<appliedJobs.length; i++){
            if(appliedJobs[i].jobType[1] == 'Onsite'){
                onsiteJobsArray.push(appliedJobs[i])
            }
        }
        setFilteredJobs(onsiteJobsArray);
    }
    // console.log(filteredJobs.length);
    return (
        <div className='flex flex-col gap-8 items-center mt-20'>
            <div className="dropdown">
                <label tabIndex={0} className="btn m-1">Filter by <span className='ml-2'><FontAwesomeIcon icon={faAngleDown}/></span></label>
                <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                    <li><button onClick={() => filterRemoteJob()}>Remote</button></li>
                    <li><button onClick={() => filterOnsiteJob()}>Onsite</button></li>
                </ul>
            </div>
            {
                appliedJobs.length >= filteredJobs.length &&  filteredJobs.map((job) => <AppliedJobCard key={job.email} job={job}></AppliedJobCard>)
            }
            {
                filteredJobs.length == 0 && appliedJobs.map((job) => <AppliedJobCard key={job.email} job={job}></AppliedJobCard>)
            }
            {/* {
                appliedJobs.map((job) => <AppliedJobCard key={job.email} job={job}></AppliedJobCard>)
            } */}
        </div>
    );
};

export default AppliedJobs;