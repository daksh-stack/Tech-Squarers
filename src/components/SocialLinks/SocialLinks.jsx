import React from 'react';
import { FaDiscord, FaInstagram, FaYoutube, FaLinkedin, FaTwitter } from 'react-icons/fa';
import styles from './SocialLinks.module.css';

const SocialLinks = () => {
  return (
    <div className={styles.socialLinks}>
      <a href="https://discord.gg/WjrXUy8XM" target="_blank" rel="noopener noreferrer" aria-label="Discord" className={styles.socialIcon}><FaDiscord /></a>
      <a href="https://www.linkedin.com/company/techsquarers/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className={styles.socialIcon}><FaLinkedin /></a>
      <a href="#" aria-label="Youtube" className={styles.socialIcon}><FaYoutube /></a>
      <a href="#" aria-label="Instagram" className={styles.socialIcon}><FaInstagram /></a>
      <a href="#" aria-label="X" className={styles.socialIcon}><FaTwitter /></a>
    </div>
  );
};

export default SocialLinks;
