import RatingWidget from "./RatingWidget";

const ProductCard = ({
  id,
  name,
  description,
  image,
  avgRating,
  totalRatings,
  handleRatingSubmit,
}) => {
  return (
    <div className="flex flex-col text-white items-stretch h-auto bg-[#1E293B] w-[36rem] p-6 rounded-xl shadow-lg border border-gray-600">
      {/* Name Section */}
      <p className="h-[4rem] text-2xl font-bold text-center flex items-center justify-center">
        {name}
      </p>

      {/* Description Section */}
      <p className="h-[5rem] w-full overflow-hidden bg-gray-700 text-lg p-3 rounded-md">
        {description}
      </p>

      {/* Image Section */}
      <div className="flex justify-center mt-4">
        <img
          src={image}
          alt={name}
          className="w-full h-[14rem] object-contain rounded-md shadow-md transition-transform duration-500 hover:scale-105 hover:rotate-[360deg] hover:shadow-2xl"
        />
      </div>

      {/* Ratings Section */}
      <div className="flex justify-between items-center w-full h-[3rem] mt-4 bg-gray-900 p-4 rounded-md">
        <span className="text-xl font-semibold text-yellow-400">
          ⭐ {avgRating.toFixed(1)}
        </span>
        <span className="text-lg">📊 {totalRatings} Ratings</span>
      </div>

      {/* Rating Widget */}
      <RatingWidget
        onSubmitRating={(newRating) => handleRatingSubmit(id, newRating)}
      />
    </div>
  );
};

export default ProductCard;