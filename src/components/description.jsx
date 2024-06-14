import { DESCRIPTION } from "../constants";
import { motion } from "framer-motion";
import profilePic from "../assets/profile-pic.png";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const links = [
  {
    name: "Download CV",
    path: "/Avi-Raj.pdf",
  },
  {
    name: <FaLinkedin />,
    path: "https://www.linkedin.com/in/aviraj1729",
  },
  {
    name: <FaGithub />,
    path: "https://github.com/hawkjack1729",
  },
  {
    name: <FaSquareXTwitter />,
    path: "https://x.com/hawkjack1729",
  },
];

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const Description = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col item-center lg:items-start">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl text-black dark:text-white"
            >
              Avi Raj
            </motion.h1>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-5000 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent"
            >
              Robotics Software Engineer
            </motion.span>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6 font-light tracking-tighter text-black dark:text-white"
            >
              {DESCRIPTION}
            </motion.p>
            <motion.div
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="m-5 mb-8 flex flex-wrap gap-8 items-center lg:text-3xl text-xl justify-center"
            >
              {links.map((link, index) => (
                <a
                  href={link.path}
                  key={index}
                  target="_blank"
                  className="hover:text-gray-600"
                >
                  {link.name}
                </a>
              ))}
            </motion.div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="rounded-2xl"
              src={profilePic}
              alt="profile"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;
