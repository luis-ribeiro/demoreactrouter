import React from "react";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";

export default class AppFooter extends React.Component {
    render() {
        return (
            <Container fluid="md">
                <Row>
                    <Col>@Footer</Col>
                    <Col>2</Col>
                    <Col>3</Col>
                    <Col>202</Col>
                </Row>
            </Container>
        )

    }
}