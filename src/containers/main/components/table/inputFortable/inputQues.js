import React from "react";
import { StyleInputTable } from "./inputtable.style";
import { Modal, Form } from "react-bootstrap";
import {  Input, Row, Col } from "antd";
import Button from '@material-ui/core/Button';

import { Cascader } from "antd";

const InputTable = props => {
  const options = [
    {
      value: "Expantion",
      label: "Expantion"
    },
    {
      value: "Finance",
      label: "Finance"
    },
    {
      value: "ItFacilities",
      label: "IT Facilities"
    },
    {
      value: "Service",
      label: "Service"
    },
    {
      value: "OperationAdmin",
      label: "Operation_Admin"
    },
    {
      value: "GA",
      label: "GA_Stationeries & Supplies & Ga_Asset"
    },
    {
      value: "Marketing",
      label: "Marketing"
    },
    {
      value: "Stock",
      label: "Merchandise (Stock)"
    },
    {
      value: "Demo",
      label: "Merchandise (Demo)"
    }
  ];
  onChange = date => this.setState({ date });
  function onChange(value) {
    console.log(value);
  }

  return (
    <StyleInputTable> 
      <Modal
        {...props}
        size="large"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            เพิ่มคำถาม
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Row>
              <Col md={4}></Col>
              <Col md={6}>
                <label>เลือกแผนก :</label>
              </Col>
              <Col md={10}>
                <Cascader
                  options={options}
                  onChange={onChange}
                  placeholder="เลือกแผนก"
                />
              </Col>
            </Row>
            <br />
            <Row>
              <Col md={4}></Col>
              <Col md={6}>
                <label>คำถาม :</label>
              </Col>
              <Col md={10}>
                <Input
                  type="text"
                  name="description"
                  id="example-description"
                  required
                  placeholder="ตั้งคำถามของแผนกที่เลือก"
                  onChange={e => this.handleChange("description", e)}
                />
              </Col>
            </Row>
            <br />
            <Row className="r-add" type="flex" justify="center">
              <Col>
                <Button color="primary"
                  onClick={() => this.handleClick()}
                  onClick={() => alert("เพิ่มรายการสำเร็จ")}
                >
                  Add
                </Button>
              </Col>
            </Row>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button color="secondary" onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    </StyleInputTable>
  );
};

export default InputTable;
