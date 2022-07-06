import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import Printer, { print } from 'react-pdf-print';
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
  
  const ids = ['0']
 
  return (
    <>
    
    <div id={ids[0]}  className='pdfr'>
    <Printer>
      <Document 
      file={file}
      onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={1} />
      </Document>
      </Printer>
    </div>
   
    <button
          className='btn btn-info ms-2'
          onClick={() => print(ids)} value='Stampa'
          >Печать</button>
    </>
  );
}

export default PdfResume