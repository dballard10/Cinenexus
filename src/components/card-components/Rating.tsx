interface RatingProps {
  rating: number;
}

const Rating = ({ rating }: RatingProps) => {
  // Round to the nearest tenth (one decimal place) and ensure display with one decimal place
  const roundedRating = (Math.round(rating * 10) / 10).toFixed(1);

  const ratingColor =
    rating >= 8 ? "bg-green-100 text-green-800" : "bg-blue-100 text-blue-800";

  return (
    <div
      className={`inline-flex items-center px-2 rounded-full text-sm font-medium ${ratingColor}`}
    >
      {roundedRating}
    </div>
  );
};

export default Rating;
