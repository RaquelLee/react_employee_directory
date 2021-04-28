import React from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import SearchForm from "../components/SearchForm";
import EmployeeTable from "../components/employeeTable";

function Home() {
  return (
    <div>
      <Container>
        <Row>
          <Col size="md-12">
            <SearchForm>
            </SearchForm>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <EmployeeTable>
            </EmployeeTable>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
