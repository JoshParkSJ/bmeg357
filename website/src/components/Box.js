import React from 'react';

export default function Box(props) {

    // const [value, setValue] = useState(-1);
    
    function formatValue() {
        return `${props.value}${((props.percent) ? "%" : "")}`;
    }

    // useEffect(() => {
    //     let polling = setInterval(callDataFunction, 3000);
    //     return () => {clearInterval(polling)};
    // }, []);

    // function callDataFunction() {
    //     props.getData().then((response) => setValue(Math.round(response * 100)));
    // }

    return (
            <div className="box-content"> 
                <h1 className="box-title"> {props.title} </h1>
                <h3 className="value">  {formatValue()} </h3>    
            </div>
    );

}