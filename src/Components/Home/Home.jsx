import { createContext, useEffect, useState } from "react";
import Banner from "../Banner/Banner";
import FeaturesJobs from "../FeaturesJob/FeaturesJobs";
import JobCatagory from "../JobCatagory/JobCatagory";


export const JobContext = createContext(1);
const Home = () => {
  const [liveJob, setLiveJob] = useState([]);
  useEffect(() => {
    fetch('/Data.json')
      .then(res => res.json())
      .then(data => setLiveJob(data))
  }, []);

  // Creating context api




  return (
    <div>
      <div>
        <JobContext.Provider value={liveJob}>
          <Banner></Banner>
          <JobCatagory></JobCatagory>
          <FeaturesJobs></FeaturesJobs>
        </JobContext.Provider>
      </div>
    </div>
  );
};

export default Home;