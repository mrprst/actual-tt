import Square from './Square';

type Props = {
  direction: string
}

const Column: React.FC<Props> = (props: Props) => {
  return (
    <>
      <div className={props.direction}>
        <Square color="white" />
        <Square color="black" />
        <Square color="white" />
        <Square color="black" />
        <Square color="white" />
        <Square color="black" />
        <Square color="white" />
        <Square color="black" />
      </div>
      <style jsx>{`
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
