import React from 'react';
import { 
    Card, 
    CardImg,  
    CardBody, 
    Col, 
    CardTitle,
    CardText
  } from 'reactstrap';

function CardLayout(props){

  return(
    <Col xs="2" class="d-flex align-items-stretch" >
      
        {/* {(props.props.category_title)}  World */}
      
      <Card className="cardStyle">
        {/* <CardImg top width="100%" src={} alt={props.alt} /> */}
        <CardBody>
            <CardTitle>
              <a href={props.props.link}>
              {props.props.title}
              </a>
              
            </CardTitle>
            {/* <CardSubtitle>Card subtitle</CardSubtitle> */}
            <CardText>
            {props.text}
          </CardText> 
        </CardBody>
      </Card>
    </Col>
  )
}
export default CardLayout;
