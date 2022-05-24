import Menu from "../Menu";
import "./NavBar.css";
import { motion, Variants } from "framer-motion";
const NavBar = () => {
  return (
    <div className="navbar">
      <h1>BookStore</h1>
      <div>
        <motion.ul className="menu">
          <motion.li whileHover={{ scale: 1.1 }}>Online Boutique</motion.li>
          <motion.li whileHover={{ scale: 1.1 }}>Online Boutique </motion.li>
          <motion.li whileHover={{ scale: 1.1 }}>Online Boutique </motion.li>
          <motion.li whileHover={{ scale: 1.1 }}>Online Boutique </motion.li>
        </motion.ul>
      </div>
    </div>
  );
};
export default NavBar;
