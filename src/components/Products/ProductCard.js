import PhonePicture from "../../assets/img/iphone-silver.png";

import classes from "./ProductCard.module.css";

const ProductCard = ({ className }) => {
  const colors = ["gray", "pink"];

  const showColors = colors.map((color) => {
    return (
      <button
        className={`bg-product-${color} rounded-full mx-2 h-6 w-6 focus:ring-2 focus:ring-primary-darkest focus:outline-none hover:ring-2 hover:ring-primary-darkest`}
      >
        <span className="sr-only">{`${
          color.charAt(0).toUpperCase() + color.slice(1)
        }`}</span>
      </button>
    );
  });
  return (
    <div
      className={`mr-6 ring-2 rounded-sm ring-primary-lightest w-4/12 flex p-10`}
    >
      <div className="w-5/12 p-0 m-0">
        <img src={PhonePicture} className={`-ml-5 ${classes.picture}`} />
      </div>
      <div className="w-7/12">
        <h4 className="h4 text-primary-darkest -mt-2 mb-2">Product 1</h4>
        <p className="text-primary-darkest font-medium text-md">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat eaque
          numquam alias provident.
        </p>
        <div className="mt-3 flex items-center">
          <p className="font-bold text-primary-darkest text-md">Color:</p>
          <div className="ml-3">{showColors}</div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
