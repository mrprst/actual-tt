import React from 'react';
import Square from './Square';

export type Props = {
  direction: string
}

const Column: React.FC<Props> = (props: Props) => {
  return (
    <>
      <div className={props.direction} data-testid="column">
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
          flex-direction: column
        }
        .black-first {
          display: flex;
          flex-direction: column-reverse
        }
      `}</style>
    </>
  );
};

export default Column;
