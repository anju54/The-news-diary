import React from 'react';
import { 
    Row, 
    Card, 
    CardImg, 
    CardTitle, 
    CardBody, 
    CardText, 
    CardSubtitle, 
    Col, 
    Container
  } from 'reactstrap';
import WorldNews from '../Index/WorldNews';
import SportsNews from '../Index/SportsNews';
import HealthNews from '../Index/HealthNews';
import TechNews from '../Index/TechNews';


function CategoryNews(){

  return(
    <Container>
      <Row>
        <WorldNews />
      </Row>
      <Row>
        <SportsNews />
      </Row>
      <Row>
        <HealthNews />
      </Row>
      <Row>
        <TechNews />
      </Row>
    </Container>
  );
    
}
export default CategoryNews;