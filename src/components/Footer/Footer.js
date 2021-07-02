import Logo from "../../assets/logo/Logotipo.svg"
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <img src={Logo} alt="Lorem logo" className={styles.logo} />
    </footer>
  );
};

export default Footer;
