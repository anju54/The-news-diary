import React, { useEffect, useState } from 'react';
import CardLayout from '../Index/CardForCategory';
import CardHeader from '../Index/CardHeading';
import Constants from '../Util/Constants';

/**
 * This is used fot fetching sports related news
 */
function SportsNews(){

  const [sportsNews,setSportsNews] = useState([]);

  const fetchSportsNews = () => {
    let pageNum = 1;
    const response = fetch(`${Constants.BASEURL}/news/sports/${pageNum}`, {
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
    });
  }

  useEffect( () => {
    fetchSportsNews();
  }, []);

  return(
    <>
      {sportsNews.length>0 ? <CardHeader props="Sports" /> : ""}
      { sportsNews.map( news => <CardLayout props={news} /> )}
    </>
  );
}
export default SportsNews;