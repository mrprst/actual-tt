import Layout from '../components/Layout'

let fibonacci: number[] = [0, 1];

function listFibonacci(num: number) {
  for (let i: number = 2; i < num; i++) {
    fibonacci[i] = fibonacci[i - 2] + fibonacci[i - 1];
  }
  return fibonacci;
}

console.log(listFibonacci(10));
const fibonacci: React.FC = () => {

  return (
    <Layout>

      <style jsx>{`
        .chessboard {
          display: flex;
        }
      `}</style>
    </Layout>
  )
}

export default chessboard;
