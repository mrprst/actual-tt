import Column from '../components/Column';
import Layout from '../components/Layout'

const chessboard: React.FC = () => {

  return (
    <Layout>
      <div className='chessboard'>
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

export default chessboard;
