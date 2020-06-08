import React, { useEffect, useState } from 'react';
import { 
    Row,
    Col, 
  } from 'reactstrap';
import Constants from '../Util/Constants';
import CardForRecentNews from '../Index/CardForRecentNews';

function RecentNews(){ 

  const [bigStory,setBigStory] = useState([]);

  useEffect( () => {
    fetchBigStoryNews(); 
  },[]);

  let fetchBigStoryNews = () => {
    
    let pageNum = 1;
    const response = fetch(`${Constants.BASEURL}/news/category/the big story/${pageNum}`, {
      method: "GET",
      cache: "no-cache",
      headers: { "Content-Type": "application/json" },
    })
    .then( response => {
      if(response.ok) {
        return response.json();
      }else {
        let error = response.status;
        throw error;
      }
    }).then( object => setBigStory(object.cat_news[0]) );
  }

  return(
    <Col xs="6">
      <h3 className="block-title">
      <span className="customText">The Big Story</span>
      </h3>
      <Row>
      { bigStory.map( news => <CardForRecentNews key={news.agency_news_id} news={news} /> )} 
      </Row>
    </Col>
  )

}
export default RecentNews;