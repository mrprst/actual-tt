import React from "react";
import _JSXStyle from 'styled-jsx/style'

export type Props = {
  color: string,
}

const Square: React.FC<Props> = (props: Props) => {
  return (
    <>
      <div className={props.color} data-testid="square">
      </div>
      <style jsx={true}>{`
        .white {
          height: 50px;
          width: 50px;
          background-color: white;
          clear: both;
        }
        .black {
          height: 50px;
          width: 50px;
          background-color: #3545e5;
          clear: both;
        }
      `}</style>
    </>
  );
};

export default Square;
