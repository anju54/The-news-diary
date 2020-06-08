import React from 'react';
import { Container, Row , Col} from 'reactstrap';
import Pagination from "react-js-pagination";

/**
 * This used for pagination UI
 * @param {} props 
 */
const PaginationImpl = (props) => {
  
  function handlePageChange(pageNumber) {
    props.clicked(pageNumber);
  }

  return (   
    <Container>
      <Row>
        <Col xs="3"></Col>
        <Col xs="7">
          <Pagination
          //hideFirstLastPage
          hideNavigation  // Hide navigation buttons (prev page, next page)
          itemClass="page-item" // add it for bootstrap 4
          linkClass="page-link"
          activePage={props.activePage}
          itemsCountPerPage={10}
          totalItemsCount={props.totalpage}
          pageRangeDisplayed={10}
          onChange={handlePageChange}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default PaginationImpl;