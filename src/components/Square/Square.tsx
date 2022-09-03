import React, { MouseEventHandler } from 'react'
interface squareProps{
    onClick: MouseEventHandler | undefined;
    value:string;
}

const Square = ({onClick, value}:squareProps) => {
  return (
    <button onClick={onClick}>
        {value}
    </button>
  )
}

export default Square