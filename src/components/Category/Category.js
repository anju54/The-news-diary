import React from 'react';
import { 
    Row, 
    Col
} from 'reactstrap';

  function Category(){
    return(
        <Row>
            <Col className="newsCard">
                <ul className="list-block list-li-ptb-10 list-btm-border-white bg-primary text-center" id="listItem">
                <li>Categories</li>
                <li><b>All</b></li>
                <li><b>Technology</b></li>
                <li><b>Sports</b></li>
                <li><b>Top Story</b></li>
                <li><b>The Big Story</b></li>
                </ul>
            </Col>
        </Row>
    );
}

export default Category;