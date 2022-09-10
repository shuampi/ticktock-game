import React from "react";
import { useState } from "react";
import { calculateWinner } from "../../helpers/helpers";
import Board from "../Board/Board";

// interface gameProps{

// }

const Game = () => {
  const [board, setBoard] = useState<(string | null)[]>(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const winner = calculateWinner(board);

  const handleClick = (i: number) => {
    const boardCopy = [...board];
    //if square is fill or there is a winner, does not return anything.
    if (winner || boardCopy[i]) return;
    // add an O or X in a square if it is empty and change the state
    boardCopy[i] = xIsNext ? "X" : "O";
    setBoard(boardCopy);
    setXIsNext(!xIsNext);
  };
  // const jumpTo = () => {

  // }
  const renderMoves = () => {
    return (
      <button onClick={() => setBoard(Array(9).fill(null))}>Start Game</button>
    );
  };

  return (
    <div>
      <Board square={board} onClick={handleClick} />
      <div>
        <p>
          {winner ? `Winner: ${winner}` : `Next player: ${xIsNext ? "X" : "O"}`}
        </p>
      </div>
      {renderMoves()}
    </div>
  );
};

export default Game;
