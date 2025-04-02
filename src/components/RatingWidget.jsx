import { useState } from "react";
import { toast } from "react-toastify";

const RatingWidget = ({ onSubmitRating }) => {
  const [rating, setRating] = useState("");

  const handleSubmit = () => {
    const newRating = parseFloat(rating);
    if (newRating >= 1 && newRating <= 5) {
      onSubmitRating(newRating);
      toast.success("Rating submitted successfully! 🎉");
      setRating("");
    } else {
      toast.error("Please enter a rating between 1 and 5 ❌"); 
    }
  };

  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow-md flex flex-col items-center gap-3 w-full mt-3">
      {/* Rating Input */}
      <input
        type="number"
        value={rating}
        onChange={(e) => setRating(e.target.value)}
        placeholder="Enter rating (1-5)..."
        className="bg-transparent text-white text-lg border-b-2 border-gray-400 focus:border-yellow-400 outline-none w-[80%] p-1 text-center"
      />

      {/* Submit Button */}
      <button
        onClick={handleSubmit}
        className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-4 py-2 rounded-md transition-all"
      >
        Submit Rating
      </button>
    </div>
  );
};

export default RatingWidget;