import CurrentGrid from "@/components/content-grids/CurrentGrid";
import FavoritesGrid from "@/components/content-grids/FavoritesGrid";
import GridHeading from "@/components/content-grids/GridHeading";

const ProfileContent = () => {
  return (
    <>
      <GridHeading title="What you've been watching" />
      <CurrentGrid />
      <GridHeading title="Your Favorite Shows" />
      <FavoritesGrid />
    </>
  );
};

export default ProfileContent;
