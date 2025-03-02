interface ShowTitleProps {
  name: string;
}

const ShowTitle = ({ name }: ShowTitleProps) => {
  return (
    <a
      href={`/Shows/${name.replace(/\s+/g, "-")}`}
      className="text-xl font-semibold text-white cursor-pointer transition-transform hover:scale-105"
    >
      {name}
    </a>
  );
};

export default ShowTitle;
