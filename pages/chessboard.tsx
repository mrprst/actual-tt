import React from 'react'
import Game from '../components/Chessboard/Game';
import Layout from '../components/Layout'

const Chessboard: React.FC = () => {
  return (
    <Layout>
      <Game />
    </Layout>
  )
}

export default Chessboard;
