import classes from "./PictureBox.module.css";

const PictureBox = () => {
  return (
    <section className={`h-96 ${classes.box}`}>
      <div className="w-60 outline-white">
        <h2 className="text-3xl font-bold text-white">Lorem ipsum</h2>
        <p className="text-2xl break-all text-white">Dolor sit amet consectetur adipiscing elit.</p>
      </div>
    </section>
  );
};

export default PictureBox;
