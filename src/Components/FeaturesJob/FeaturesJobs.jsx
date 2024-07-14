import { useContext, useState } from "react";
import { JobContext } from "../Home/Home";
import JobList from "../JobList/JobList";


const FeaturesJobs = () => {
  const jobs = useContext(JobContext);
  const [count, setCount] = useState(4);
  const addAll = () => {
    if (count !== jobs.length){
      setCount(count+(jobs.length - 4));
    }
  };
  return (
    <div className="">
      <div className="text-center">
        <h1 className="text-5xl">Featured Jobs</h1>
        <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
      </div>
      <div className="grid grid-cols-2 gap-6">
        {
          jobs.slice(0, count).map(job => <JobList key={job.job_id} job={job}></JobList>)
        }
      </div>
      <div className="text-center my-4">
        <button className="btn btn-accent text-center" onClick={addAll}>Show All</button>
      </div>
    </div>
  );
};

export default FeaturesJobs;