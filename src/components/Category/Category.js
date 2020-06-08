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
                <ul className="list-block list-li-ptb-10 list-btm-border-white  text-center" 
                    id="listItem"
                    onClick={handleCheck} 
                >
                <li className="disabled" >Categories</li>
                <li id="All" className="customText">All</li>
                <li id="Business" className="customText">Business</li>
                <li id="Sports" className="customText">Sports</li>
                <li id="Top Stories" className="customText">Top Story</li>
                <li id="The Big Story" className="customText">The Big Story</li>
                </ul>
            </Col>
        </Row>
    );
}

export default Category;