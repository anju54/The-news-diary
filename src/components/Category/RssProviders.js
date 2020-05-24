import React from 'react';
import { 
    Row, 
    Col
  } from 'reactstrap';

function RssProviders(){
  return(
    <Row>
      <Col className="newsCard">
          <ul className="list-block list-li-ptb-10 list-btm-border-white bg-primary text-center" id="listItem">
          <li>RSS Providers</li>
          <li><b>Hindustan Times</b></li>
          <li><b>The Times Of India</b></li>
          <li><b>India Today</b></li>
          <li><b>Newyork Times</b></li>
          </ul>
      </Col>
    </Row> 
  )
}

export default RssProviders;    