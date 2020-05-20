import React, { useEffect, useState } from 'react';
import CardLayout from '../Index/CardForCategory';
import { Row } from 'reactstrap';
import CardHeader from '../Index/CardHeading'

function TechNews(){

  const [techNews,setTechNews] = useState([]);
  
  useEffect( () => {
      const response = fetch(`http://localhost:8085/news/Tech`, {
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