import Layout from "../components/Layout";
import { GetServerSideProps } from "next";
import Announce, { AnnounceProps } from "../components/Modelisation/Announce";

type Props = {
  announces: AnnounceProps[];
};

const Modelisation: React.FC<Props> = (props) => {
  return (
    <Layout>
      <h1>Liste des utilisateurs</h1>
      <div>
        <div>
          {props.announces.map((announce) => (
            <div key={announce.id}>
              <Announce announce={announce} />
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Modelisation;

export const getServerSideProps: GetServerSideProps = async () => {
  const allUsers = await fetch("http://localhost:3000/api/users");
  const allAnnounces = await fetch("http://localhost:3000/api/announces");
  const allCandidacies = await fetch("http://localhost:3000/api/candidacies");
  const users = await allUsers.json();
  const announces = await allAnnounces.json();
  const candidacies = await allCandidacies.json();
  return {
    props: { users, announces, candidacies },
  };
};
