import React from 'react';
import { Col } from 'reactstrap';

function Category(){
    return(
        <Col xs="3">
            <h3 className="block-title">
                <span className="customText">Category</span>
            </h3>
            <ul className="list-block list-li-ptb-15 list-btm-border-white  text-center" id="listItem">
                <li id="All" className="customText">All</li>
                <li id="Business" className="customText">Business</li>
                <li id="Sports" className="customText">Sports</li>
                <li id="Top Stories" className="customText">Top Story</li>
                <li id="The Big Story" className="customText">The Big Story</li>
            </ul>
        </Col>
    );
}

export default Category;