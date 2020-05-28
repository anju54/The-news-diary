import React from 'react';
import { Nav, Container, Row , Col} from 'reactstrap';
import Pagination from "react-js-pagination";

const PaginationImpl = (props) => {

  let activePage =10;
  function handlePageChange(pageNumber) {
    console.log(`active page is ${pageNumber}`);
    console.log(props.props);
    props.clicked(pageNumber);
    activePage = pageNumber;
    // this.setState({activePage: pageNumber});
  }

  return (
    <Container>
      <Row>
        <Col xs="4"></Col>
        <Col xs="7">
          <Pagination
          hideFirstLastPages
          activePage={activePage}
          // itemsCountPerPage={10}
          totalItemsCount={activePage*7}
          pageRangeDisplayed={7}
          onChange={handlePageChange}
          />
        </Col>
      </Row>
    </Container>
  );

}

export default PaginationImpl;