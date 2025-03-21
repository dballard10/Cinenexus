const CardSkeletons = () => {
  const numOfSkeletons = 20;

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      {Array.from({ length: numOfSkeletons }).map((_, index) => (
        <div
          key={index}
          className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg overflow-hidden"
        >
          {/* Image skeleton */}
          <div className="bg-gray-700/50 animate-pulse h-44 w-full"></div>

          {/* Content skeleton */}
          <div className="p-2">
            <div className="flex flex-row justify-between mb-2 h-14">
              <div className="flex flex-col gap-1">
                {/* Title skeleton */}
                <div className="bg-gray-700/50 animate-pulse h-5 w-32 rounded"></div>

                <div className="flex flex-row gap-4 py-2">
                  {/* Media type skeleton */}
                  <div className="bg-gray-700/50 animate-pulse h-4 w-14 rounded-full"></div>
                </div>
              </div>
              <div className="flex flex-row gap-1 items-center px-2">
                {/* Favorites button skeleton */}
                <div className="bg-gray-700/50 animate-pulse h-8 w-8 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardSkeletons;
