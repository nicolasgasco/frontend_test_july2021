import { Link, useLocation } from "react-router-dom";
import LogoDiv from "../UI/LogoDiv";
import FullWidthWrapper from "../Wrappers/FullWidthWrapper";

const Header = () => {
  // Used to hide Sign in button when in signin page
  const location = useLocation();

  return (
    <FullWidthWrapper className="flex items-center h-full">
      <header className="w-full">
        <nav className="flex justify-between items-center">
          <h1>
            <Link to="/">
              <LogoDiv />
            </Link>
          </h1>
          {location.pathname !== "/auth/signin" && (
            <Link to="/auth/signin">
              <button className="text-secondary-light font-medium mr-6">
                Sign in
              </button>
            </Link>
          )}
        </nav>
      </header>
    </FullWidthWrapper>
  );
};

export default Header;
