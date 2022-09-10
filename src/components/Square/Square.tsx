import React, { MouseEventHandler } from 'react'
import style from './square.module.css'
interface squareProps{
    onClick: MouseEventHandler | undefined;
    value:string | null;
}

// const style = {
//     background:'lightblue',
//     border: '2px solid darkblue',
//     fontSize:'30px',
//     fontWeight:'800',
//     cursor:'pointer',
//     outline:'none'
// };

const Square = ({onClick, value}:squareProps) => {
  return (
    <button className={style.square} onClick={onClick}>
        {value}
    </button>
  )
}

export default Square