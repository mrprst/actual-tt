import React from 'react'
import Row from '../components/Chessboard/Row';
import Layout from '../components/Layout'
import Tile from '../components/ChessBoard/Tile'

const Chessboard: React.FC = () => {

  return (
    <Layout>
      <div className='container' >
        <div className='chessboard' data-testid="chessboard">
          <Row direction="black-first" />
          <Row direction="white-first" />
          <Row direction="black-first" />
          <Row direction="white-first" />
          <Row direction="black-first" />
          <Row direction="white-first" />
          <Row direction="black-first" />
        </div>
        <div className='tiles' data-testid="tiles">
          <Tile />
        </div>
      </div>
      <style jsx>{`
        .container {
          position: relative
          display: flex;
          align-items: center
        }
        .chessboard {
          display: flex;
          flex-direction: column;
          align-items: center;
          position: absolute
        }
        .tiles {
          display: flex;
          flex-direction: column;
          align-items: center;
          position: absolute;
          z-index: 10
        }
      `}</style>
    </Layout>
  )
}

export default Chessboard;
