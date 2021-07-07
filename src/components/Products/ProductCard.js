import { useState } from "react";

const ProductCard = ({ product }) => {
  // Possible product colors
  const [colors, setColors] = useState(() => product.available_colors);

  // Utility function for formatting text
  const capitalizeFirstLetter = (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  };

  // Showing color balls, with border if it's the actual product color
  const showColors = colors.map((color) => {
    // Using custom colors added to Tailwind config file
    return (
      <button
        key={`button-color-${color}`}
        className={`bg-product-${color} ${
          product.color === color && "ring-1 ring-primary-darkest "
        } rounded-full mx-2 h-5 w-5 focus:outline-none`}
      >
        <span className="sr-only">{`${capitalizeFirstLetter(color)}`}</span>
      </button>
    );
  });

  return (
    <div
      className={`sm:mr-6 rounded-sm sm:ring-2 ring-primary-lightest sm:w-4/12 flex items-center pl-4 py-9 sm:p-10`}
    >
      <div className="w-5/12 p-0 m-0">
        <img
          src={product.picture.uri}
          className="-ml-5"
          alt={product.picture.alt}
        />
      </div>
      <div className="w-7/12">
        <h4 className="h4 text-primary-darkest -mt-2 mb-1">
          {capitalizeFirstLetter(product.name)}
        </h4>
        <p className="text-primary-darkest text-sm sm:text-sm">
          {capitalizeFirstLetter(product.description)}
        </p>
        <div className="mt-1 flex items-center">
          <p className="font-bold text-primary-darkest text-md inline-block">Color:</p>
          <div className="ml-3 flex items-center">{showColors}</div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
