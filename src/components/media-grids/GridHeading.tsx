const GridHeading = ({ title }: { title: string }) => {
  return (
    <div>
      <h1 className="text-3xl font-bold tracking-tight text-white pb-2">
        {title}
      </h1>
    </div>
  );
};

export default GridHeading;
