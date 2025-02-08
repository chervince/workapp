import React from 'react';
import Link from 'next/link';
import styles from './Footer.module.css';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.logo}>
        <img src="/vercel.svg" alt="Logo" />
      </div>
      <nav className={styles.nav}>
        <Link href="/" className={styles.navLink}>
          Accueil
        </Link>
        <Link href="/contact" className={styles.navLink}>
          Contact
        </Link>
        <Link href="/about" className={styles.navLink}>
          A propos
        </Link>
      </nav>
    </footer>
  );
};

export default Footer;