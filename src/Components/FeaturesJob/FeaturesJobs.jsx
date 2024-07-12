import { useContext, useState } from "react";
import { JobContext } from "../Home/Home";
import JobList from "../JobList/JobList";


const FeaturesJobs = () => {
  const jobs = useContext(JobContext);
  console.log(jobs);
  const [count, setCount]= useState(4);
  const addAll = () => setCount(count+(jobs.length - 1));
  return (
    <div className="">
      <div className="text-center">
        <h1 className="text-5xl">Featured Jobs</h1>
        <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
      </div>
      <div>
        {
          jobs.slice(0,count).map(job => <JobList key={job.job_id} job={job}></JobList>)
        }
      </div>
      <div>
        <button className="" onClick={addAll}>Show more</button>
      </div>
    </div>
  );
};

export default FeaturesJobs;