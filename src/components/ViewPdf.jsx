import { useState, useEffect, useRef, useCallback } from "react";
import { pdfjs, Document, Page } from "react-pdf";
import { MdClose, MdNavigateNext, MdNavigateBefore } from "react-icons/md";
import PropTypes from "prop-types";

export default function ViewPdf({ pdfFile, parentDimensions }) {
  const [totalPages, setTotalPages] = useState(0);
  const [pageDimensions, setPageDimensions] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [numPages, setNumPages] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [scaleFactor, setScaleFactor] = useState(1);
  const parentRef = useRef();
  const popupRef = useRef();

  useEffect(() => {
    pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.mjs`;
    const fetchPdfAndCalculateDimensions = async () => {
      try {
        const pdf = await pdfjs.getDocument(pdfFile).promise;
        const pages = Array.from(
          { length: pdf.numPages },
          (_, index) => index + 1,
        );
        const dimensions = await Promise.all(
          pages.map((pageNum) =>
            pdf.getPage(pageNum).then((page) => page.getViewport({ scale: 1 })),
          ),
        );
        setPageDimensions(dimensions);
        const scale = Math.min(
          parentDimensions.SectionWidth / dimensions[0].width,
          parentDimensions.SectionHeight / dimensions[0].height,
        );
        setScaleFactor(scale);
        setTotalPages(pdf.numPages);
      } catch (error) {
        console.error(
          "Error fetching PDF document or calculating dimensions:",
          error,
        );
      }
    };
    fetchPdfAndCalculateDimensions();
  }, [pdfFile, parentDimensions]);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  const handleShowPopup = useCallback(() => {
    if (!showPopup) {
      document.body.style.overflow = "hidden";
      document.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "auto";
      document.removeEventListener("keydown", handleKeyDown);
    }
    setShowPopup(!showPopup);
  }, [showPopup]);

  const handleKeyDown = useCallback(
    (event) => {
      if (event.key === "Escape") {
        handleShowPopup();
      }
    },
    [handleShowPopup],
  );

  const handleOutsideClick = (event) => {
    if (popupRef.current && !popupRef.current.contains(event.target)) {
      handleShowPopup();
    }
  };

  useEffect(() => {
    if (showPopup) {
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [showPopup]);

  const handlePageChange = (offset) => {
    setCurrentPage((prevPage) =>
      Math.min(Math.max(prevPage + offset, 1), numPages),
    );
  };

  return (
    <div className="flex items-center justify-center" ref={parentRef}>
      <div
        className="flex items-center justify-center cursor-pointer text-black dark:text-white rounded-lg"
        onClick={handleShowPopup}
      >
        <Document file={pdfFile} onLoadSuccess={onDocumentLoadSuccess}>
          <Page
            pageNumber={1}
            width={parentDimensions.ContainerWidth / 1.2}
            renderTextLayer={false}
            renderAnnotationLayer={false}
          />
        </Document>
      </div>
      {showPopup && (
        <div className="fixed inset-0 h-50 z-10 flex items-center justify-center bg-black bg-opacity-50">
          <div
            ref={popupRef}
            className="relative bg-white p-8 rounded-lg overflow-auto max-h-full"
          >
            <button
              onClick={handleShowPopup}
              className="absolute top-2 z-50 right-2 p-1 bg-black rounded-full"
            >
              <MdClose className="text-white text-md bg-black-300" />
            </button>
            <div className="flex justify-between items-center mb-4">
              <button
                onClick={() => handlePageChange(-1)}
                disabled={currentPage === 1}
                className="p-2 bg-black rounded-full disabled:opacity-50"
              >
                <MdNavigateBefore className="text-white" />
              </button>
              <span className="text-neutral-500">
                Page {currentPage} of {numPages}
              </span>
              <button
                onClick={() => handlePageChange(1)}
                disabled={currentPage === numPages}
                className="p-2 bg-black rounded-full disabled:opacity-50"
              >
                <MdNavigateNext className="text-white" />
              </button>
            </div>
            <Document file={pdfFile} onLoadSuccess={onDocumentLoadSuccess}>
              <Page
                key={`page_${currentPage}`}
                pageNumber={currentPage}
                scale={scaleFactor}
                renderTextLayer={false}
                renderAnnotationLayer={false}
                canvasBackground="white"
              />
            </Document>
          </div>
        </div>
      )}
    </div>
  );
}

ViewPdf.propTypes = {
  pdfFile: PropTypes.string.isRequired,
  parentDimensions: PropTypes.shape({
    SectionWidth: PropTypes.number.isRequired,
    SectionHeight: PropTypes.number.isRequired,
    ContainerWidth: PropTypes.number.isRequired,
  }).isRequired,
};
