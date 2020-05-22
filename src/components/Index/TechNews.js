import React, { useEffect, useState } from 'react';
import CardLayout from '../Index/CardForCategory';
import { Row } from 'reactstrap';
import CardHeader from '../Index/CardHeading';
import Constants from '../Util/Constants';

/**
 * This is used fot fetching tech related news
 */
function TechNews(){

  const [techNews,setTechNews] = useState([]);

  const fetchTechNews = () => {
    let pageNum = 1;
    const response = fetch(`${Constants.BASEURL}/news/tech/${pageNum}`, {
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
    }).then( object => setTechNews(object) );
  }
  
  useEffect( () => {
    fetchTechNews();
  }, []);

  return(
    <>
      {techNews.length>0 ? <CardHeader props="Technology" /> : ""}
      <Row>
      { techNews.map( news => <CardLayout props={news} /> ) }</Row>
    </>
  );
}
export default TechNews;