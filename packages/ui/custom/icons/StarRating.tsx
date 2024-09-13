

interface StarProps {
    color: string;
}
interface StarRatingProps {
  max: number;
  rank: number;
  filledColor: string;
  emptyColor: string;
}
const FilledStar: React.FC<StarProps> = ({ color }) => (
    <svg fill={color} stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-red-100" viewBox="0 0 24 24">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
    </svg>
);


const EmptyStar: React.FC<StarProps> = ({ color }) => (
  <svg fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className={`w-4 h-4 ${color}`} viewBox="0 0 24 24">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
  </svg>
);
const StarRating: React.FC<StarRatingProps> = ({ max, rank, filledColor, emptyColor }) => {
  return (
    <div className="flex items-center">
      {[...Array(max)].map((_, index) => (
        <span key={index}>
          {index < rank ? <FilledStar color={filledColor} /> : <EmptyStar color={emptyColor} />}
        </span>
      ))}
      <span className="ml-2 text-sm text-textWhite">({rank}/{max})</span>
    </div>
  );
};

export default StarRating;
