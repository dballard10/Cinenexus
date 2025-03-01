const Platform = ({ name }: { name: string }) => {
  return (
    <div>
      <button
        className={`bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg p-2 w-full`}
      >
        {name}
      </button>
    </div>
  );
};

export default Platform;
