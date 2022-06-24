import React from "react";

export type AnnounceProps = {
  id: number;
  title: string;
  candidacies: {
    id: number;
    announceId: number;
    userId: number
    user: {
      name: string
    }
  };
};

const Announce: React.FC<{ announce: AnnounceProps }> = ({ announce }) => {

  const candidatesArr = []
  Object.keys(announce.candidacies).forEach((x) => candidatesArr.push(announce.candidacies[x].user.name))

  return (
    <div>
      <div key={announce.id}>
        <h2>{announce.title}</h2>
          <p>{candidatesArr.toString()}</p>
      </div>
    </div>
  );
};

export default Announce;
