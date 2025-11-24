import { Col, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const AppLayout = () => {
  return (
    <Row className="g-0">
      <Col sm={3} className="bg-color-cream vh-100">
        <Sidebar />
      </Col>
      <Col sm={9}>
        <main className="p-3">
          <Outlet />
        </main>
      </Col>
    </Row>
  );
};

export default AppLayout;
