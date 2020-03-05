import React from "react";
import { StylePiechart } from "./piechart.style";
import {Chart} from 'primereact/chart';
// import HistoryChart from "@bit/ofek.catdog.history-chart";

const Piechart = props => {
  
const data = {
    labels: ['รอดำเนินการ', 'เสร็จสิ้น'],
    datasets: [
      {
        data: [300, 50], // จะรับค่ายังไง 
        backgroundColor: ['#BB0000', '#0000BB', '#FFCE56'],
        hoverBackgroundColor: ['#000011', '#000011', '#00FF00']
      }
    ]
  };
  return (
    <StylePiechart>
      <Chart type="pie" data={data} />
      <p>รอรับค่า</p>
    </StylePiechart>
  );
};

export default Piechart;
