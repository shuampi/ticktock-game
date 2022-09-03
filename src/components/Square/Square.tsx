import React, { MouseEventHandler } from 'react'
interface squareProps{
    onClick: MouseEventHandler | undefined;
    value:string;
}

const style = {
    background:'lightblue',
    border: '2px solid darkblue',
    fontSize:'30px',
    fontWeight:'800',
    cursor:'pointer',
    outline:'none'
};

const Square = ({onClick, value}:squareProps) => {
  return (
    <button style={style} onClick={onClick}>
        {value}
    </button>
  )
}

export default Square