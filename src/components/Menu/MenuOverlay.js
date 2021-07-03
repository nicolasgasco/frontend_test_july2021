import { Link } from "react-router-dom";
import AuthBottomBar from "./AuthBottomBar";

import classes from "./MenuOverlay.module.css";

const MenuOverlay = ({ className, setMobileOpen }) => {
  const menuItems = ["Products", "About us", "Contact"];

  const showMenuItems = menuItems.map((item) => {
    return (
      <Link to="#" className="text-4xl font-bold text-white py-12">{`${
        item.charAt(0).toUpperCase() + item.slice(1)
      }`}</Link>
    );
  });

  return (
    <div
      className={`sm:hidden fixed top-12 w-screen h-full z-50 bg-primary-darkest bg-opacity-95 ${className} ${classes.dropdown} `}
    >
      <nav className="w-full flex flex-col items-center mt-12">
        {showMenuItems}
      </nav>
      <AuthBottomBar setMobileOpen={setMobileOpen} className="fixed bottom-0" />
    </div>
  );
};

export default MenuOverlay;
