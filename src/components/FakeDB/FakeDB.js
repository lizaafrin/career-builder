 const handleApplyBtn = jobID => {
    let appliedJob = getAppliedjobs();
    const quantity = appliedJob[jobID];
    if (!quantity) {
        appliedJob[jobID] = 1;
    }
    else {
        appliedJob.push(jobID);
        // const newQuantity = quantity + 1;
        // appliedJob[jobID] = newQuantity;
    }
    localStorage.setItem('cb-applied-jobs', JSON.stringify(appliedJob));
}


const getAppliedjobs = ()=> {
    let appliedJob = {};

    const storedJob = localStorage.getItem('cb-applied-jobs');
    if (storedJob) {
        appliedJob = JSON.parse(storedJob);
    }
    return appliedJob;

}

export{
    handleApplyBtn,
    getAppliedjobs
}