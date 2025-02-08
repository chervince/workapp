import React from 'react';
import Link from 'next/link';
import styles from './Header.module.css';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src="/vercel.svg" alt="Logo" />
      </div>
      <nav className="flex justify-center space-x-4">
        <Link href="/" className={styles.navLink}>
          Accueil
        </Link>
        <Link href="/data" className={styles.navLink}>
          Data
        </Link>
        <Link href="/a-propos" className={styles.navLink}>
          A propos
        </Link>
      </nav>
    </header>
  );
};

export default Header;