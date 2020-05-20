import React, { useEffect, useState } from 'react';
import CardLayout from '../Index/CardForCategory';
import { Row } from 'reactstrap';
import CardHeader from '../Index/CardHeading';

function WorldNews(){

  const [worldNews,setWorldNews] = useState([]);
    
  useEffect( () => {

    let category = "world"
    const response = fetch(`http://localhost:8085/news/${category}`, {
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