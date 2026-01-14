import { Chess } from "chess.js";
import { Chessboard } from "react-chessboard";
import { useState } from "react";

export default function ChessBoard() {
  const [game, setGame] = useState(new Chess());

  function onPieceDrop(sourceSquare, targetSquare) {
    const gameCopy = new Chess(game.fen());

    const move = gameCopy.move({
      from: sourceSquare,
      to: targetSquare,
      promotion: "q",
    });

    if (move === null) return false; // 非法走法

    setGame(gameCopy);
    return true; 
  }

  return (
    <div style={{ maxWidth: 420, margin: "40px auto" }}>
      <Chessboard
        position={game.fen()}
        onPieceDrop={onPieceDrop}
      />
    </div>
  );
}

