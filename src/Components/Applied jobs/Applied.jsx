import { useLoaderData, useParams } from "react-router-dom";
import { getItemsFromStorage } from "../../Utilities/localSorage";
import ShowAppliedJObs from "../show Applied job/ShowAppliedJObs";


const Applied = () => {
  const jobs = useLoaderData()
  console.log('Applied jobs section ',jobs);
  const {job_id} = useParams();

  const appliedJobsList = getItemsFromStorage();
  console.log(appliedJobsList);
  console.log(typeof(appliedJobsList[0]));

  console.log(job_id, jobs);
  return (
    <div>
      {
        jobs.find(job =>{
            for (const appliedJobId of appliedJobsList) {
              if(job.job_id == appliedJobId){
                return <ShowAppliedJObs></ShowAppliedJObs>
              }
            }
        })
      }
    </div>
  );
};

export default Applied;