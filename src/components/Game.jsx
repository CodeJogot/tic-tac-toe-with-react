import Board from "./Board";
import History from "./History";
import { useState } from "react";

export default function Game() {
  const [nextPlayer, setNextPlayer] = useState("X");
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentBoard, setCurrentBoard] = useState(history[history.length - 1]);

  function handlePlay(nextBoard) {
    setHistory([...history, nextBoard]);
    setCurrentBoard(nextBoard);
    if(nextPlayer === "X") setNextPlayer("O");
    else setNextPlayer("X");
  }
  function handleHistory(board) {
    setCurrentBoard(board);
  }
  return (
    <div className = "flex gap-10">
        <Board nextPlayer = {nextPlayer} currentBoard = {currentBoard} onPlay = {handlePlay}/>
        <History history = {history} onHistory = {handleHistory}/>
    </div>
  )
}
