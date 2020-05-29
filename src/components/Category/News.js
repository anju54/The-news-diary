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
    const [category,setCategory] = useState();
    const [rss,setRss] = useState("");
   
    useEffect( () => {
        fetchAllNews();
    }, []);

    const fetchRSSNews = (rss,pageNum) => {

        if(pageNum==="NaN" || pageNum===null || pageNum==="")
            pageNum = 1;

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
              setRss(rss);
            setAllNews(object);
        });
      }
    

    const fetchAllNews = (pageNum) => {

        if(pageNum==="NaN" || pageNum==null || pageNum==="")
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

    const fetchCategoryNews = (category,pageNum) => {

        console.log(category);
        if(pageNum=="NaN" || pageNum==null || pageNum=="")
            pageNum = 1;

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
                setCategory(category);
                setAllNews(object);
        });
    }

    const handlePagination = (pageNum) => {
        console.log(pageNum);
        if(category){
            fetchCategoryNews(category,pageNum);
            }
        if(rss)
            fetchRSSNews(rss,pageNum);
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
            <Pagination 
                clicked={handlePagination} 
                props={allNews}
            />
        </Container>
    );
}

export default Categories;