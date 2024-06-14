import { EDUCATION } from "../constants";
import { motion } from "framer-motion";

const Education = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1 }}
        className="my-20 text-center text-4xl text-black dark:text-white"
      >
        Education
      </motion.h1>
      {EDUCATION.map((education, index) => (
        <div className="mb-8 flex flex-wrap lg:justify-center" key={index}>
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
            className="w-full lg:w-1/4"
          >
            <p className="mb-2 text-sm text-neutral-500">{education.year}</p>
          </motion.div>
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1 }}
            className="w-full max-w-xl lg:w-3/4"
          >
            <h6 className="mb-2 font-semibold text-black dark:text-white">
              {education.institute}, {education.address}
            </h6>
            <p className="mb-4 text-neutral-400">
              {education.degree} | {education.cgpa}
            </p>
          </motion.div>
        </div>
      ))}
    </div>
  );
};
export default Education;
