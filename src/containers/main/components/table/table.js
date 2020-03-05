import { StyleTable } from "./table.style";
import React from "react";
import InputTable from "./inputFortable/inputtable"
import InputQues from "./inputFortable/inputQues"
import {  Row, Col, Button, Input, Table } from "antd";
import { ButtonToolbar } from "react-bootstrap";



 
const columns = [
    {
      title: "แจ้งเรื่องร้านใหม่",
      dataIndex: "name",
      key: "name",
      render: text => <a>{text}</a>, //show color blue
      width: 200
    },
    {
      title: "จำนวนคนที่ตอบ",
      dataIndex: "total",
      key: "total",
      width: 80
    },
    {
      title: "วันที่ Set up",
      dataIndex: "setup",
      key: "setup",
      ellipsis: true
    },
    {
      title: "Area Manager",
      dataIndex: "areaManager",
      key: "areaManager",
      ellipsis: true
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "areaManager",
      ellipsis: true
    }
  ];
  
  //รับค่าจาก json
  const data = [
    {
      key: "1",
      name: "ID1312: KKP-Lotus Korat 1",
      total: 32,
      setup: "1/01/63",
      areaManager: "ภูมิวัฒน์",
      status: "สีไฟแจ้ง",
      tags: ["nice", "developer"]
    },
    {
      key: "2",
      name: "ID796: E-Quip-Central Westgate",
      total: 7,
      setup: "2/01/63",
      areaManager: "อริสรา",
      status: "สีไฟแจ้ง",
      tags: ["loser"]
    },
    {
      key: "3",
      name: "ID794: BKK-Central Suratthani",
      total: 32,
      setup: "3/01/63",
      areaManager: "ยุทธพล",
      status: "สีไฟแจ้ง",
      tags: ["cool", "teacher"]
    }
  ];


const MyTable = props => {

  const [modalShow, setModalShow] = React.useState(false);
  
  return (
    <StyleTable>
      <Row>
        <Col>
        <Table columns={columns} dataSource={data} />
        </Col>
        <Col span={9} offset={2}>
          <ButtonToolbar>
            <Button block variant="primary" onClick={() => setModalShow(true)}>
              เพิ่มรายการ Table
            </Button>
            <InputTable show={modalShow} onHide={() => setModalShow(false)} />
          </ButtonToolbar>
        </Col>
        <Col span={9} offset={2}>
          <ButtonToolbar>
            <Button block variant="primary" onClick={() => setModalShow(true)}>
              เพิ่มคำถาม 
            </Button>
            <InputQues show={modalShow} onHide={() => setModalShow(false)} />
          </ButtonToolbar>
        </Col>
      </Row>
    </StyleTable>
  );
};

export default MyTable;