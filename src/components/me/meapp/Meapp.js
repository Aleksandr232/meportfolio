import React, { Component } from 'react';
import Sidepanel from '../sidepanel/sidepanel';
import About from '../about/about';
import Resume from '../resume/resume';
import Frameworks from '../frameworks/frameworks';
import Meportfolio from '../meportfolio/meportfolio';
import Contacts from '../contacts/contacts';
import Header from '../header';
import Menu from '../menu/menu';










import './app.css';

export default class MeApp extends Component {
    render(){
        return(
            <div>
                <Menu/>
                <Header/>
                <Sidepanel/>
                <About/>
                <Resume/>
                <Frameworks/>
                <Meportfolio/>
                <Contacts/>
            </div>
        )

    
        
    
            
            
        
    }
  
}
