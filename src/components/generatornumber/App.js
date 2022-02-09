import logo from './logo.svg';
import './generatorapp.css';

import {Component} from 'react';



class GeneratorApp extends Component{
  constructor(props) {
    super(props);
    this.state={
      num:0
    }
  }

nextNum =()=>{
  this.setState(({state})=>({
    num: this.state.num + 1
  }))
}

deletNum=()=>{
  this.setState(state=>({
    num: this.state.num - 1
  }))
}

randomNum=()=>{
  this.setState(state=>({
    num: this.state.num = [-50]
  }))
}

resetNum=()=>{
  this.setState(state=>({
    num: this.state.num = 0
  }))
}


render (){
  return (
    <div className="App">
      <div className="counter">{this.state.num}</div>
      <div className="controls">
        <button onClick={this.deletNum}>DEC</button>
        <button onClick={this.nextNum}>INC</button>
        <button onClick={this.randomNum}>RND</button>
        <button onClick={this.resetNum}>RES</button>
      </div>
    </div>
  );

}


}

export default GeneratorApp;

