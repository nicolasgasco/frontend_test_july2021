import { Link } from "react-router-dom";

import classes from "./PictureBox.module.css";

import { ArrowSmDown } from "heroicons-react";

const PictureBox = () => {
  return (
    <section className={`h-96 flex flex-col justify-end ${classes.box}`}>
      <div className="flex-1 w-44 sm:w-48 ml-6 sm:ml-24 flex flex-col justify-center">
        <h2 className="h2 text-white">Lorem ipsum</h2>
        <p className="text-lg sm:text-xl font-light text-primary-light break-all">
          Dolor sit amet consectetur adipiscing elit.
        </p>
      </div>
      <div className="text-center mb-3">
        <Link to="/products" className="text-white font-medium text-sm">
          Our products <ArrowSmDown className="inline ml-1 h-5" />
        </Link>
      </div>
    </section>
  );
};

export default PictureBox;
