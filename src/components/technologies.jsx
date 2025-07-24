import { AiOutlinePython } from "react-icons/ai";
import { RiReactjsLine } from "react-icons/ri";
import {
  TbBrandDjango,
  TbBrandSupabase,
  TbBrandNodejs,
  TbBrandSocketIo,
  TbBrandCpp,
} from "react-icons/tb";
import { FaGithub, FaJava } from "react-icons/fa";
import {
  SiOpencv,
  SiTailwindcss,
  SiVim,
  SiMongodb,
  SiPostman,
  SiFastapi,
} from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { DiRedis } from "react-icons/di";
import { motion } from "framer-motion";

const techIcon = (Icon, duration, color, label, tooltipPosition = "top") => {
  const isTop = tooltipPosition === "top";

  return (
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
      className="group relative rounded-2xl border-4 border-neutral-800 p-4 text-black dark:text-white"
    >
      <Icon className={`text-7xl ${color}`} />
      <span
        className={`absolute ${
          isTop ? "bottom-full mb-2" : "top-full mt-2"
        } left-1/2 -translate-x-1/2 scale-0 rounded bg-neutral-900 px-2 py-1 text-xs text-white opacity-0 transition-all group-hover:scale-100 group-hover:opacity-100 dark:bg-white dark:text-black`}
      >
        {label}
      </span>
    </motion.div>
  );
};

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
        <div className="flex flex-wrap items-center justify-center gap-4">
          {techIcon(AiOutlinePython, 2, "text-green-500", "Python", "top")}
          {techIcon(FaJava, 3, "text-red-500", "Java", "top")}
          {techIcon(TbBrandCpp, 2.5, "text-blue-700", "C++", "top")}
          {techIcon(TbBrandDjango, 3.5, "text-green-600", "Django", "top")}
          {techIcon(SiOpencv, 3, "text-red-700", "OpenCV", "top")}
          {techIcon(RiReactjsLine, 5.5, "text-cyan-400", "React", "top")}
          {techIcon(TbBrandNodejs, 2, "text-green-500", "Node.js", "top")}
          {techIcon(FaGithub, 4, "text-white-700", "GitHub", "top")}
          {techIcon(SiMongodb, 6, "text-green-500", "MongoDB", "top")}
          {techIcon(SiVim, 3, "text-indigo-500", "Vim", "top")}
          {techIcon(SiTailwindcss, 6, "text-blue-500", "TailwindCSS", "top")}
          {techIcon(GrMysql, 3.5, "text-white-500", "MySQL", "bottom")}
          {techIcon(TbBrandSupabase, 2, "text-green-500", "Supabase", "bottom")}
          {techIcon(SiFastapi, 2, "text-teal-600", "FastAPI", "bottom")}
          {techIcon(SiPostman, 2, "text-orange-500", "Postman", "bottom")}
          {techIcon(DiRedis, 4, "text-red-500", "Redis", "bottom")}
          {techIcon(TbBrandSocketIo, 4, "", "Socket.IO", "bottom")}
        </div>
      </motion.div>
    </div>
  );
};

export default Technologies;
