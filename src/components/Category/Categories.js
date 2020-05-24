import React, { useEffect, useState } from 'react';
import { 
    Container, Row,Col
} from 'reactstrap';
import Category from './Category';
import RssProviders from './RssProviders';
import CardLayout from './Card';
import Constants from '../Util/Constants';

function Categories(){

    const [allNews,setAllNews] = useState([]);

    const fetchAllNews = () => {
        let pageNum = 1;
        const response = fetch(`${Constants.BASEURL}/news/all`, {
        method: "GET",
        cache: "no-cache",
        headers: { "Content-Type": "application/json" },
        })
        .then( response => {
            if(response.ok){
            return response.json();
            }else{
            let error = response.status;
            throw error;}
        }).then( object => {
            //console.log(object);
            setAllNews(object)
        });
    }

  useEffect( () => {
    fetchAllNews();
  }, []);


    return(
        <Container>
            <Row>
                <Col xs="2" >
                    <Category />
                    <RssProviders />
                </Col>
                <Col xs="8" class="d-flex align-items-stretch">
                { allNews.map( news => <CardLayout props={news} /> )}
                </Col> 
            </Row>
        </Container>
    );
}

export default Categories;