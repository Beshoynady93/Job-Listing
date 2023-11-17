// eslint-disable-next-line react/prop-types
const JobCard = ({ jobCard }) => {
  return (
    <>
      <div key={jobCard.id} className="rounded-md bg-white mb-2">
        <img src={jobCard.logo} alt="" />
        <div>
          <span>{jobCard.company}</span>
          <span>{jobCard.new ? 'NEW!' : ''}</span>
          <span>{jobCard.featured ? 'FEATURED' : ''}</span>
        </div>
        <div>
          <p>{jobCard.position}</p>
        </div>
        <div>
          <span>{jobCard.postedAt}</span>
          {jobCard.contract}
          <span></span>
          {jobCard.location}
          <span></span>
        </div>
        <hr />
        <div>
          <span>{jobCard.role}</span>
          <span>{jobCard.level}</span>
          {jobCard.languages.map((language) => (
            <span key={language}>{language}</span>
          ))}

          {jobCard.tools &&
            jobCard.tools.map((tool) => <span key={tool}>{tool}</span>)}
        </div>
      </div>
    </>
  );
};

export default JobCard;
