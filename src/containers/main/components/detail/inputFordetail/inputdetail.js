import React from "react";
import { StyleInputDetail } from "./inputdetail.style";
import { Modal, Form } from "react-bootstrap";
import { Input, Row, Col } from "antd";
import Button from '@material-ui/core/Button';

const InputDetail = props => {
  return (
    <StyleInputDetail>
      <Modal
        {...props}
        size="large"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            เพิ่มรายการ
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Row>
              <Col md={4}></Col>
              <Col md={6}>
                <label>ชื่อรายการ :</label>
              </Col>
              <Col md={10}>
                <Input
                  name="shopname"
                  id="example-shopname"
                  required
                  placeholder="ชื่อรายการ"
                  onChange={e => this.handleChange("shopname", e)}
                />
              </Col>
            </Row>
            <br />
            <Row>
              <Col md={4}></Col>
              <Col md={6}>
                <label>url :</label>
              </Col>
              <Col md={10}>
                <Input
                  type="text"
                  name="description"
                  id="example-description"
                  required
                  placeholder="url google drive"
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
                {/*เมื่อกด add ให้ alert ว่ากดแล้ว*/}
              </Col>
            </Row>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button color="secondary" onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    </StyleInputDetail>
  );
};

export default InputDetail;
