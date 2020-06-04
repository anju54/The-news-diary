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
    const[response,setResponse] = useState([]);
    const [category,setCategory] = useState();
    const [rss,setRss] = useState("");
    const [totalpage,setTotalpage] = useState(0);
   
    useEffect( () => {
        fetchAllNews();
    }, []);

    const fetchAllNews = async (pageNum) => {

        console.log("fetch all news calling......");

        if(pageNum=="NaN" || pageNum==null || pageNum==="")
            pageNum = 1;
        
        const response = await fetch(`${Constants.BASEURL}/news/all/${pageNum}`, {
        method: "GET",
        cache: "no-cache",
        headers: { "Content-Type": "application/json" },
        })
        .then( response => {
            console.log(response);
            if(response.ok){
                return response.json();
            }else{
                let error = response.status;
                throw error;}
        }).then( object => {
            setAllNews(object.allnews[0]);
            //console.log(object.total_all_news_count[0].totalpage);
            setTotalpage(object.total_all_news_count[0].totalpage);
        });
    }

    const fetchRSSNews = (rss,pageNum) => {

        if(pageNum=="NaN" || pageNum==null || pageNum=="")
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
            setAllNews(object.rss_news[0]);
            setTotalpage(object.rss_news_count[0].numOfRecords);
        });
    }
    
    const fetchCategoryNews = (category1,pageNum) => {

        console.log("categoty news calling......");

        if(pageNum=="NaN" || pageNum==null || pageNum==="")
            pageNum = 1;

        const response = fetch(`${Constants.BASEURL}/news/category/${category1}/${pageNum}`, {
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
                var cat = "cate";
                object[cat] = category1;
                setCategory(category1);
                setAllNews(object.cat_news[0]);
                setTotalpage(object.cat_news_count[0].numOfRecords);
        });
    }

    const getTotalPageForCategory = (category) => {

        console.log("calling total page",category);

        const response = fetch(`${Constants.BASEURL}/news/total-page/category/${category}`, {
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
              setTotalpage(object);
        });
    }

    const getTotalPageForRss = (rss) => {

        const response = fetch(`${Constants.BASEURL}/news/total-page/rss/${rss}`, {
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
              setTotalpage(object);
        });
    }

    const getTotalPageForAll = () => {
        console.log("calling total page for all");
        const response = fetch(`${Constants.BASEURL}/news/page-count`, {
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
                setTotalpage(object);
        });
    }

    const handlePagination = (pageNum) => {
        console.log("handle pagination called...");
        console.log(rss);
        if(category){
            fetchCategoryNews(category,pageNum);
        }else if(rss){
            fetchRSSNews(rss,pageNum);
        }else{
            //getTotalPageForAll();
        }
    }

    return(
        
        <Container>
            <Row>
                <Col xs="2" >
                    <Category clicked={fetchCategoryNews} />
                    <RssProviders clicked={fetchRSSNews} />
                </Col>
                <Col xs="8" class="d-flex align-items-stretch">
                    {/* {console.log(response.allnews)} */}
                    { allNews.map( news => <CardLayout props={news}  totalpage={totalpage} /> )}
                </Col> 
            </Row>
            <Pagination 
                clicked={handlePagination} 
                props={allNews}
                totalpage={totalpage}
            />
        </Container>
    );
}

export default Categories;