import { AiOutlinePython } from "react-icons/ai";
import { RiReactjsLine } from "react-icons/ri";
import {
  TbBrandDjango,
  TbBrandSupabase,
  TbBrandNodejs,
  TbBrandSocketIo,
  TbBrandCpp,
} from "react-icons/tb";
import {
  FaGithub,
  FaJava,
  FaAws,
  FaAndroid,
  FaApple,
  FaLinux,
  FaBootstrap,
} from "react-icons/fa";

import {
  SiOpencv,
  SiTailwindcss,
  SiVim,
  SiMongodb,
  SiPostman,
  SiFastapi,
  SiTypescript,
  SiJavascript,
  SiExpress,
  SiPostgresql,
  SiDocker,
  SiNginx,
  SiGooglecloud,
  SiReact,
  SiGradle,
  SiKubernetes,
  SiXcode,
  SiAndroidstudio,
  SiExpo,
  SiFlask,
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
            duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
          },
        },
      }}
      initial="initial"
      animate="animate"
      className="group relative z-10 overflow-visible rounded-2xl border-4 border-neutral-800 p-4 text-black dark:text-white"
    >
      <Icon className={`text-7xl ${color}`} />

      <span
        className={`pointer-events-none absolute z-50 whitespace-nowrap ${
          isTop ? "bottom-full mb-3" : "top-full mt-3"
        } left-1/2 -translate-x-1/2 scale-0 rounded-md bg-neutral-900 px-3 py-1 text-xs text-white opacity-0 shadow-lg transition-all duration-200 group-hover:scale-100 group-hover:opacity-100 dark:bg-white dark:text-black`}
      >
        {label}
      </span>
    </motion.div>
  );
};

const Technologies = () => {
  return (
    <div className="border-b border-neutral-900 dark:border-neutral-800 pb-24">
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
        className="flex flex-wrap items-center justify-center gap-x-4 gap-y-8"
      >
        {/* Languages */}
        {techIcon(AiOutlinePython, 2, "text-green-500", "Python", "top")}
        {techIcon(FaJava, 3, "text-red-500", "Java", "top")}
        {techIcon(TbBrandCpp, 2.5, "text-blue-700", "C++", "top")}
        {techIcon(SiJavascript, 3, "text-yellow-400", "JavaScript", "top")}
        {techIcon(SiTypescript, 3.5, "text-blue-500", "TypeScript", "top")}

        {/* Backend */}
        {techIcon(TbBrandNodejs, 2, "text-green-500", "Node.js", "top")}
        {techIcon(SiExpress, 2.5, "text-gray-400", "Express.js", "top")}
        {techIcon(SiPostgresql, 4, "text-blue-500", "PostgreSQL", "top")}
        {techIcon(DiRedis, 4, "text-red-500", "Redis", "top")}
        {techIcon(TbBrandSocketIo, 4, "text-white", "Socket.IO", "top")}
        {techIcon(TbBrandSupabase, 3, "text-green-500", "Supabase", "top")}

        {/* Frontend + Mobile */}
        {techIcon(RiReactjsLine, 5, "text-cyan-400", "React.js", "bottom")}
        {techIcon(SiReact, 4.5, "text-cyan-300", "React Native", "bottom")}
        {techIcon(SiExpo, 4, "text-white", "Expo", "bottom")}
        {techIcon(SiTailwindcss, 5, "text-sky-500", "TailwindCSS", "bottom")}

        {/* Tools + DevOps */}
        {techIcon(FaGithub, 4, "text-gray-200", "GitHub", "bottom")}
        {techIcon(SiDocker, 3.5, "text-blue-400", "Docker", "bottom")}
        {techIcon(SiNginx, 3.5, "text-green-500", "Nginx", "bottom")}
        {techIcon(FaAws, 4, "text-orange-400", "AWS", "bottom")}
        {techIcon(SiGooglecloud, 4, "text-blue-400", "GCP", "bottom")}
        {techIcon(SiKubernetes, 4.5, "text-blue-500", "Kubernetes", "bottom")}
        {techIcon(SiPostman, 3.5, "text-orange-500", "Postman", "bottom")}
        {techIcon(SiGradle, 3.5, "text-green-400", "Gradle", "bottom")}
        {techIcon(SiVim, 3, "text-emerald-500", "Vim", "bottom")}

        {/* Extra */}
        {techIcon(TbBrandDjango, 3.5, "text-green-600", "Django", "bottom")}
        {techIcon(SiFastapi, 3.5, "text-teal-500", "FastAPI", "bottom")}
        {techIcon(SiOpencv, 3.5, "text-red-600", "OpenCV", "bottom")}
        {techIcon(GrMysql, 3.5, "text-sky-400", "MySQL", "bottom")}
        {techIcon(SiMongodb, 6, "text-green-500", "MongoDB", "bottom")}

        {techIcon(FaAndroid, 3, "text-green-500", "Android", "bottom")}
        {techIcon(FaApple, 3, "text-gray-300", "iOS", "bottom")}
        {techIcon(
          SiAndroidstudio,
          3,
          "text-green-500",
          "Android Studio",
          "bottom",
        )}
        {techIcon(SiXcode, 3, "text-blue-400", "Xcode", "bottom")}
        {techIcon(FaLinux, 3, "text-yellow-400", "Linux", "bottom")}
        {techIcon(FaBootstrap, 3, "text-purple-500", "Bootstrap", "bottom")}
        {techIcon(SiFlask, 3, "text-gray-300", "Flask", "bottom")}
      </motion.div>
    </div>
  );
};

export default Technologies;
