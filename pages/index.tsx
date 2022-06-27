import React from 'react'
import Layout from '../components/Layout'

const Tests: React.FC = () => {
  return (
    <Layout>
      <div className="page">
        <h1>Technical Test</h1>
        <div className='menu'>
          <h2><a href='/chessboard'>ACT-TT1 - Echiquier</a></h2>
          <h2><a href='/fibonacci'>ACT-TT2 - Fibonacci</a></h2>
          <h2><a href='/modelisation'>ACT-TT3 - Modélisation</a></h2>
        </div>
      </div>
      <style jsx>{`
        .post {
          background: white;
          transition: box-shadow 0.1s ease-in;
        }

        .post:hover {
          box-shadow: 1px 1px 3px #aaa;
        }

        .post + .post {
          margin-top: 2rem;
        }

        .menu {
          display: flex;
          flex-direction: column;
        }

        a {
          color: black
        }
      `}</style>
    </Layout>
  )
}

export default Tests
