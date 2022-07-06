import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import file from './resume.pdf';
import './pdf_resume.css'

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;



function PdfResume() {
   const [numPages, setNumPages] = useState(null); 
    const [pageNumber, setPageNumber] = useState(1);  

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1)
  } 
  

 
  return (
    <div className='pdfr'>
      <Document 
      file={file}
      onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={1} />
        <Page pageNumber={2} />
      </Document>
      
    </div>
  );
}

export default PdfResume