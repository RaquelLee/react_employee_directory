import React from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
// import SearchForm from "../components/SearchForm";
// import EmployeeTable from "../components/employeeTable";
import EmployeeContainer from "../components/EmployeeRow";

function Home() {
  return (
    <div>
      <Container>
        <Row>
          <Col size="md-12">
            <EmployeeContainer>
            </EmployeeContainer>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
