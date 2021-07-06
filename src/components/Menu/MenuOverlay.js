import { Link } from "react-router-dom";

// Redux state
import { useDispatch } from "react-redux";
import { menuActions } from "../../store/menu";

import AuthBottomBar from "./AuthBottomBar";

const MenuOverlay = ({ className }) => {
  const menuItems = ["Products", "About us", "Contact"];

  // Redux state for opening parts of menus
  const dispatch = useDispatch();

  const closeMenuOnLink = () => {
    dispatch(menuActions.toggleMenu(false));
  };

  const showMenuItems = menuItems.map((item) => {
    // To extract the route automatically, e.g. About us -> about
    const firstWordLowercase = item.split(" ")[0].toLowerCase();

    return (
      <Link
        key={`menu-item-${firstWordLowercase}`}
        to={firstWordLowercase}
        onClick={closeMenuOnLink}
        className="text-4xl font-bold text-white py-12"
      >{`${item.charAt(0).toUpperCase() + item.slice(1)}`}</Link>
    );
  });

  return (
    <div
      className={`sm:hidden fixed top-12 w-screen h-full z-40 bg-primary-darkest bg-opacity-95 ${className}`}
    >
      <nav className="w-full flex flex-col items-center mt-12">
        {showMenuItems}
      </nav>
      <AuthBottomBar className="fixed bottom-0" />
    </div>
  );
};

export default MenuOverlay;
