import React from 'react';
import { Component } from 'react';
import Main from '../Index/MainComponent';
import { BrowserRouter } from 'react-router-dom';
import '../App/App.css';

class App extends Component {

  render(){
    return (
      <BrowserRouter>
        <div>
          <Main />
        </div>
      </BrowserRouter> 
    );
  }
 
}
export default App;
