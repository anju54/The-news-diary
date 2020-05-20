import React from 'react';
import { 
    Row, 
    Card, 
    CardImg,  
    CardBody, 
    Col, 
    Container
  } from 'reactstrap';

function CardLayout(props){

    return(
        
        <Col xs="4" className ="mt-10 mb-10" >
            <Card>
                <CardImg top src={props.topNews.pic_src} alt=""></CardImg>
                <CardBody>
                    <a href={props.topNews.link}>
                    {props.topNews.title}
                    </a>
                </CardBody>
            </Card>
        </Col> 
    )
}
export default CardLayout;
