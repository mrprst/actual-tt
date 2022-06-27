import React from 'react'
import Column from '../components/Column';
import Layout from '../components/Layout'

const Chessboard: React.FC = () => {

  return (
    <Layout>
      <div className='chessboard' data-testid="chessboard">
        <Column direction="white-first" />
        <Column direction="black-first" />
        <Column direction="white-first" />
        <Column direction="black-first" />
        <Column direction="white-first" />
        <Column direction="black-first" />
        <Column direction="white-first" />
        <Column direction="black-first" />
      </div>
      <style jsx>{`
        .chessboard {
          display: flex;
        }
      `}</style>
    </Layout>
  )
}

export default Chessboard;
