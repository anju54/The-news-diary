import React from 'react';
import { 
    Row, 
    Col
  } from 'reactstrap';

function RssProviders(props){

  function handleCheck(e) {
    console.log(e.target);
    console.log(props);
    props.fetchRSSNews(e.target);
  }
  
  return(
    <Row>
      <Col className="newsCard">
        <ul className="list-block list-li-ptb-10 list-btm-border-white bg-primary text-center" 
          id="listItem"
          onClick={handleCheck}
        >
        <li>RSS Providers</li>
        <li id="ht"><b>Hindustan Times</b></li>
        <li id="toi"><b>The Times Of India</b></li>
        <li id="id"><b>India Today</b></li>
        <li id="nt"><b>Newyork Times</b></li>
        </ul>
      </Col>
    </Row> 
  )
}

export default RssProviders;    