import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Imagegallery.css";
//
function Imagegallery() {
  return (
    <>
      <Container fluid>
        <Row className=" my-5 ">
          <Col md={3} sm={6}>
            <img
              className="img-fluid img-gallery"
              src="./img-gallery/realestate.jpg"
              alt="img"
            />
          </Col>
          <Col md={3} sm={6}>
            <img
              className="img-fluid img-gallery"
              src="./img-gallery/furniture2.jpg"
              alt="img"
            />
          </Col>
          <Col md={6} sm={12}>
            <img
              style={{ height: "22rem", marginTop: "-3.8rem", width: "47rem" }}
              className="img-fluid img-gallery"
              src="./img-gallery/tanisque.jpg"
              alt="img"
              height={200}
            />
          </Col>
        </Row>
        <Row style={{ marginTop: "-4rem" }}>
          <Col>
            <img
              style={{ height: "17rem" }}
              md={3}
              sm={6}
              className="img-fluid img-gallery"
              src="./img-gallery/fashion-bud4.jpg"
              alt="img"
            />
          </Col>
          <Col md={3} sm={6}>
            <img
              className="img-fluid img-gallery"
              src="./img-gallery/fmcg5.jpg"
              alt="img"
            />
          </Col>
          <Col md={3} sm={6}>
            <img
              className="img-fluid img-gallery"
              src="./img-gallery/food6.jpg"
              alt="img"
            />
          </Col>
          <Col md={3} sm={6}>
            <img
              style={{ width: "24rem", height: "17rem" }}
              className="img-fluid img-gallery"
              src="./img-gallery/industrial7.jpg"
              alt="img"
            />
          </Col>
        </Row>
        <Row style={{ marginTop: ".15rem" }}>
          <Col md={6} sm={12}>
            <img
              style={{ width: "47.35rem", height: "18rem" }}
              className="img-fluid img-gallery"
              src="./img-gallery/branding8.jpg"
              alt="img"
            />
          </Col>
          <Col md={3} sm={6}>
            <img
              style={{ height: "18rem" }}
              className="img-fluid img-gallery"
              src="./img-gallery/life9.jpg"
              alt="img"
            />
          </Col>
          <Col md={3} sm={6}>
            <img
              style={{ width: "24rem", height: "18rem" }}
              className="img-fluid img-gallery"
              src="./img-gallery/exhibition10.jpg"
              alt="img"
            />
          </Col>
        </Row>
      </Container>
      {/* <Row className="grid-container2">
        <Col className="item1">
          <img src="./img-gallery/fashion-bud4.jpg" alt="img" />
        </Col>
        <Col className="item2">
          <img src="./img-gallery/fmcg5.jpg" alt="img" />
        </Col>
        <Col className="item2">
          <img src="./img-gallery/food6.jpg" alt="img" />
        </Col>
        <Col className="item2">
          <img src="./img-gallery/industrial7.jpg" alt="img" />
        </Col>
      </Row>
      <Row className="grid-container3">
        <Col className="item8">
          <img src="./img-gallery/branding8.jpg" alt="img" />
        </Col>
        <Col className="item9">
          <img src="./img-gallery/life9.jpg" alt="img" />
        </Col>
        <Col className="item10">
          <img src="./img-gallery/exhibition10.jpg" alt="img" />
        </Col>
      </Row> */}
    </>
  );
}

export default Imagegallery;
