import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';
import file from './resume.pdf'


function PdfResume() {
   const [numPages, setNumPages] = useState(null); 
    const [pageNumber, setPageNumber] = useState(1);  

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1)
  } 
  

 
  return (
    <div>
      <Document 
      file={file} 
      onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={1} />
      </Document>
      <p>
      Page {pageNumber || (numPages ? 1 : '--')} of {numPages || '--'}
      </p>
    </div>
  );
}

export default PdfResume