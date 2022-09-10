import React from 'react'
import { useState } from 'react'
import { calculateWinner } from '../../helpers/helpers'
import Board from '../Board/Board'

// interface gameProps{
    
// }

const Game = () => {
    const [board, setBoard] = useState<(string | null) []>(Array(9).fill(null))
    const [xIsNext, setXIsNext] = useState(true)
    const winner = calculateWinner(board)

    const handleClick = () => {
return "value"
    }
    // const jumpTo = () => {

    // }
    // const renderMoves = () => {

    // }

  return (
    <div>
        <Board square = {board} onClick={handleClick}/>
    </div>
    
  )
}

export default Game