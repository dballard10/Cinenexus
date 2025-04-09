import useMediaStore from "@/hooks/use-media-store";
import FilterTag from "./FilterTag";

const FilterTags = () => {
  const { selectedGenres, selectedPlatforms, selectedSort } = useMediaStore();

  return (
    <>
      <div className="flex flex-wrap gap-2">
        {selectedGenres.names.map((genre) => (
          <FilterTag key={genre} label={genre} />
        ))}
      </div>
      <div className="flex flex-wrap gap-2">
        {selectedPlatforms.platformNames.map((platform) => (
          <FilterTag key={platform} label={platform} />
        ))}
      </div>
      <div className="flex flex-wrap gap-2">
        {selectedSort.name && <FilterTag label={selectedSort.name} />}
      </div>
    </>
  );
};

export default FilterTags;
