// Wrapper created to give central part of page an even look
const MainWrapper = ({ children, className }) => {
  return (
    <main
      id="main-wrapper"
      className={`flex-1 w-full mx-auto max-w-1240 ${className}`}
    >
      {children}
    </main>
  );
};

export default MainWrapper;
