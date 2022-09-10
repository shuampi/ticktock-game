import React from "react";
import Square from "../Square/Square";
import style from "./board.module.css";

interface boardProps {
  square: (string | null)[];
  onClick: (i: number) => void;
}

// const style = {
//     border:'4px solid darkblue',
//     borderRadius:'10px',
//     width: '250px',
//     height:'250px',
//     margin:'0 auto',
//     display:'grid',
//     gridTemplate: 'repeat(3, 1fr) / repeat(3, 1fr)'
// }

const Board = ({ square, onClick }: boardProps) => {
  return (
    <>
    <div className={style.board}>
      {square.map((square, index) => (
        <Square key={index} value={square} onClick={() => onClick(index)} />
      ))}
    </div>
   
    </>
  );
};

export default Board;
