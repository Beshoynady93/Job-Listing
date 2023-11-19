/* eslint-disable react/prop-types */
import { useEffect } from 'react';
import jobData from '../assets/data.json';
import JobCard from './JobCard';

// eslint-disable-next-line react/prop-types
const JobList = ({ filteredItems, jobList, setJobList }) => {
  useEffect(() => {
    filteredItems.length === 0
      ? setJobList(jobData)
      : setJobList(
          jobData.filter(
            (job) => {
              for (let i = 0; i <= filteredItems.length; i++) {
                if (job.role === filteredItems[i]) return true;
                if (job.languages.includes(filteredItems[i])) return true;
              }
            }
            //   filteredItems.includes(job.role) ||
            //   filteredItems.includes((item) =>
            //     job.languages.includes(item) ? item : ''
            //   )
          )
        );
  }, [filteredItems]);

  return (
    <section className="px-6">
      {jobList.map((job) => (
        <JobCard key={job.id} jobCard={job} />
      ))}
    </section>
  );
};

export default JobList;
