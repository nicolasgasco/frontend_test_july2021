import classes from "./PictureBox.module.css";
import { Link } from "react-router-dom";
import { ArrowDown } from "heroicons-react";

const PictureBox = () => {
  return (
    <section className={`h-96 flex flex-col justify-end ${classes.box}`}>
      <div className="flex-1 w-52 ml-24 flex flex-col justify-center">
        <h2 className="h2 text-white">Lorem ipsum</h2>
        <p className="text-xl font-light break-all text-white">
          Dolor sit amet consectetur adipiscing elit.
        </p>
      </div>
      <div className="text-center mb-3">
        <Link to="/products" className="text-white font-semibold text-sm">
          Our products <ArrowDown className="inline ml-1 h-5" />
        </Link>
      </div>
    </section>
  );
};

export default PictureBox;
