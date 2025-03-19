import CurrentGrid from "@/components/content-grids/CurrentGrid";
import FavoritesGrid from "@/components/content-grids/FavoritesGrid";
import GridHeading from "@/components/content-grids/GridHeading";

const FriendsContent = () => {
  return (
    <>
      <GridHeading title="What your friends are watching" />
      <CurrentGrid />
      <GridHeading title="Your friends' favorite shows" />
      <FavoritesGrid />
    </>
  );
};

export default FriendsContent;
