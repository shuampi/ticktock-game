
import React from 'react'
import Square from '../Square/Square'

interface boardProps {
    square?:string;
    onClick?:()=> string;
    
}

const Board = ({square, onClick}: boardProps) => {
  return (
    <div>
        <Square value="1" onClick={()=> onClick}/>
        <Square value="2" onClick={()=> onClick}/>
        <Square value="3" onClick={()=> onClick}/>
        <Square value="4" onClick={()=> onClick}/>
        <Square value="5" onClick={()=> onClick}/>
        <Square value="6" onClick={()=> onClick}/>
        <Square value="7" onClick={()=> onClick}/>
        <Square value="8" onClick={()=> onClick}/>
        <Square value="9" onClick={()=> onClick}/>
    </div>
  )
}

export default Board
