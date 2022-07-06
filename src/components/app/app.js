import React,{Component} from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";



import './me.css';




import Menu from '../menu/menu';
import Header from '../me/header/header';
import About from '../me/about/about';
import Resume from '../me/resume/resume';
import Frameworks from '../me/frameworks/frameworks';
import Meportfolio from '../me/meportfolio/meportfolio';
import Androidapp from '../me/androidapp';
import PdfResume from '../me/pdf_resume/pdf_resume';






export default class App extends Component{
  
    render(){
        return(
            <Router>
      <div >
        <div><Menu/></div>
        <Routes>
          <Route exact path="/" element={<Header/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/resume" element={<Resume/>}></Route>
          <Route path="/frameworks" element={<Frameworks/>}></Route>
          <Route path="/meportfolio" element={<Meportfolio/>}></Route>
          <Route path="/app" element={<Androidapp/>}></Route>
          <Route path="/pdf_resume" element={<PdfResume/>}></Route>
        </Routes>
      </div>
    </Router>
  );
        
    }
}