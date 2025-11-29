import { Col, Container, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const AppLayout = () => {
  return (
    <Row className="g-0 vh-100">
      <Col md={4} lg={3} className="bg-color-cream vh-100">
        <Sidebar />
      </Col>
      <Col md={8} lg={9} className="main">
        <Container className="py-3 px-5 d-flex flex-column align-items-center vh-100">
          <Outlet />
        </Container>
      </Col>
    </Row>
  );
};

export default AppLayout;
