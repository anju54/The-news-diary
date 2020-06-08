import React, { useEffect, useState } from 'react';
import { 
    Row, 
    Container
  } from 'reactstrap';
import CardLayout from '../Index/Card';
import Constants from '../Util/Constants';

function TopNews(){

  const [topNews,setTopNews] = useState([]);

  useEffect( () => {
    fetchTopNews(); 
  },[]);

  let fetchTopNews = () => {
    
    const response = fetch(`${Constants.BASEURL}/news/top-news`, {
      method: "GET",
      cache: "no-cache",
      headers: { "Content-Type": "application/json" },
      })
      .then( response => {
        if(response.ok){
          return response.json();
        }else{
          let error = response.status;
          throw error;
        }
    }).then( object => setTopNews(object) );
  }

  return(
    <div>
      <Container>
        <Row>
          {topNews.map(news =><CardLayout key={news.agency_news_id} topNews={news} /> )}
        </Row>
      </Container>
    </div>
  )
}

export default TopNews;