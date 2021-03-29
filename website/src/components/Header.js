import React from 'react';
// import Hello from '../styled-components/StyledDashboard';

function Header(props) {
  let tableHeader = props.headers.map((x, idx) => {return <th key={idx} className="Table-header"> {x} </th>});
  return (
    <tr className="table-row-header"> {tableHeader} </tr>
  )
}

export default Header