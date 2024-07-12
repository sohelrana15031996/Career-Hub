import PropType from 'prop-types'

const JobList = ({job}) => {
  const {company_logo} = job;
  return (
    <div>
      <img src={company_logo} alt="" />
    </div>
  );
};
JobList.propTypes ={
  job:PropType.object
}

export default JobList;