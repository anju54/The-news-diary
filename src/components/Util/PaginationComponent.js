import React from 'react';
import { 
    Row, 
    Col, 
    Container
} from 'reactstrap';
import TopNews from '../Index/TopNews';

function PaginationComponent(props){

  let actionClick = () => {
    return (
    <TopNews />
    )
  };
  
  return(
    <Container>
      <Row>
        <Col xs="4"></Col>
        <Col xs="4">
          <div className="pagination">
            <a href="#">&laquo;</a>
            {/* <a href={props} onClick={actionClick}>1</a> */}
            <a href="#">1</a>
            <a href="#" className="active">2</a>
            <a href="#">3</a>
            <a href="#">&raquo;</a>
          </div>
        </Col>
        <Col xs="4"></Col>
      </Row>
    </Container>
  );
}

export default PaginationComponent;