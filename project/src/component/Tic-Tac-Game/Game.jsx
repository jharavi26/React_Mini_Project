import React, { useState } from "react";
import "./Game.css"

function Game(){

  const initialBoard = ()=>Array(9).fill(null);

const [board, setBoard] = useState(initialBoard());


  return (
    <div className="game">
    <div className="status">Player X Turn
      <button className="reset">Reset The Game</button>

    </div>
    <div className="board">
      {
        board.map((_, index)=>{
          return <button className="cell" key = {index}>X</button>
        })
      }
      

    </div>
  </div>
  )

}

export default Game;