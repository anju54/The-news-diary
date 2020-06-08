import React from 'react';
import { Col } from 'reactstrap';

function RssProviders(){
  return(
    <Col xs="3">
      <h3 className="block-title">
          <span>RSS Providers</span>
      </h3>
      <ul className="list-block list-li-ptb-15 list-btm-border-white bg-primary text-center" id="listItem">
        <li id="The Hindu">The Hindu</li>
        <li id="Hindustan Times">Hindustan Times</li>
        <li id="Times Of India">Times Of India</li>
        <li id="India Today">India Today</li>
        <li id="Newyork Times">Newyork Times</li>
      </ul>
    </Col>
  )
}

export default RssProviders;    