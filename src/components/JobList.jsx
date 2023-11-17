/* eslint-disable react/prop-types */
import jobList from '../assets/data.json';
import JobCard from './JobCard';

// eslint-disable-next-line react/prop-types
const JobList = ({ filteredItems }) => {
  return (
    <section className="px-6">
      {filteredItems.length == 0
        ? jobList.map((job) => <JobCard key={job.id} jobCard={job} />)
        : ''}
    </section>
  );
};

export default JobList;
