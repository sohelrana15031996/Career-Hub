import PropType from 'prop-types'
import { Link } from 'react-router-dom';

const JobList = ({ job }) => {
  const { job_id,company_logo, title, company, salary, work_arrangement, job_type, location } = job;
  return (
    <div>
      <div className="card bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src={company_logo}
            alt="Logo"
            className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{title}</h2>
          <h6>{company}</h6>
          <div className='flex gap-4'>
            <button className='btn bg-lime-100'>{job_type}</button>
            <button className='btn bg-lime-100'>{work_arrangement}</button>
          </div>
          <div className='flex gap-4'>
            <p>Location:{location}</p>
            <p>Salary: {salary}</p>
          </div>
          <div className="card-actions">
            <Link to={`./jobs/${job_id}`}>
              <button className="btn btn-primary">Show Details</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
JobList.propTypes = {
  job: PropType.object
}

export default JobList;