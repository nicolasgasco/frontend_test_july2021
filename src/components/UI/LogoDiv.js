// This is to garuantee consistency between footer and header
import Logo from "../../assets/logo/Logotipo.svg";

const LogoDiv = ({ className }) => {
  return (
    <img src={Logo} alt="Lorem logo" className={`w-24 ml-20 ${className}`} />
  );
};

export default LogoDiv;
