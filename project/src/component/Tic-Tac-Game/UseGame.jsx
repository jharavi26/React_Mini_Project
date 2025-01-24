import { useState } from "react";


const initialBoard = ()=>Array(9).fill(null);


const useTicToe = ()=>{
  const [board, setBoard] = useState(initialBoard());
  const [isnext, setIsNext] = useState(true);

  const WINNING_PATTERNS = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
  ];

  const calculateWinner = (currebtBoard)=>{
    for(let i=0; i<WINNING_PATTERNS.length; i++){
      const [a,b,c] = WINNING_PATTERNS[i];
      if(currebtBoard[a] && 
        currebtBoard[a]===currebtBoard[b] && 
        currebtBoard[a]===currebtBoard[c])
        {
          return currebtBoard[a];
        }
    }
    return null;

  }

  const handleClick = (index)=>{
    const winner = calculateWinner(board)
    if(winner || board[index]) return 

    const newBoard = [...board]
    newBoard[index] = isnext ? "X" : "O";
    setBoard(newBoard)
    setIsNext(!isnext)

  }

  const getStatusMessage = ()=>{
    const winner = calculateWinner(board);
    if (winner) return `Player ${winner} wins`
    if(!board.includes(null)) return `its a draw`;
    return `Player ${isnext ? "X" : "O"} turn `

  }

  const resetGame = ()=>{
    setBoard(initialBoard());
    setIsNext(true);


  }

  return {board, handleClick, calculateWinner, getStatusMessage, resetGame}

}

export default useTicToe;