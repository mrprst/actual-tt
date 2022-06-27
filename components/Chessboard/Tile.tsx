import React from "react";

export type Props = {
  number: Number,
}

let pawnTiles: String[]
let otherTiles: String[]

pawnTiles = ["pawn", "pawn", "pawn", "pawn", "pawn", "pawn", "pawn", "pawn"]
otherTiles = ["rook", "knight", "bishop", "queen", "king", "bishop", "knight", "rook"]

const Tile: React.FC<Props> = (props: Props) => {
  return (
    <>
      <div className="tile" data-testid="square">
      </div>
      <style jsx>{`
        .tile {
          height: 50px;
          width: 50px;
          background-color: red;
        }
      `}</style>
    </>
  );};

export default Tile;
