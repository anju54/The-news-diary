import React from 'react';
import { Col } from 'reactstrap';

function RssProviders(){
  return(
    <Col xs="3">
      <h3 className="block-title">
          <span>RSS Providers</span>
      </h3>
      <ul className="list-block list-li-ptb-15 list-btm-border-white bg-primary text-center" id="listItem">
      <li><b>Hindustan Times</b></li>
      <li><b>The Times Of India</b></li>
      <li><b>The Hindu</b></li>
      <li><b>Economics Times</b></li>
      <li><b>News 24</b></li>
      <li><b>Newyork Times</b></li>
      </ul>
    </Col>
  )
}

export default RssProviders;    