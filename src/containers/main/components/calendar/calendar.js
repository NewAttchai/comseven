import React from "react";
import { StyleCalendar } from "./calendar.style";
import { Button, Row, Col, Calendar, Badge } from "antd";
import  InputCalendar from "./inputForCalender/inputcalendar";
import { ButtonToolbar } from "react-bootstrap";
export default () => {
  const [modalShow, setModalShow] = React.useState(false);

  function dateCellRender(value) {
    const listData = getListData(value);
    return (
      <ul className="events">
        {listData.map(item => (
          <li key={item.content}>
            <Badge status={item.type} text={item.content} />
          </li>
        ))}
      </ul>
    );
  }

  function getListData(value) {
    let listData;
    switch (value.date()) {
      case 10:
        listData = [
          { type: "warning", content: "ID1312: KKP-Lotus Korat 1" }
          //{ type: "success", content: "This is usual event." },
          //{ type: "error", content: "This is error event." }
        ];
        break;
      case 14:
        listData = [
          { type: "warning", content: "ID796: E-Quip-Central Westgate" }
          //{ type: "success", content: "This is very long usual event。。...." },
          //{ type: "error", content: "This is error event 1." }
        ];
        break;
      case 18:
        listData = [
          { type: "warning", content: "ID794: BKK-Central Suratthani" }
          //{ type: "success", content: "This is usual event." }
        ];
        break;
      default:
    }
    return listData || [];
  }

  function getMonthData(value) {
    if (value.month() === 8) {
      return 1394;
    }
  }

  function monthCellRender(value) {
    const num = getMonthData(value);
    return num ? (
      <div className="notes-month">
        <section> {num} </section> <span> Backlog number </span>
      </div>
    ) : null;
  }

  return (
    <StyleCalendar>
      <Row>
        <Calendar
          dateCellRender={dateCellRender}
          monthCellRender={monthCellRender}
        />
      </Row>
      <Row >
      <Col span={12} offset={6}>
          <ButtonToolbar>
            <Button block variant="primary" onClick={() => setModalShow(true)}>
              เพิ่มรายการโน๊ต
            </Button>
            <InputCalendar
              show={modalShow}
              onHide={() => setModalShow(false)}
            />
          </ButtonToolbar>
        </Col>
      </Row>
    </StyleCalendar>
  );
};
