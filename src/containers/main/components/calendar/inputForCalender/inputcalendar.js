import React from "react";
import { StyleInputCalendar } from "./inputcalendar.style";
import { Modal, Form } from "react-bootstrap";
import { Button, Input, Row, Col, DatePicker } from "antd";
//the wolf of wall street
const InputCalendar = props => {
  function onChange(date, dateString) {
    console.log(date, dateString);
  }
  return (
    <StyleInputCalendar>
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
                <label>เลือกวัน :</label>
              </Col>
              <Col md={10}>
                <DatePicker
                  name="day"
                  id="example-day"
                  required
                  placeholder="2020/01/01"
                  onChange={e => this.handleChange("day", e)}
                />
              </Col>
            </Row>
            <br />
            <Row>
              <Col md={4}></Col>
              <Col md={6}>
                <label>คำอธิบาย :</label>
              </Col>
              <Col md={10}>
                <Input 
                  name="description"
                  id="example-description"
                  required
                  placeholder="ID ร้าน"
                  onChange={e => this.handleChange("description", e)}
                />
              </Col>
            </Row>
            <br />
            <Row className="r-add" type="flex" justify="center">
              <Col>
                <Button
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
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    </StyleInputCalendar>
  );
};
export default InputCalendar;
