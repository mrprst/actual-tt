import React from 'react';
import blackBishop from '../../public/blackBishop.svg'
import blackKnight from '../../public/blackKnight.svg'
import blackQueen from '../../public/blackQueen.svg'
import blackKing from '../../public/blackKing.svg'
import blackRook from '../../public/blackRook.svg'
import blackPawn from '../../public/blackPawn.svg'
import whiteBishop from '../../public/whiteBishop.svg'
import whiteKnight from '../../public/whiteKnight.svg'
import whiteQueen from '../../public/whiteQueen.svg'
import whiteKing from '../../public/whiteKing.svg'
import whiteRook from '../../public/whiteRook.svg'
import whitePawn from '../../public/whitePawn.svg'
import Image from 'next/image'


export type Props = {
  value: string,
}

const Tile: React.FC<Props> = (props: Props) => {

  const src = `/${props.value}.svg`;

  return (
    <>
      <div className='tile' data-testid='tile'>
        <Image loader={() => src} src={src} width={50} height={50} />
      </div>
      <style jsx>{`
        .tile {
          height: 50px;
          width: 50px;
          background-color: transparent;
          display: flex;
          align-item: center;
          justify-content: center
        }
      `}</style>
    </>
  );};

export default Tile;
