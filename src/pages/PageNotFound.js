import { ArrowLeft } from "heroicons-react";
import { useHistory } from "react-router-dom";

const ProductsPage = () => {
  const history = useHistory();

  return (
    <section className="p-10">
      <button
        onClick={() => history.push("/")}
        className="text-primary-darkest flex items-center mb-16"
      >
        <ArrowLeft aria-hidden="true" className="inline mr-3 w-5" />
        <span className="font-bold text-lg tracking-tight">Go back</span>
      </button>
      <h2 className="mt-8 h2">Page under construction</h2>
    </section>
  );
};

export default ProductsPage;
