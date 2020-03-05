import React, { Component } from "react";
import { StyleMain } from "./main.style";
import { Layout, Row, Col } from "antd";
import { Piechart, Calendar, Table, Detail } from "./components";




class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.state.history = [];
  }
  state = {
    data: []
  };
  render() {
    const { Header } = Layout;

    return (
      <StyleMain>
        <Header className="header">Com7</Header>
        <Row>
          <Col sm={24} md={12}>
            <Piechart />
          </Col>
          <Col sm={24} md={12}>
            <Table />
          </Col>
        </Row>
        <Row>
          <Col sm={24} md={12}>
            <div className="ant-fullcalender">
              <Calendar />
            </div>
          </Col>
          <Col sm={24} md={12}>
            <Detail />
          </Col>
        </Row>
      </StyleMain>
    );
  }
}

export default Main;
