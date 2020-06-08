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
    const [totalpage,setTotalpage] = useState(0);
    const [activePage,setActivePage] = useState(1);
   
    useEffect( () => {
        fetchAllNews();
    }, []);

    // This is used to fetch all the news
    const fetchAllNews = async (pageNum) => {

        if(pageNum=="NaN" || pageNum==null || pageNum==="")
            pageNum = 1;
        
        const response = await fetch(`${Constants.BASEURL}/news/all/${pageNum}`, {
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
            setAllNews(object.allnews[0]);
            setTotalpage(object.total_all_news_count[0].totalpage);
        });
    }

    // This is used to set the current/active page in pagination for specific category
    const updateCategory = (category,pageNum) => {
        
        if(category=="All"){
            fetchAllNews();
            setActivePage(1);
        }else{
            setCategory(category);
            setActivePage(1);
            fetchCategoryNews(category,pageNum);
        }
    }

    // This is used to set the current/active page in pagination for specific rss
    const updateRss = (rss,pageNum) => {
        setRss(rss);
        setActivePage(1);
        fetchRSSNews(rss,pageNum);
    }

    // This is used to fetch all the news related to RSS
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
            setAllNews(object.rss_news[0]);
            setTotalpage(object.rss_news_count[0].numOfRecords);
        });
    }
    
    // This is used to fetch all the news for specific category
    const fetchCategoryNews = (category1,pageNum) => {

        console.log(allNews);

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
                //setCategory(category1);
                setAllNews(object.cat_news[0]);
                setTotalpage(object.cat_news_count[0].numOfRecords);
        });
    }

    // This is used to call the news api when use click on pagination
    const handlePagination = (pageNum) => {
        if(category){
            console.log(category);
            fetchCategoryNews(category,pageNum);
            setActivePage(pageNum);
        }else if(rss){
            fetchRSSNews(rss,pageNum);
            setActivePage(pageNum);
        }else{
            fetchAllNews(pageNum);
            setActivePage(pageNum);
        }
    }

    return(
        
        <Container>
            <Row>
                <Col xs="2" >
                    <Category clicked={updateCategory} />
                    <RssProviders clicked={updateRss} />
                </Col>
                <Col xs="8" class="d-flex align-items-stretch">
                    { allNews.map( news => <CardLayout props={news} key={news.agency_news_id} totalpage={totalpage} /> )}
                </Col> 
            </Row>
            <Pagination 
                clicked={handlePagination} 
                props={allNews}
                totalpage={totalpage}
                activePage={activePage}
            />
        </Container>
    );
}

export default Categories;