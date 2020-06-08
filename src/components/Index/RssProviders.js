import React from 'react';
import { Col } from 'reactstrap';

function RssProviders(){
  return(
    <Col xs="3">
      <h3 className="block-title">
          <span>RSS Providers</span>
      </h3>
      <ul className="list-block list-li-ptb-15 list-btm-border-white  text-center" id="listItem">
        <li id="The Hindu" className="customText">The Hindu</li>
        <li id="Hindustan Times" className="customText">Hindustan Times</li>
        <li id="Times Of India" className="customText">Times Of India</li>
        <li id="India Today" className="customText">India Today</li>
        <li id="Newyork Times" className="customText">Newyork Times</li>
      </ul>
    </Col>
  )
}

export default RssProviders;    