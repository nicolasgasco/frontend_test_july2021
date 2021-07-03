import LogoDiv from "../UI/LogoDiv";
import FullWidthWrapper from "../Wrappers/FullWidthWrapper";

const Footer = () => {
  return (
    <FullWidthWrapper className="h-32 sm:h-24">
      <footer>
        <LogoDiv className="pt-3" />
      </footer>
    </FullWidthWrapper>
  );
};

export default Footer;
