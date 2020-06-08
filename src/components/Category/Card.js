import React from 'react';
import { 
    Row,
    Card, 
    CardBody, 
    Col, CardLink,
    CardTitle,
    CardText,CardSubtitle, Container
  } from 'reactstrap';

// Card componet to show news
function CardLayout(props){

  return(
    <Row>
      <Col class="d-flex align-items-stretch" className="cardCol" >    
      <Card className="newsCard">
        <CardBody>
          <Container>
            <Row>
              <Col xs="1">
                <img src="assets/images/rss.png" id="rssImg"/>
              </Col>
              <Col xs="11">
                <Row>
                  <Col xs="12">
                  <CardTitle className="customText">{props.props.title}</CardTitle>
                  </Col>
                  <Row>
                    <Col xs="12">
                  <CardSubtitle className="customText">{props.props.agency_title}</CardSubtitle></Col>
                  </Row>
                </Row>
              </Col>
            </Row>
          </Container>
        </CardBody>
        <CardBody>
          <CardText className="customText">{props.props.link}</CardText>
           <CardLink href={props.props.link} className="customText" target="_blank" >Click here for full article</CardLink> 
        </CardBody>
      </Card>
      </Col>
    </Row>
  )
}
export default CardLayout;
