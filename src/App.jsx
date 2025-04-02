import { useState } from "react";
import ProductCard from "./components/ProductCard";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const initialProducts = [
  {
    id: 1,
    name: "Wireless Headphones",
    description: "High-quality sound with noise cancellation.",
    image: "https://picsum.photos/300/200?random=1",
    avgRating: 4.2,
    totalRatings: 10,
  },
  {
    id: 2,
    name: "Smartwatch",
    description: "Track your fitness and notifications.",
    image: "https://picsum.photos/300/200?random=2",
    avgRating: 3.8,
    totalRatings: 15,
  },
  {
    id: 3,
    name: "Portable Speaker",
    description: "Powerful sound in a compact design.",
    image: "https://picsum.photos/300/200?random=3",
    avgRating: 4.5,
    totalRatings: 8,
  },
];

export function App() {
  const [products, setProducts] = useState(initialProducts);

  const handleRatingSubmit = (productId, newRating) => {
    setProducts((prev) => {
      const updatedproduct = prev.map((product) =>
        product.id === productId
          ? {
              ...product,
              avgRating:
                (product.avgRating * product.totalRatings + newRating) /
                (product.totalRatings + 1),
              totalRatings: product.totalRatings + 1,
            }
          : product
      );

      console.log("updated", updatedproduct);
      return [...updatedproduct];
    });
  };

  return (
    <div className="flex flex-wrap gap-6 justify-center w-full p-4">
      {products?.map((item) => (
        <ProductCard
          key={item.id}
          id={item.id}
          name={item.name}
          description={item.description}
          image={item.image}
          avgRating={item.avgRating}
          totalRatings={item.totalRatings}
          handleRatingSubmit={handleRatingSubmit}
        />
      ))}

      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
}

export default App;