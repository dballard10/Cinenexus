interface RatingProps {
  rating: number;
}

const Rating = ({ rating }: RatingProps) => {
  const ratingColor =
    rating >= 8 ? "bg-green-100 text-green-800" : "bg-blue-100 text-blue-800";

  return (
    <div
      className={`inline-flex items-center px-2 rounded-full text-sm font-medium ${ratingColor}`}
    >
      {rating}
    </div>
  );
};

export default Rating;
