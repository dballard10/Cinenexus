import CurrentGrid from "@/components/content-grids/CurrentGrid";
import GridHeading from "@/components/content-grids/GridHeading";
import SearchBar from "@/components/filters/SearchBar";

const ProfileContent = () => {
  return (
    <>
      <SearchBar />
      <GridHeading title="What you've been watching" />
      <CurrentGrid />
      <GridHeading title="Your Favorite Shows" />
    </>
  );
};

export default ProfileContent;
