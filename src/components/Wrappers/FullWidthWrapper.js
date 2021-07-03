const FullWidthWrapper = ({ children, className }) => {
  return (
    <div className={`bg-primary min-w-full h-24`}>
      <div className={`max-w-1240 mx-auto ${className}`}>{children}</div>
    </div>
  );
};

export default FullWidthWrapper;
