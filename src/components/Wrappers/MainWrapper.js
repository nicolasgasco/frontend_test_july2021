// Wrapper created to give central part of page an even look
import classes from "./MainWrapper.module.css";

const MainWrapper = ({ children, className }) => {
  return (
    <main
      id="main-wrapper"
      className={`flex-1 w-full mx-auto outline-black ${classes.wrapper} ${className}`}
    >
      {children}
    </main>
  );
};

export default MainWrapper;
