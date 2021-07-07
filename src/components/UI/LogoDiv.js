// This is to garuantee consistency between footer and header
import Logo from "../../assets/logo/Logotipo.svg";

const LogoDiv = ({ className, screenReader = true }) => {
  return (
    <img
      src={Logo}
      title="Lorem"
      // For the footer, I don't want the logo to be visible for screen readers
      alt={screenReader ? "Lorem logo" : ""}
      className={`sm:pl-3 lim:pl-0 w-32 ${className}`}
    />
  );
};

export default LogoDiv;
