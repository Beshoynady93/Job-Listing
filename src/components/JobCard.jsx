/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
const JobCard = ({ jobCard }) => {
  return (
    <div
      key={jobCard.id}
      className={`rounded-md bg-white shadow-md px-6 mb-10 font-heading ${
        jobCard.featured ? 'border-l-primary border-l-4' : ''
      }`}
    >
      <div className="-translate-y-5 space-y-3">
        <img src={jobCard.logo} alt="" className="w-10" />
        <div>
          <span className="text-primary font-bold mr-5">{jobCard.company}</span>
          {jobCard.featured ? (
            <span className="bg-primary text-neutral-lightGrayishCyanFT text-sm font-bold px-3 py-2 rounded-full mr-3">
              NEW!
            </span>
          ) : (
            ''
          )}
          {jobCard.featured ? (
            <span className="bg-neutral-veryDarkGrayishCyan text-neutral-lightGrayishCyanFT font-bold px-3 py-2 rounded-full text-sm">
              FEATURED
            </span>
          ) : (
            ''
          )}
        </div>
        <div>
          <p className="text-neutral-veryDarkGrayishCyan font-bold [word-spacing:3px]">
            {jobCard.position}
          </p>
        </div>
        <div className="text-neutral-darkGrayishCyan flex items-center">
          <span className="mr-2">{jobCard.postedAt}</span>
          <span className="text-2xl mr-2">&#183;</span>
          <span className="mr-2">{jobCard.contract} </span>
          <span className="text-2xl mr-2">&#183;</span>
          <span>{jobCard.location}</span>
        </div>
        <hr className="h-px my-8 bg-neutral-veryDarkGrayishCyan border-[1px]" />
        <div className="flex gap-4 flex-wrap">
          <span className="bg-neutral-lightGrayishCyanFT text-primary font-bold px-2">
            {jobCard.role}
          </span>
          <span className="bg-neutral-lightGrayishCyanFT text-primary font-bold px-2">
            {jobCard.level}
          </span>
          {jobCard.languages.map((language) => (
            <span
              key={language}
              className="bg-neutral-lightGrayishCyanFT text-primary font-bold px-2"
            >
              {language}
            </span>
          ))}
          {jobCard.tools &&
            jobCard.tools.map((tool) => (
              <span
                key={tool}
                className="bg-neutral-lightGrayishCyanFT text-primary font-bold px-2"
              >
                {tool}
              </span>
            ))}
        </div>
      </div>
    </div>
  );
};

export default JobCard;
