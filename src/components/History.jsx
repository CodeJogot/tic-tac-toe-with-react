

export default function History({history, onHistory}) {
  const moves = history.map((board, move) => {
    let description;
    if(move == 0) description = "Go to game start";
    else description = `Go to move #${move}`;
    return(
      <li key={move}>
        <button onClick={() => onHistory(board)} className = "border-2 border-gray-500 rounded-md p-2 w-[200px]">{description}</button>
      </li>
    )
  } )
  return (
    <div className = "flex flex-col gap-2">
        <ol>{moves}</ol>
    </div>
  )
}
