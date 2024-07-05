import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";

const Experiences = () => {
  return (
    <div className="border-b border-white-900 dark:border-neutral-900 pb-4 lg:mb-35">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1 }}
        className="my-20 text-center text-4xl text-black dark:text-white"
      >
        Work Experience
      </motion.h1>
      {EXPERIENCES.map((experience, index) => (
        <div className="mb-8 flex flex-wrap lg:justify-center" key={index}>
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
            className="w-full lg:w-1/4"
          >
            <p className="mb-2 text-sm text-neutral-500">{experience.year}</p>
          </motion.div>
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1 }}
            className="w-full max-w-xl lg:w-3/4"
          >
            <h5 className="mb-2 font-semibold text-black dark:text-white">
              {experience.role} - {experience.company}
            </h5>
            <p className="mb-4 text-neutral-600 dark:text-neutral-400">
              {experience.description}
            </p>
            {experience.technologies.map((tech, index) => (
              <span
                className="mr-2 rounded bg-purple-500 px-2 py-1 text-sm font-medium text-white"
                key={index}
              >
                {tech}
              </span>
            ))}
          </motion.div>
        </div>
      ))}
    </div>
  );
};

export default Experiences;
