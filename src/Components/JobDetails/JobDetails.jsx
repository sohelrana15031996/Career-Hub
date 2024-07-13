import { useLoaderData, useParams } from "react-router-dom";

const JobDetails = () => {
  const jods = useLoaderData();
  const {job_id} = useParams();

  console.log(job_id, jods);

  const job = jods.find(job=>job.job_id == job_id);
const {description,title, location} =job;
 

  return (
    <div className="flex gap-10">
      <div>
        <h1 className="text-5xl">{title}</h1>
        <span className="font-bold text-xl">Description</span><p>{description}</p>
      </div>
      <div className="flex flex-col gap-4">
        {location}
        <button className="btn btn-accent">Apply Now</button>
      </div>
    </div>
  );
};

export default JobDetails;