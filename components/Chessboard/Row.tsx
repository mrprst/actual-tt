import React from 'react';
import Square from './Square';

export type Props = {
  direction: string
}

const Row: React.FC<Props> = (props: Props) => {
  return (
    <>
      <div className={props.direction} data-testid="row">
        <Square color="white" />
        <Square color="black" />
        <Square color="white" />
        <Square color="black" />
        <Square color="white" />
        <Square color="black" />
        <Square color="white" />
        <Square color="black" />
      </div>
      <style jsx={true}>{`
        .white-first {
          display: flex;
        }
        .black-first {
          display: flex;
          flex-direction: row-reverse
        }
      `}</style>
    </>
  );
};

export default Row;
