import React, { useEffect, useState } from 'react';
import CardLayout from '../Index/CardForCategory';
import CardHeader from '../Index/CardHeading';
import { Row } from 'reactstrap';
import Constants from '../Util/Constants';

function HealthNews(){

    const [healthNews,setHealthNews] = useState([]);
   
    useEffect( () => {

      let pageNum = 1;
      const response = fetch(`${Constants.BASEURL}/news/health/${pageNum}`, {
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
      }).then( object => setHealthNews(object) );
    }, []);

    return(
      <>
        {healthNews.length>0 ? <CardHeader props="Health" /> : ""}
        <Row>
         { healthNews.map( news => <CardLayout props={news} /> ) }
        </Row>
      </>
    );
}
export default HealthNews;