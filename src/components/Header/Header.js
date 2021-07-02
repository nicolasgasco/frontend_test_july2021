import { Link } from "react-router-dom";
import LogoDiv from "../UI/LogoDiv";

const Header = () => {
  return (
    <header className="bg-primary h-20 flex justify-between items-center">
      <nav>
        <Link to="/">
          <LogoDiv />
        </Link>
      </nav>
    </header>
  );
};

export default Header;
