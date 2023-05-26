import React, { createContext, useState } from 'react';
import FeaturedJobs from '../FeaturedJobs/FeaturedJobs';
import Header from '../Header/Header';
import { useLoaderData } from 'react-router-dom';

export const JobContext = createContext([]);

const HomePage = () => {
    const jobOpenings = useLoaderData();
    const [allJobs, setAllJobs] = useState(false);

    
    // console.log(jobOpenings, allJobs);
    return (
        <div>
            <Header></Header>
            <JobContext.Provider value={[allJobs, setAllJobs]}>
                <FeaturedJobs jobs={jobOpenings}></FeaturedJobs>
            </JobContext.Provider>
        </div>
    );
};

export default HomePage;