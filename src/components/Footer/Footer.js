import LogoDiv from "../UI/LogoDiv";
import FullWidthWrapper from "../Wrappers/FullWidthWrapper";

const Footer = () => {
  return (
    <FullWidthWrapper className="h-24 sm:h-24">
      <footer>
        <LogoDiv screenReader={false} className="mt-4 sm:mt-8 sm:mb-12" />
      </footer>
    </FullWidthWrapper>
  );
};

export default Footer;
