'use client';
import { useState } from 'react';
import '../styles/tictactoe.css'; 

const TicTacToe = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  const handleClick = (index) => {
    const newBoard = board.slice();
    if (calculateWinner(board) || newBoard[index]) {
      return;
    }
    newBoard[index] = xIsNext ? '✖️' : '⭕';
    setBoard(newBoard);
    setXIsNext(!xIsNext);
  };

  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setXIsNext(true);
  };

  const winner = calculateWinner(board);
  const status = winner ? `Winner: ${winner}` : `Next player: ${xIsNext ? '✖️' : '⭕'}`;

  return (
    <div className="ticTacToe">
      <div className="status">{status}</div>
      <div className="board">
        {board.map((value, index) => (
          <button key={index} className="square" onClick={() => handleClick(index)}>
            {value}
          </button>
        ))}
      </div>
      <button className="resetButton" onClick={resetGame}>Reset</button>
    </div>
  );
};

TicTacToe.displayName = 'TicTacToe';

export default TicTacToe;
