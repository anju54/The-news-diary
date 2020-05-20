import React from 'react';
import { 
  Row,  
  Col, 
  Container
} from 'reactstrap';
import TopNews from '../Index/TopNews';
import RecentNews from '../Index/RecentNews';
import Category from '../Index/Category';
import CategoryNews from '../Index/CategoryNews';
import RssProviders from '../Index/RssProviders';

function Home(props){

  return(
    <div>
      <br></br>
      <TopNews />
      {/* <Container>
        <Row>
          <Col xs="4"></Col>
          <Col xs="4">
          <div classname="pagination">
            <a href="#">&laquo;</a>
            <a href="#">1</a>
            <a href="#" classname="active">2</a>
            <a href="#">3</a>
            <a href="#">&raquo;</a>
          </div>
          </Col>
          <Col xs="4"></Col>
        </Row>
      </Container> */}
      
      <br></br>
      <div className="container">
        <Row>
          <RecentNews />
          <Category />
          <RssProviders />
        </Row>
      </div>
      <br></br> 
      <CategoryNews />
    </div> 
  )

}

export default Home;

