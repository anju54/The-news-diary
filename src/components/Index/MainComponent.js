import React from 'react';
import { Component } from 'react';
import Header from '../Header/HeaderComponent';
import Footer from '../Footer/FooterComponent';
import Home from '../Index/HomeComponent';
import Contact from '../Contact/ContactComponent';
import Categories from '../Category/Categories';
import { Switch, Route, Redirect} from 'react-router-dom';

class Main extends Component {

  constructor(props){

    super(props);

    this.state ={
     
    };

  }

  render(){

    const HomePage = ()=> {
      return (
        <Home 
        
        />
      )
    }
         
    return (
      <div>
        <Header />
          <Switch>
            <Route path="/home" component={HomePage} />
            <Route path="/categories" component={Categories}/>
            <Route exact path="/contactus" component={Contact} />
          </Switch>
        <Footer />
      </div>
    );
  }
 
}

export default Main;
