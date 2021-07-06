// Wrapper used for header and footer

const FullWidthWrapper = ({ children, className }) => {
  return (
    <div
      className={`bg-primary min-w-full py-3 sm:py-0 sticky top-0 sm:static z-10`}
    >
      <div
        className={`px-5 sm:px-0 max-w-1240 mx-auto sm:block sm:h-24 ${className}`}
      >
        {children}
      </div>
    </div>
  );
};

export default FullWidthWrapper;
