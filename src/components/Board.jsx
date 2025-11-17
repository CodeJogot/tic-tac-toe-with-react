import Square from "./Square";



function calculateWinner(board) {
  const condition = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < condition.length; i++) {
    const [a, b, c] = condition[i];
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a];
    }
  }
  return null;
}

export default function Board({nextPlayer, currentBoard, onPlay}) {
  function handleSquareClick(i) {
    if(winner || currentBoard[i]) return;
    const nextBoard = currentBoard.slice();
    nextBoard[i] = nextPlayer;
    onPlay(nextBoard);
  }
  const winner = calculateWinner(currentBoard);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next Player: " + nextPlayer;
  }
  return (
    <div>
      <h1>{status}</h1>
      <div className="flex ">
        <div>
          <Square value = {currentBoard[0]} onSquareClick = {()=> handleSquareClick(0)}/>
          <Square value = {currentBoard[1]} onSquareClick = {()=> handleSquareClick(1)}/>
          <Square value = {currentBoard[2]} onSquareClick = {()=> handleSquareClick(2)}/>
        </div>
        <div>
          <Square value = {currentBoard[3]} onSquareClick = {()=> handleSquareClick(3)}/>
          <Square value = {currentBoard[4]} onSquareClick = {()=> handleSquareClick(4)}/>
          <Square value = {currentBoard[5]} onSquareClick = {()=> handleSquareClick(5)}/>
        </div>
        <div>
          <Square value = {currentBoard[6]} onSquareClick = {()=> handleSquareClick(6)}/>
          <Square value = {currentBoard[7]} onSquareClick = {()=> handleSquareClick(7)}/>
          <Square value = {currentBoard[8]} onSquareClick = {()=> handleSquareClick(8)}/>
        </div>
      </div>
    </div>
  );
}
