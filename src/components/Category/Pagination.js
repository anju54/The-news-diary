import React, { useState } from 'react';
import { Container, Row , Col} from 'reactstrap';
import Pagination from "react-js-pagination";

const PaginationImpl = (props) => {

  const [currentPage, setCurrentPage] = useState(1);

  function handlePageChange(pageNumber) {
    console.log(`active page is ${pageNumber}`);
    console.log(props.props);
    props.clicked(pageNumber);
    setCurrentPage(pageNumber);
    console.log(currentPage);
  }

  return (
    <Container>
      <Row>
        <Col xs="3"></Col>
        <Col xs="7">
          <Pagination
          itemClass="page-item" // add it for bootstrap 4
          linkClass="page-link"
          activePage={currentPage}
          itemsCountPerPage={10}
          totalItemsCount={450}
          pageRangeDisplayed={10}
          onChange={handlePageChange}
          />
        </Col>
      </Row>
    </Container>
  );

}

export default PaginationImpl;