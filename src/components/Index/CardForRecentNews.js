import React from 'react';
import { 
    Card, 
    CardImg,  
    CardBody, 
    Col, 
} from 'reactstrap';

function CardForRecentNews(props){

    return(
        
        <Col xs="4">
            <Card style={{height:"200px"}} >
                <CardImg top src={props.news.pic_src} alt=""></CardImg>
                <CardBody>
                    <a href={props.news.link} className="customText">
                    {props.news.title}
                    </a>
                </CardBody>
            </Card>
        </Col> 
    )
}
export default CardForRecentNews;
