interface FriendProps {
  name: string;
  image: string;
}

const Friend = ({ name, image }: FriendProps) => {
  return (
    <div>
      <button
        className={`bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg p-2 w-full flex items-center gap-2`}
      >
        <img src={image} alt={name} className="w-10 h-10 rounded-full" />
        <span>{name}</span>
      </button>
    </div>
  );
};

export default Friend;
