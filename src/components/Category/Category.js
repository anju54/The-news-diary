import React from 'react';
import { 
    Row, 
    Col
} from 'reactstrap';

function Category(props){

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
                <li className="disabled">Categories</li>
                <li>All</li>
                <li id="Technology">Technology</li>
                <li id="Sports">Sports</li>
                <li id="Top Stories">Top Story</li>
                <li id="The Big Story">The Big Story</li>
                </ul>
            </Col>
        </Row>
    );
}

export default Category;