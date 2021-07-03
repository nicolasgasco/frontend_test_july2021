const FullWidthWrapper = ({ children, className }) => {
  return (
    <div className={`bg-primary min-w-full py-3 `}>
      <div className={`px-5 sm:px-0 max-w-1240 mx-auto sm:h-24 ${className}`}>
        {children}
      </div>
    </div>
  );
};

export default FullWidthWrapper;
