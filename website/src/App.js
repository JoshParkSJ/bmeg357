import './App.css';
import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Button from '@material-ui/core/Button';
import Dashboard from './components/Dashboard';
import Table from './components/Table';
import Box from './components/Box';
import Hello from './styled-components/StyledDashboard';

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
  }, [inUse]);

  function makeData() {
    let rows = [];
    for (let i = 0; i < inUse; i++) {
      rows.push(makeRow());
    }
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

  // TODO: implement polling to get fetch the data every 3 seconds (Or every x seconds);

  return (
    <div className="main">
      <h1 className="header"> Ventilator Dashboard Overview </h1>
      <Box title="Capacity" percent={true} value={Math.round(100*(inUse/capacity))} key={1}/>
      <Box title="In use" percent={false} key={2} value={inUse}/>
      <Box title="In storage" percent={false} key={3} value={capacity - inUse}/>
      <Table headers={headerList} allRows={data} className="main-table" />
    </div>
  );
}

export default App;
