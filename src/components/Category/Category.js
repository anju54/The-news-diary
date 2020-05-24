import React, { useEffect, useState } from 'react';
import { 
    Row, 
    Col
} from 'reactstrap';
import News from '../Category/News';
import Constants from '../Util/Constants';

  function Category(){

    const [categoryNews,setCategoryNews] = useState([]);

    let news =  () => {
        fetchCategoryNews();
    }

    const fetchCategoryNews = () => {

        let category = "sports";

        const response = fetch(`${Constants.BASEURL}/news/${category}`, {
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
                setCategoryNews(object);
        });
    }

    return(
        <Row>
            <Col className="newsCard">
                <ul className="list-block list-li-ptb-10 list-btm-border-white bg-primary text-center" id="listItem">
                <li onClick={news}>Categories</li>
                <li><b>All</b></li>
                <li><b>Technology</b></li>
                <li><b>Sports</b></li>
                <li><b>Top Story</b></li>
                <li><b>The Big Story</b></li>
                </ul>
            </Col>
        </Row>
    );
}

export default Category;