import React from 'react';
import { Col } from 'reactstrap';

function Category(){
    return(
        <Col xs="3">
            <h3 className="block-title">
                <span>Category</span>
            </h3>
            <ul className="list-block list-li-ptb-15 list-btm-border-white bg-primary text-center" id="listItem">
                <li id="All">All</li>
                <li id="Business">Business</li>
                <li id="Sports">Sports</li>
                <li id="Top Stories">Top Story</li>
                <li id="The Big Story">The Big Story</li>
            </ul>
        </Col>
    );
}

export default Category;