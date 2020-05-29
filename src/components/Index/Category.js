import React from 'react';
import { Col } from 'reactstrap';

function Category(){
    return(
        <Col xs="3">
            <h3 className="block-title">
                <span>Category</span>
            </h3>
            <ul className="list-block list-li-ptb-15 list-btm-border-white bg-primary text-center" id="listItem">
            <li><b>All</b></li>
            <li><b>Technology</b></li>
            <li><b>Sports</b></li>
            <li><b>Bolywood</b></li>
            <li><b>Criket</b></li>
            <li><b>Holywood</b></li>
            </ul>
        </Col>
    );
}

export default Category;