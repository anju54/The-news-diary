import React from 'react';
import { 
  Row
} from 'reactstrap';
import TopNews from '../Index/TopNews';
import RecentNews from '../Index/RecentNews';
import Category from '../Index/Category';
import RssProviders from '../Index/RssProviders';

function Home(props){

  return(
    <div>
      <br></br>
      <TopNews />
      <br></br>
      <div className="container">
        <Row>
          <RecentNews />
          <Category />
          <RssProviders />
        </Row>
      </div>
      <br></br> 
    </div> 
  )

}

export default Home;

