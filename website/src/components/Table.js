import React from 'react';
import Header from './Header';

export default function Table(props) {
    let rows = [];
    props.allRows.forEach((x, idx) => {
        rows.push(<SingleRow data={x} key={idx}/>);
    });

    // rows.map((x, idx) => {
    //     return <SingleRow data={x} key={idx}/>;
    // });


    return (
        <table className="main-table">
            <Header headers={props.headers}/>
            {rows}
        </table>
    )
}

function SingleRow(props) {
    let row = [];
    props.data.forEach((x, idx) => {
        row.push(<td key={idx}> {x} </td>)
    });
    
    return (<tr> 
                {row}
            </tr>);
}