import React, { useEffect } from 'react'
import Row from '../components/Chessboard/Row';
import Layout from '../components/Layout'
import Tile from '../components/Chessboard/Tile'

let squareBoard: any[] = []
let mainTiles: string[] = []
let mainBoard: any[] = []


mainTiles = ['Rook', 'Knight', 'Bishop', 'King', 'Queen', 'Bishop', 'Knight', 'Rook', 'Pawn', 'Pawn', 'Pawn', 'Pawn', 'Pawn', 'Pawn', 'Pawn', 'Pawn', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 'Pawn', 'Pawn', 'Pawn', 'Pawn', 'Pawn', 'Pawn', 'Pawn', 'Pawn', 'Rook', 'Knight', 'Bishop', 'Queen', 'King', 'Bishop', 'Knight', 'Rook' ]
for (let i = 0; i < mainTiles.length; i++) {
  if (i < 16) {
    mainBoard.push(<Tile value={'black' + mainTiles[i]} />);
  } else if (i > 46) {
    mainBoard.push(<Tile value={'white' + mainTiles[i]} />);
  } else {
    mainBoard.push(<Tile value={''} />);
  }
}

for (let i = 0; i < 8; i++) {
  if (i % 2 === 0) {
    squareBoard.push(<Row direction="white-first" />);
  } else {
    squareBoard.push(<Row direction="black-first" />);
  }
}


const Chessboard: React.FC = () => {

  return (
    <Layout>
      <div className='container' >
        <div className='board' data-testid="chessboard">
          {squareBoard}
        </div>

        <div className='tiles' data-testid="tiles">
          {mainBoard}
        </div>
      </div>
      <style jsx>{`
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
    </Layout>
  )
}

export default Chessboard;
