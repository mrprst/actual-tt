import React from "react";

export type CandidacyProps = {
  announceId: number;
  userId: number;
  announce: {
    title: string;
  };
  user: {
    name: string;
  };
};


const Candidacy: React.FC<{ candidacy: CandidacyProps }> = ({ candidacy }) => {
  return (
    <div>
      <h2>
        {candidacy.user.name}
      </h2>
    </div>
  );
};

export default Candidacy;
