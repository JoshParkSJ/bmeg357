import './App.css';
import React, { useEffect, useState } from 'react';
import Table from './components/Table';
import Box from './components/Box';

function App() {

  let rooms = ["A", "B", "C"];
  let headerList = ["Ventilator", "Room Number", "Status", "Last Updated"];

  const capacity = 500;
  const [inUse, setUse] = useState(Math.round(Math.random() * (500 - 30) + 30));
  const [data, setData] = useState(makeData());

  useEffect(() => {
    let interval = setInterval(() => {
      setUse(Math.round(Math.random() * (130 - 30) + 30));
    }, 5000);
    return () => {clearInterval(interval)}
  }, []);

  useEffect(() => {
    setData(makeData());
  }, []);

  function makeData() {
    let rows = [];
    for (let i = 0; i < inUse; i++) {
      rows.push(makeRow());
    }
    console.log(rows);
    return rows;
  }

  function makeRow() {
    let vNum = Math.round(Math.random() * 998 + 1);
    let rNum = `${Math.round(Math.random() * 98 + 1)}${rooms[Math.round(Math.random() * 2)]}`;
    let stat = (Math.round(Math.random()) === 1) ? "On" : "Off";
    let data1 = new Date();
    let row = [vNum, rNum, stat, data1.toString()];
    return row;
  }

  return (
    <div className="main">
      <h1 className="header"> Ventilator Dashboard Overview </h1>
      <Box title="Capacity" key={1} percent={true} value={Math.round(100*(inUse/capacity))} />
      <Box title="In use" key={2} percent={false} value={inUse}/>
      <Box title="In storage" key={3} percent={false} value={capacity - inUse}/>
      <Table headers={headerList} allRows={data} className="main-table" />
    </div>
  );
}

export default App;
