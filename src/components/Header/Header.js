import { Link } from "react-router-dom";
import Logo from "../../assets/logo/Logotipo.svg";

import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <nav>
        <Link to="/"><img src={Logo} alt="Lorem logo" className={styles.logo} /></Link>
      </nav>
    </header>
  );
};

export default Header;
