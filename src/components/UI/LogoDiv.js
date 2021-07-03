// This is to garuantee consistency between footer and header
import Logo from "../../assets/logo/Logotipo.svg";

const LogoDiv = ({ className }) => {
  return (
    <img
      src={Logo}
      title="Lorem"
      alt="Lorem logo"
      className={`sm:pl-3 lim:pl-0 w-24 ${className}`}
    />
  );
};

export default LogoDiv;
