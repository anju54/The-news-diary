import React from 'react';
import { 
    Row, 
    Col
  } from 'reactstrap';

/**
 * This is showing list of RSS in UI
 * @param {} props 
 */
function RssProviders(props){

  function handleCheck(e) { 
    props.clicked(e.target.id);
  }

  return(
    <Row>
      <Col className="newsCard">
        <ul className="list-block list-li-ptb-10 list-btm-border-white bg-primary text-center" 
          id="listItem"
          onClick={handleCheck}
        >
        <li className="disabled" id="rssTitle">RSS Providers</li>
        <li id="The Hindu">The Hindu</li>
        <li id="Hindustan Times">Hindustan Times</li>
        <li id="Times Of India">Times Of India</li>
        <li id="India Today">India Today</li>
        <li id="Newyork Times">Newyork Times</li>
        </ul>
      </Col>
    </Row> 
  )
}

export default RssProviders;