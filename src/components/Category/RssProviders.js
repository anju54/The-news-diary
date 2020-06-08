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
        <ul className="list-block list-li-ptb-10 list-btm-border-white  text-center" 
          id="listItem"
          onClick={handleCheck}
        >
        <li className="disabled" id="rssTitle">RSS Providers</li>
        <li id="The Hindu" className="customText">The Hindu</li>
        <li id="Hindustan Times" className="customText">Hindustan Times</li>
        <li id="Times Of India" className="customText">Times Of India</li>
        <li id="India Today" className="customText">India Today</li>
        <li id="Newyork Times" className="customText">Newyork Times</li>
        </ul>
      </Col>
    </Row> 
  )
}

export default RssProviders;