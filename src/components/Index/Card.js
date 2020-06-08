import React from 'react';
import { 
    Card, 
    CardImg,  
    CardBody, 
    Col, 
} from 'reactstrap';

function CardLayout(props){

    return(
        
        <Col xs="4" className ="mt-10 mb-10" >
            <Card className="topNewsCard">
                <CardImg top src={props.topNews.pic_src} alt=""></CardImg>
                <CardBody>
                    <a href={props.topNews.link} className="customText">
                    {props.topNews.title}
                    </a>
                </CardBody>
            </Card>
        </Col> 
    )
}
export default CardLayout;
