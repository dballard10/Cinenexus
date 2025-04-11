import Separator from "../page-components/Separator";

const GridHeading = ({ title }: { title: string }) => {
  return (
    <div>
      <h1 className="text-center text-3xl font-bold tracking-tight text-white pb-2 pt-4">
        {title}
      </h1>
      <Separator />
    </div>
  );
};

export default GridHeading;
