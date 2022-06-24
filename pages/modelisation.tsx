import Layout from '../components/Layout'
import prisma from '../lib/prisma';
import { GetServerSideProps } from 'next';
import User, { UserProps } from '../components/User'

type Props = {
  users: UserProps[]
}

const Modelisation: React.FC = props => {

  return (
    <Layout>
      <h1>Liste des utilisateurs</h1>
      <div>
        <div>
          {props.users.map(user => (
            <div>
              <User user={user} />
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
}

export default Modelisation;

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch('http://localhost:3000/api/users')
  const users = await res.json()
  return {
    props: { users },
  }
}