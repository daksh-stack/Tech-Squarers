import React from 'react';
import { Menu } from 'lucide-react';
import { motion } from 'framer-motion';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <motion.nav 
      className={styles.navbar}
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Left: Menu */}
      <div className={styles.menuItem}>
        <Menu className={styles.menuIcon} />
        <span className={styles.menuText}>Menu</span>
      </div>

      {/* Center: Logo */}
      <div className={styles.logoContainer}>
        <div className={styles.logoText}>
          <span className={styles.logoT}>T</span>
          <span className={styles.logoS}>S</span>
        </div>
        <span className={styles.logoSubtitle}>Tech Squares</span>
      </div>

      {/* Right: Enroll Button */}
      <button className={styles.enrollButton}>
        Enroll Now
      </button>
    </motion.nav>
  );
};

export default Navbar;
