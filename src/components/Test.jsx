import { Chessboard } from "react-chessboard"

function TestBoard() {
  return (
    <Chessboard
      boardWidth={420}
      onPieceDrop={() => true}
    />
  )
}

export default TestBoard

