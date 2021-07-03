import { Link, useLocation } from "react-router-dom";
import LogoDiv from "../UI/LogoDiv";
import FullWidthWrapper from "../Wrappers/FullWidthWrapper";

import { Menu, X } from "heroicons-react";
import { useState } from "react";

const Header = () => {
  // Used to hide Sign in button when in signin page
  const location = useLocation();

  const [isOpen, setIsOpen] = useState(false);

  // Three lines for opening, x for closing
  let mobileButtons = (
    <button type="button" onClick={() => setIsOpen((prevState) => !prevState)}>
      <span className="sr-only">{isOpen ? "Close menu" : "Open menu"}</span>
      {isOpen ? <X className="text-white" /> : <Menu className="text-white" />}
    </button>
  );

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
            // Hidden for mobile devices
            <div className="hidden sm:flex">
              <Link to="/auth/signin">
                <button className="text-secondary-light font-medium sm:mr-6">
                  Sign in
                </button>
              </Link>
            </div>
          )}
          <div className="flex sm:hidden">{mobileButtons}</div>
        </nav>
      </header>
    </FullWidthWrapper>
  );
};

export default Header;
