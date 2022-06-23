type Props = {
  color: string,
}

const Square: React.FC<Props> = (props: Props) => {
  return (
    <>
      <div className={props.color}>
      </div>
      <style jsx>{`
        .white {
          height: 50px;
          width: 50px;
          background-color: white;
          clear: both;
        }
        .black {
          height: 50px;
          width: 50px;
          background-color: black;
          clear: both;
        }
      `}</style>
    </>
  );
};

export default Square;