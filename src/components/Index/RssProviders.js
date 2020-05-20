import React from 'react';
import { 
    Card, 
    Col
  } from 'reactstrap';

function RssProviders(){
  return(
    <Col xs="3">
      <h6 className="p-title">
        Ours RSS Providers
      </h6>
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