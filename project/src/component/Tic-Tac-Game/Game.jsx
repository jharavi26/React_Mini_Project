import React, { useState } from "react";
import "./Game.css"
import useTicToe from "./UseGame";

function Game(){

  const {board, handleClick, calculatWinner, resetGame, getStatusMessage } = useTicToe();

  return (
    <div className="game">
    <div className="status">{getStatusMessage()}
      <button className="reset" onClick={resetGame}>Reset The Game</button>

    </div>
    <div className="board">
      {
        board.map((b, index)=>{
          return <button className="cell" key = {index} onClick={()=>handleClick(index)}
          disabled={b!==null}
          >{b}</button>
        })
      }
      

    </div>
  </div>
  )

}

export default Game;