import './App.css';
import React, { useEffect, useState } from 'react';
import Table from './components/Table';
import Box from './components/Box';
import Button from './components/Button';
import firebase from './firebaseconfig';

function App() {
  const [total, setTotal] = useState(1);
  const [inUse, setInUse] = useState(0);
  const [data, setData] = useState([]);

  const handleClick = () => {
    const dataValues = data;
    let earliestUpate = dataValues[0];
    let earliestUpdateIdx = 0;
    let idx = 0;
    dataValues?.forEach(row => {
      if (row[2] === 'On' && row[3].seconds < earliestUpate[3].seconds) {
        earliestUpate = row;
        earliestUpdateIdx = idx; 
      };
      idx += 1;
    })
    dataValues.splice(earliestUpdateIdx, 1);
    setData([earliestUpate, ...dataValues])
  }
  
  useEffect(() => {
    firebase.db.collection("ventilators").doc("status").onSnapshot((doc) => {
      setData(Object.values(doc.data()))
    });
    const fetchData = async () => {
      await firebase.getDB().collection('ventilators').doc('status').get().then(doc => {
        if (doc.exists) setData(Object.values(doc.data()));
        else setData([]);
      });
    }
    fetchData();
  }, []);

  useEffect(() => {
    let inUseCount = 0;
    let totalCount = 0;
    data.forEach(ventStatus => {
      if (ventStatus[2] === 'On') inUseCount++;
      totalCount++;
    })
    setTotal(totalCount);
    setInUse(inUseCount);
  }, [data])

  return (
    <div className="main">
      <h1 className="header"> Ventilator Dashboard Overview </h1>
      <Box title="Capacity" key={1} percent={true} value={Math.round(100 * (inUse/total))} />
      <Box title="In use" key={2} percent={false} value={inUse}/>
      <Box title="In storage" key={3} percent={false} value={total - inUse}/>
      <Button onClick={handleClick} />
      <Table title={["Ventilator", "Room Number", "Status", "Last Updated"]} allRows={data} className="main-table" />
    </div>
  );
}

export default App;
