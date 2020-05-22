import React, { useEffect, useState } from 'react';
import CardLayout from '../Index/CardForCategory';
import { Row } from 'reactstrap';
import CardHeader from '../Index/CardHeading';
import Constants from '../Util/Constants';

/**
 * This is used fot fetching world related news
 */
function WorldNews(){

  const [worldNews,setWorldNews] = useState([]);

  const fetchWorldNews = () => {
    let pageNum = 1;
    const response = fetch(`${Constants.BASEURL}/news/world/${pageNum}`, {
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
    }).then( object => setWorldNews(object) );
  }
    
  useEffect( () => {
    fetchWorldNews();
    
  }, []);

  return(
    <>
      {worldNews.length>0 ? <CardHeader props="World" /> : ""}
      <Row>
       { worldNews.map( news => <CardLayout props={news} /> ) }
      </Row>
    </>
  );
}
export default WorldNews;