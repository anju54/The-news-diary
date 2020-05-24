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
   
    useEffect( () => {
        fetchAllNews();
    }, []);

    const fetchRSSNews = (rss) => {

        console.log(rss);
        //let rss = "sports";
        let pageNum = 1;
        const response = fetch(`${Constants.BASEURL}/news/all/${rss}/${pageNum}`, {
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
            setAllNews(object);
        });
      }
    

    const fetchAllNews = () => {
        //let pageNum = 1;
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

    const fetchCategoryNews = () => {

        let category = "sports";

        const response = fetch(`${Constants.BASEURL}/news/${category}`, {
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
                setAllNews(object);
        });
    }

    return(
        <Container>
            <Row>
                <Col xs="2" >
                    <Category onClick={fetchCategoryNews} />
                    <RssProviders onClick={fetchRSSNews} />
                </Col>
                <Col xs="8" class="d-flex align-items-stretch">
                { allNews.map( news => <CardLayout props={news} /> )}
                </Col> 
            </Row>
        </Container>
    );
}

export default Categories;