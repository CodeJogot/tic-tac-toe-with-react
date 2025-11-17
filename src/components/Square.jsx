

export default function Square({value, onSquareClick}) {
  return (
    <div>
        <button onClick = {onSquareClick} className="border-2 border-gray-500 rounded-md p-2 w-10 h-10">{value}</button>
    </div>
  )
}
