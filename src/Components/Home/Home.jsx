import Banner from "../Banner/Banner";
import FeaturesJobs from "../FeaturesJob/FeaturesJobs";
import JobCatagory from "../JobCatagory/JobCatagory";



const Home = () => {

  
  return (
    <div>
      <div>
        <Banner></Banner>
        <JobCatagory></JobCatagory>
        <FeaturesJobs></FeaturesJobs>
      </div>
    </div>
  );
};

export default Home;