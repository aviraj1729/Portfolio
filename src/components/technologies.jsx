import { AiOutlinePython } from "react-icons/ai";
import { RiReactjsLine } from "react-icons/ri";
import { TbBrandDjango } from "react-icons/tb";
import { FaGithub } from "react-icons/fa";
import { SiOpencv, SiTailwindcss, SiNeovim, SiMongodb } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { motion } from "framer-motion";

const techIcon = (Icon, duration, color) => (
  <motion.div
    variants={{
      initial: { y: -10 },
      animate: {
        y: [10, -10],
        transition: {
          duration: duration,
          ease: "linear",
          repeat: Infinity,
          repeatType: "reverse",
        },
      },
    }}
    initial="initial"
    animate="animate"
    className="rounded-2xl border-4 border-neutral-800 p-4 text-black dark:text-white"
  >
    <Icon className={`text-7xl ${color}`} />
  </motion.div>
);

const Technologies = () => {
  return (
    <div className="border-b border-white-900 dark:border-neutral-900 pb-24">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl text-black dark:text-white"
      >
        Technologies
      </motion.h1>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        {techIcon(AiOutlinePython, 2, "")}
        {techIcon(TbBrandDjango, 3.5, "text-green-400")}
        {techIcon(SiOpencv, 3, "text-red-700")}
        {techIcon(RiReactjsLine, 5.5, "text-cyan-400")}
        {techIcon(FaGithub, 4, "text-white-700")}
        {techIcon(SiMongodb, 6, "text-green-500")}
        {techIcon(SiNeovim, 3, "text-indigo-500")}
        {techIcon(SiTailwindcss, 6, "text-blue-500")}
        {techIcon(GrMysql, 3.5, "text-white-500")}
      </motion.div>
    </div>
  );
};

export default Technologies;
