import React from 'react';

const Button = props => {
  return (
    <button onClick={props.onClick} className="box-content" style={{ position: 'relative', top: '-8px', height: '168px' }}>
      <h1 className="box-title">Locate</h1>
    </button>
  )
}

export default Button;