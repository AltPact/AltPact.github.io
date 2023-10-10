import React from "react";
import Article1 from "./ArticleList/Article1";
import Article2 from "./ArticleList/Article2";
import Article3 from "./ArticleList/Article3";
import Article4 from "./ArticleList/Article4";
import Article5 from "./ArticleList/Article5";
import { Container, Row, Col, Card } from 'react-bootstrap';

const ArticleList = () => {
  return (
    <Container>
        <Row className="justify-content-between">
            <Col md={8} className="mb-4 mt-4">
                <Article1 />
            </Col>
            <Col md={2} className="mt-4 float-right">
                <Card>
                    <Card.Body>
                        <Card.Title>Recent Posts</Card.Title>
                        <ul className="list-unstyled">
                            <li><a href="#">JavaScript</a></li>
                            <li><a href="#">Data Structure</a></li>
                            <li><a href="#">Algorithm</a></li>
                            <li><a href="#">Computer Network</a></li>
                        </ul>
                    </Card.Body>
                </Card>
            </Col>
            <Col md={8} className="mb-4">
                <Article2 />
            </Col>
            <Col md={8} className="mb-4">
                <Article3 />
            </Col>
            <Col md={8} className="mb-4">
                <Article4 />
            </Col>
            <Col md={8} className="mb-4">
                <Article5 />
            </Col>
        </Row>
    </Container>
);
};
  
export default ArticleList;