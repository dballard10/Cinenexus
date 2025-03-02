interface ShowTitleProps {
  title: string;
}

const ShowTitle = ({ title }: ShowTitleProps) => {
  return (
    <a
      href={`/Shows/${title.replace(/\s+/g, "-")}`}
      className="text-xl font-semibold text-white cursor-pointer transition-transform hover:scale-105"
    >
      {title}
    </a>
  );
};

export default ShowTitle;
