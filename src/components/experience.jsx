import { EXPERIENCES } from "../constants";

const Experiences = () => {
  return (
    <>
      <div className="border-b border-neutral-900 pb-4 lg:mb-35">
        <h1 className="my-20 text-center text-4xl">Work Experience</h1>
      </div>
      {EXPERIENCES.map((experience, index) => (
        <div className="mb-8 flex flex-wrap lg:justify-center" key={index}>
          <div className="w-full lg:w-1/4">
            <p className="mb-2 text-sm text-neutral-500">{experience.year}</p>
          </div>
          <div className="w-full max-w-xl lg:w-3/4">
            <h5 className="mb-2 font-semibold">
              {experience.role} - {experience.company}
            </h5>
            <p className="mb-4 text-neutral-400">{experience.description}</p>
            {experience.technologies.map((tech, index) => (
              <span
                className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800"
                key={index}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default Experiences;
