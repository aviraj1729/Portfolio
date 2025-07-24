import { PROJECTS } from "../constants";
import { motion, AnimatePresence } from "framer-motion";
import { BiLinkExternal } from "react-icons/bi";
import {
  FaGithub,
  FaTimes,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import { useState, useEffect, useCallback } from "react";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const swipeThreshold = 50;
  let touchStartX = 0;
  let touchEndX = 0;

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedProject) return;
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "Escape") closeCarousel();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedProject]);
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedProject]);

  const handleTouchStart = (e) => {
    touchStartX = e.changedTouches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    touchEndX = e.changedTouches[0].clientX;
    const distance = touchStartX - touchEndX;
    if (distance > swipeThreshold) nextImage();
    else if (distance < -swipeThreshold) prevImage();
  };

  const openCarousel = (project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
  };

  const closeCarousel = () => {
    setSelectedProject(null);
  };

  const nextImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) =>
        prev === selectedProject.images.length - 1 ? 0 : prev + 1,
      );
    }
  };

  const prevImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) =>
        prev === 0 ? selectedProject.images.length - 1 : prev - 1,
      );
    }
  };
  return (
    <div className="border-b border-white-900 dark:border-neutral-900 pb-4 lg:mb-35">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl text-black dark:text-white"
      >
        Personal Projects
      </motion.h1>
      <div>
        {PROJECTS.map((project, index) => (
          <div
            key={index}
            className="mb-8 flex gap-3 flex-wrap lg:justify-center"
          >
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="w-full lg:w-1/4"
            >
              <img
                className="mb-6 rounded cursor-pointer hover:opacity-80 transition"
                src={project.images[0]}
                onClick={() => openCarousel(project)}
                width={300}
                height={300}
                alt={project.title}
              />
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.5 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <h6 className="mb-2 font-semibold text-black dark:text-white">
                {project.title}
              </h6>
              <p className="mb-4 text-neutral-600 dark:text-neutral-400">
                {project.description}
              </p>
              <div className="flex flex-wrap">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className={`mr-2 mb-2 whitespace-nowrap rounded bg-purple-500 px-2 py-1 text-sm font-medium text-white ${
                      index % 4 === 0 ? "sm:w-auto" : ""
                    }`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4 mt-2">
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-blue-500 hover:underline"
                  >
                    <BiLinkExternal className="text-lg" /> Live Demo
                  </a>
                )}
                {project.github_link && (
                  <a
                    href={project.github_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-blue-500 hover:underline"
                  >
                    <FaGithub className="text-lg" /> Github
                  </a>
                )}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
      <div className="flex">
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              <div className="relative w-full max-w-5xl px-4  group">
                {/* Close Button */}
                <button
                  onClick={closeCarousel}
                  className="absolute right-6 top-10 flex items-center justify-center bg-black/40 hover:bg-black/60 text-white md:text-3xl rounded-full md:w-10 md:h-10 w-5 h-5 z-30 transition-opacity opacity-0 group-hover:opacity-100"
                >
                  <FaTimes />
                </button>

                {/* Image Container with Overlay Arrows */}
                <div className="relative flex items-center justify-center mt-8 rounded-lg overflow-hidden max-h-[80vh]">
                  {/* Left Arrow (hidden on mobile, shown on hover) */}
                  <button
                    onClick={prevImage}
                    className="absolute left-2 md:flex hidden items-center justify-center bg-black/40 hover:bg-black/60 text-white text-3xl rounded-full w-10 h-10 z-30 transition-opacity opacity-0 group-hover:opacity-100"
                  >
                    <FaChevronLeft />
                  </button>

                  {/* Image */}
                  <img
                    src={selectedProject.images[currentImageIndex]}
                    alt="project slide"
                    className="object-contain max-h-[75vh] w-auto rounded shadow-lg"
                  />

                  {/* Right Arrow (hidden on mobile, shown on hover) */}
                  <button
                    onClick={nextImage}
                    className="absolute right-2 md:flex hidden items-center justify-center bg-black/40 hover:bg-black/60 text-white text-3xl rounded-full w-10 h-10 z-30 transition-opacity opacity-0 group-hover:opacity-100"
                  >
                    <FaChevronRight />
                  </button>
                </div>

                {/* Dots Indicator */}
                <div className="flex justify-center mt-4 space-x-2">
                  {selectedProject.images.map((_, idx) => (
                    <span
                      key={idx}
                      className={`h-2 w-2 rounded-full ${
                        idx === currentImageIndex ? "bg-white" : "bg-white/40"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Projects;
