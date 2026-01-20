import React, { useState, useEffect } from "react";
import { CERTIFICATIONS } from "../constants";
import { motion } from "framer-motion";
import ViewPdf from "./ViewPdf";

export default function Certifications() {
  const [parentDimensions, setParentDimensions] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const updateDimensions = () => {
      const element1 = document.getElementById("certificates-container");
      const element2 = document.getElementById("certificates-section");
      if (element1 && element2) {
        setParentDimensions({
          ContainerWidth: element1.clientWidth,
          ContainerHeight: element1.clientHeight,
          SectionWidth: element2.clientWidth,
          SectionHeight: element2.clientHeight,
        });
      }
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  return (
    <div
      className="border-b border-white-900 dark:border-neutral-900 pb-4 lg:mb-35"
      id="certificates-section"
    >
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl text-black dark:text-white"
      >
        Certificates and Awards
      </motion.h1>
      <div>
        {CERTIFICATIONS.map((certificate, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div
              id="certificates-container"
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="w-full lg:w-1/4 px-5 mb-1 flex justify-start ml-2"
            >
              <ViewPdf
                pdfFile={certificate.pdf_certificate}
                parentDimensions={parentDimensions}
              />
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.5 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <div className="flex justify-between">
                <h6 className="my-2 font-semibold text-black dark:text-white">
                  {certificate.title} - {certificate.company}
                </h6>
                <p className="m-2 text-sm text-neutral-500 whitespace-nowrap">
                  {certificate.year}
                </p>
              </div>
              <p className="mb-4 text-neutral-600 dark:text-neutral-400">
                {certificate.description}
              </p>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}
