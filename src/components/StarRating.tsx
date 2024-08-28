import { FaRegStar, FaStar } from "react-icons/fa6";

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex items-center gap-x-1">
      {...new Array(rating).fill(0).map((_, i) => (
        <span key={`star-${i}`} className="text-primary">
          {i < Math.floor(rating) ? <FaStar /> : <FaRegStar />}
        </span>
      ))}
    </div>
  );
};
export default StarRating;
