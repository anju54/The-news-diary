import React from 'react';
import { Col } from 'reactstrap';

function CardHeading(props){

  return(
    <>
      <Col xs="12">
        <h6 className="p-title">
        {(props.props)}
        </h6>
      </Col>
    </>
  );
}
export default CardHeading;