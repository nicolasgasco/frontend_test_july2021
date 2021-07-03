import ProductCard from "../components/Products/ProductCard";
import PictureBox from "../components/UI/PictureBox";

const MainPage = () => {
  return (
    <>
      <PictureBox />
      <section className="mt-12">
        <h3 className="h3 tracking-tight mb-6">Featured products</h3>
        <div className="flex justify-start align-middle">
          <ProductCard />
          <ProductCard />
        </div>
      </section>
    </>
  );
};

export default MainPage;
