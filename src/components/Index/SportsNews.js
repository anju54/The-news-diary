import React, { useEffect, useState } from 'react';
import CardLayout from '../Index/CardForCategory';
import CardHeader from '../Index/CardHeading';

function SportsNews(){

    const [sportsNews,setSportsNews] = useState([]);

    useEffect( () => {

      const response = fetch(`http://localhost:8085/news/sports`, {
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
          setSportsNews(object)
         } );
    }, []);

    return(
      <>
        {sportsNews.length>0 ? <CardHeader props="Sports" /> : ""}
        { sportsNews.map( news => <CardLayout props={news} /> )}
      </>
    );
}
export default SportsNews;