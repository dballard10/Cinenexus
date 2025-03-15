interface ShowTitleProps {
  name: string;
}

const ShowTitle = ({ name }: ShowTitleProps) => {
  const link = name;

  return (
    <a
      href={`/shows/${link}`}
      className="text-xl font-semibold text-white cursor-pointer transition-transform hover:scale-105"
    >
      {name}
    </a>
  );
};

export default ShowTitle;
