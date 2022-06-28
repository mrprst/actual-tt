import React, { useEffect } from 'react'
import Row from './Row';
import Layout from '../Layout'
import Tile from './Tile'
import _JSXStyle from 'styled-jsx/style'

let squareBoard: any[] = []
let mainTiles: string[] = []
let mainBoard: any[] = []

mainTiles = ['Rook', 'Knight', 'Bishop', 'King', 'Queen', 'Bishop', 'Knight', 'Rook', 'Pawn', 'Pawn', 'Pawn', 'Pawn', 'Pawn', 'Pawn', 'Pawn', 'Pawn', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 'Pawn', 'Pawn', 'Pawn', 'Pawn', 'Pawn', 'Pawn', 'Pawn', 'Pawn', 'Rook', 'Knight', 'Bishop', 'Queen', 'King', 'Bishop', 'Knight', 'Rook' ]
for (let i = 0; i < mainTiles.length; i++) {
  if (i < 16) {
    mainBoard.push(<Tile value={'black' + mainTiles[i]} key={i} data-testid="tile"/>);
  } else if (i > 46) {
    mainBoard.push(<Tile value={'white' + mainTiles[i]} key={i} data-testid="tile"/>);
  } else {
    mainBoard.push(<Tile value={''} key={i} />);
  }
}

for (let i = 0; i < 8; i++) {
  if (i % 2 === 0) {
    squareBoard.push(<Row direction="white-first" key={i} />);
  } else {
    squareBoard.push(<Row direction="black-first" key={i} />);
  }
}


const Game: React.FC = () => {
  return (
    <>
      <div className='container' >
        <div className='board' data-testid="squareboard">
          {squareBoard}
        </div>
        <div className='tiles' data-testid="tiles">
          {mainBoard}
        </div>
      </div>
      <style jsx={true}>{`
        .container {
          position: relative;
          width: 400px;
          height: 400px;
          display: flex;
          align-items: center
        }
        .board {
          display: flex;
          flex-direction: column;
          align-items: center;
          position: absolute;
          z-index: -1;
          align-content: flex-start;
        }
        .tiles {
          position: absolute;
          width: 400px;
          height: 400px;
          display: flex;
          flex-wrap: wrap
        }

      `}</style>
    </>
  );
};

export default Game;
