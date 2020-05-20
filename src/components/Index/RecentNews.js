import React from 'react';
import { 
    Row, 
    Card, 
    CardImg, 
    CardBody, 
    Col, 
  } from 'reactstrap';

function RecentNews(){ 

    return(
        <Col md="6">
        <h3 className="p-title">
          Recent News
          <i className="fa fa-plus" aria-hidden="true" id="temp"></i>
        </h3>
        {/* <a href="#" class="control"><i class="fa fa-plus"></i></a> */}
        <Row>
          <Col xs="6">
          <Card>
            <CardImg top width="100%" src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/202004/coronavirus_google_trends_1-77-770x433.jpeg?yTRbCJyMmO0OzayDbF6RTOIHE2qb.Vcb" alt="Card image cap" />
            <CardBody>
            <a href="https://www.indiatoday.in/india/story/corona-warriors-ias-officer-returns-to-work-joins-fight-against-covid-19-with-1-month-old-baby-1666301-2020-04-13?utm_source=rss">
            11 fresh coronavirus cases reported in Rajasthan, total tally at 815
            </a>
            </CardBody>
          </Card>

          </Col>
          <Col xs="6">
          <Card>
            <CardImg top width="100%" src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/202004/Stay_-770x433.jpeg?Xsb5ElfCsTI0eKcZIWvgOSxXozkBYB8N" alt="Card image cap" />
            <CardBody>
            <a href="https://www.indiatoday.in/india/story/corona-warriors-ias-officer-returns-to-work-joins-fight-against-covid-19-with-1-month-old-baby-1666301-2020-04-13?utm_source=rss">
            Coronavirus in India: 35 dead in 24 hours, total Covid-19 cases top 9,000
            </a>
            </CardBody>
          </Card>
          {/* <Card>
            <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
            <CardBody>
              <CardTitle>Card title</CardTitle>
              <CardSubtitle>Card subtitle</CardSubtitle>
              <CardText>
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </CardText> 
            </CardBody>
          </Card> */}
            
          </Col>
        </Row>
      </Col>
      
    )

}


export default RecentNews;