import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { pdfjs, Document, Page } from "react-pdf";
import { MdClose } from "react-icons/md";

const PdfViewer = ({ fileUrl }) => {
  const [totalPages, setTotalPages] = useState(0);
  const [pageNumber, setPageNumber] = useState(1);
  const [showPopup, setShowPopup] = useState(false);
  const [pageDimensions, setPageDimensions] = useState([]);

  useEffect(() => {
    pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.mjs`;

    // Function to fetch PDF document and calculate page dimensions
    const fetchPdfAndCalculateDimensions = async () => {
      try {
        const pdf = await pdfjs.getDocument(fileUrl).promise;
        const pages = Array.from(
          { length: pdf.numPages },
          (_, index) => index + 1,
        );
        const dimensions = await Promise.all(
          pages.map((pageNum) =>
            pdf.getPage(pageNum).then((page) => page.getViewport({ scale: 1 })),
          ),
        );
        console.log(dimensions);
        setPageDimensions(dimensions);
        setTotalPages(pdf.numPages);
      } catch (error) {
        console.error(
          "Error fetching PDF document or calculating dimensions:",
          error,
        );
      }
    };

    fetchPdfAndCalculateDimensions();
  }, [fileUrl]);

  const handleShowPopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <div className="relative">
      <div
        className="block mx-auto mt-4 p-2 bg-blue-500 text-white rounded cursor-pointer"
        onClick={handleShowPopup}
      >
        <Document
          file={fileUrl}
          onLoadSuccess={({ numPages }) => setTotalPages(numPages)}
        >
          <Page
            pageNumber={pageNumber}
            width={pageDimensions[pageNumber - 1]?.width}
          />
        </Document>
      </div>

      {showPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="relative w-3/4 h-3/4 bg-white p-4 rounded-lg">
            <button
              onClick={handleShowPopup}
              className="absolute top-2 right-2 p-1 bg-red-500 text-white rounded-full"
            >
              <MdClose />
            </button>
            <Document file={fileUrl} onLoadSuccess={() => {}}>
              {pageDimensions.map((dimensions, index) => (
                <Page
                  key={`page_${index + 1}`}
                  pageNumber={index + 1}
                  width={dimensions.width / 6} // Adjust scaling as needed
                  height={dimensions.height / 6} // Adjust scaling as needed
                />
              ))}
            </Document>
          </div>
        </div>
      )}
    </div>
  );
};

PdfViewer.propTypes = {
  fileUrl: PropTypes.string.isRequired,
};

export default PdfViewer;
