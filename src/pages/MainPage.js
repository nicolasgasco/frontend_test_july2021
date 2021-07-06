import { useEffect, useState } from "react";

import ProductCard from "../components/Products/ProductCard";
import PictureBox from "../components/UI/PictureBox";

import { PRODUCTS } from "../assets/mock_db/products";

const MainPage = () => {
  const [featuredProducts, setFeaturedProducts] = useState([]);

  // This could could be async in real life, hence UseEffect
  useEffect(() => {
    setFeaturedProducts(PRODUCTS);
  }, []);

  const showFeaturedProducts = featuredProducts.map((product) => {
    return <ProductCard key={product._id} product={product} />;
  });

  return (
    <>
      <PictureBox />
      <section className="mt-12 px-6 sm:px-0">
        <h3 className="h3 text-primary-darkest tracking-tight mb-2 sm:mb-6">
          Featured products
        </h3>
        <div className="flex flex-col sm:flex-row flex-wrap justify-start align-middle mb-8 sm:mb-20 divide-y-2 sm:divide-y-0">
          {showFeaturedProducts}
        </div>
      </section>
    </>
  );
};

export default MainPage;
