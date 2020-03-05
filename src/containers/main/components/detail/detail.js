import React from "react";
import { StyleDetail } from "./detail.style";
import InputDetail from "./inputFordetail/inputdetail";
import { Button, Input, Row, Col } from "antd";
import { ButtonToolbar } from "react-bootstrap";

const Detail = props => {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <StyleDetail>
      <label>Lay out Url.</label>
      <Row type="flex" justify="center">
        <Col span={18}>
          <Button block>รายการที่ 1</Button>
          <Button block>รายการที่ 2</Button>
        </Col>
      </Row>
      <br />
      <Row>
        <Col span={12} offset={6}>
          <ButtonToolbar>
            <Button block variant="primary" onClick={() => setModalShow(true)}>
              เพิ่มรายการ
            </Button>
            <InputDetail show={modalShow} onHide={() => setModalShow(false)} />
          </ButtonToolbar>
        </Col>
      </Row>
    </StyleDetail>
  );
};

export default Detail;
