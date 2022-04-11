import styles from "../styles/Navbar.module.css";
import { ActiveLink } from "./ActiveLink";

const menuItems = [
  {
    text: "Home",
    href: "/",
  },
  {
    text: "About",
    href: "/about",
  },
  {
    text: "Contact",
    href: "/contact",
  },
  {
    text: "Pricing",
    href: "/pricing",
  },
];

export const Navbar = () => {
  return (
    <nav className={styles.menu_container}>
      {menuItems.map((item) => {
        return <ActiveLink key={item.href} text={item.text} href={item.href} />;
      })}
    </nav>
  );
};
