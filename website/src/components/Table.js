import React, { useState, useEffect } from 'react';
import Header from './Header';

const Table = props => {
    const [rows, setRows] = useState([]);
    const { allRows } = props;

    useEffect(() => {
        if (allRows?.[0]) {
            const runningRow = [];
            Object.values(allRows).forEach((x, idx) => runningRow.push(<SingleRow data={x} key={idx}/>));
            setRows(runningRow);
        } 
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [allRows])

    return (
        <table className="main-table">
            <Header headers={props.title}/>
            {rows}
        </table>
    )
}

const SingleRow = props => {
    return (
      <tr>
        {props.data.map((x, idx) => {
          return (<td key={idx}>{idx === 3 ? new Date(props.data[3].seconds * 1000).toString() : String(x)}</td>)
        })}
      </tr>
    );
}

export default Table;