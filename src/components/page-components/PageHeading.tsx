interface PageHeadingProps {
  title: string;
}

const PageHeading = ({ title }: PageHeadingProps) => {
  return (
    <header className="bg-white/5 backdrop-blur-lg border-b border-white/10">
      <div className="mx-auto px-4 py-6 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold tracking-tight text-white">
          {title}
        </h1>
      </div>
    </header>
  );
};

export default PageHeading;
