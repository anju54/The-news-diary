import React from 'react';
import { 
    Row,
    Card, 
    CardImg,  
    CardBody, 
    Col, CardLink,
    CardTitle,
    CardText,CardSubtitle, Container
  } from 'reactstrap';

function CardLayout(props){

  return(
    <Row>
      <Col class="d-flex align-items-stretch" className="cardCol" >    
      <Card className="newsCard">
        <CardBody>
          <Container>
            <Row>
              <Col xs="1">
                <img src="assets/images/ht2.png" id="rssImg"/>
              </Col>
              <Col xs="11">
                <Row>
                  <Col xs="12">
                  <CardTitle>{props.props.title}</CardTitle>
                  </Col>
                  <Row>
                    <Col xs="12">
                  <CardSubtitle>{props.props.agency_title}</CardSubtitle></Col>
                  </Row>
                </Row>
              </Col>
            </Row>
          </Container>
        </CardBody>
        <CardBody>
          <CardText>{props.props.link}</CardText>
           <CardLink href={props.props.link}>Click here for full article</CardLink> 
        </CardBody>
      </Card>
      </Col>
    </Row>
  )
}
export default CardLayout;
