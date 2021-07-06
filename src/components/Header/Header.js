import { Link, useHistory, useLocation } from "react-router-dom";

// Redux state
import { useSelector, useDispatch } from "react-redux";
import { menuActions } from "../../store/menu";

import LogoDiv from "../UI/LogoDiv";
import FullWidthWrapper from "../Wrappers/FullWidthWrapper";
import MenuOverlay from "../Menu/MenuOverlay";

import { Menu, X } from "heroicons-react";

const Header = () => {
  // Used to hide Sign in button when in signin page
  const location = useLocation();
  // Used to go back to previous page when closign menu while signing in
  const history = useHistory();

  // Redux state for opening parts of menus
  const menuOpen = useSelector((state) => state.menu.menuOpen);
  const dispatch = useDispatch();

  const openMobileMenu = () => {
    dispatch(menuActions.toggleMenu(true));
  };

  const closeMobileMenu = () => {
    dispatch(menuActions.toggleMenu(false));
    if (location.pathname === "/auth/signin") {
      // Closing signin as well
      dispatch(menuActions.toggleSignin(false));
      // Going back to previous page in case it was in signin
      history.goBack();
    }
  };

  // Three lines for opening, x for closing
  let mobileButtons = (
    <div type="button">
      <span className="sr-only">{menuOpen ? "Close menu" : "Open menu"}</span>
      {menuOpen ? (
        <X className="text-white" onClick={closeMobileMenu} />
      ) : (
        <Menu className="text-white" onClick={openMobileMenu} />
      )}
    </div>
  );

  return (
    <>
      <FullWidthWrapper className="sm:flex sm:items-center z-50">
        <header className="w-full">
          <nav className="flex justify-between items-center">
            <h1>
              <Link to="/" onClick={closeMobileMenu}>
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
      {menuOpen && <MenuOverlay />}
    </>
  );
};

export default Header;
