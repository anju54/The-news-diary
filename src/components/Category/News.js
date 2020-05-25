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

        let pageNum = 1;
        let picSrcValue = "";
        if(rss==="Hindustan Times")
            picSrcValue = "assets/images/ht2.png";
        if(rss==="India Today")
            picSrcValue = "assets/images/indiatoday.png";
        if(rss==="Times Of India")
            picSrcValue = "assets/images/toi.png"
        if(rss==="Newyork Times")
            picSrcValue = "assets/images/newyt.png";
        if(rss==="The Hindu")
            picSrcValue = "assets/images/th.png ";

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
            console.log(object);
            object.agency_logo = picSrcValue;
            object.pic_src = picSrcValue;
            setAllNews(object);
            console.log(object);
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
        </Container>
    );
}

export default Categories;