import React from 'react';
import { 
    Card, 
    Col
} from 'reactstrap';

  function Category(){
    return(
        <Col xs="3">
            <h6 className="p-title">
                Categories
            </h6>
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