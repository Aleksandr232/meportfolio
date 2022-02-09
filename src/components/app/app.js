import React,{Component} from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import MeApp from '../me/meapp/Meapp';
import GeneratorApp from '../generatornumber/App';
import Appfilter from '../appfilter/app/app';

export default class App extends Component{
    render(){
        return(
            <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<MeApp/>}></Route>
          <Route path="/generatorapp" element={<GeneratorApp/>}></Route>
          <Route path="appfilter" element={<Appfilter/>}></Route>
          
        </Routes>
      </div>
    </Router>
  );
        
    }
}