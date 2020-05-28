import React, { useEffect, useState } from 'react';
import { 
    Container, Row,Col
} from 'reactstrap';
import Category from './Category';
import RssProviders from './RssProviders';
import CardLayout from './Card';
import Pagination from './Pagination';
import Constants from '../Util/Constants';

function Categories(){

    const [allNews,setAllNews] = useState([]);
   
    useEffect( () => {
        fetchAllNews();
    }, []);

    const fetchRSSNews = (rss) => {

        let pageNum = 1;

        const response = fetch(`${Constants.BASEURL}/news/rss/${rss}/${pageNum}`, {
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
            setAllNews(object);
        });
      }
    

    const fetchAllNews = (pageNum) => {

        if(pageNum=="NaN" || pageNum==null || pageNum=="")
            pageNum = 1;
        
        const response = fetch(`${Constants.BASEURL}/news/all/${pageNum}`, {
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

    const fetchCategoryNews = (category) => {

        console.log(category);
        let pageNum = 1;

        const response = fetch(`${Constants.BASEURL}/news/${category}/${pageNum}`, {
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
                    <Category clicked={fetchCategoryNews} />
                    <RssProviders clicked={fetchRSSNews} />
                </Col>
                <Col xs="8" class="d-flex align-items-stretch">
                { allNews.map( news => <CardLayout props={news} /> )}
                </Col> 
            </Row>
            <Pagination clicked={fetchAllNews} props={allNews}/>
        </Container>
    );
}

export default Categories;