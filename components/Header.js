import React from 'react'
import Link from 'next/link'
import { useState } from 'react'

import { GiHamburgerMenu } from 'react-icons/gi'
import styles from '../styles/Header.module.scss'

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <div className={styles.navBarContainer}>
      <button type='button'
      onClick={() => {setOpenMenu(!openMenu)}}
      className={styles.hamburgerButton}
      ><GiHamburgerMenu/></button>
      <div className={openMenu ? `${styles.hamburgerSlider} ${styles.opened}` : `${styles.hamburgerSlider}`}>
        <button type='button'
         onClick={() => {setOpenMenu(!openMenu)}}
         className={styles.hamburgerButton}
         ><GiHamburgerMenu/></button>
        <div className={styles.navBarContentContainer}>
          <h3>Główne</h3>
          <ul className={styles.navLinks}>
            <li><Link href="/">Profil</Link></li>
            <li><Link href="/">Kursy</Link></li>
            <li><Link href="/">Lekcja</Link></li>
          </ul>
          <h3>Kursy</h3>
          <ul className={styles.navLinks}>
            <li><Link href="/">UEiTP</Link></li>
            <li><Link href="/">PEiE</Link></li>
            <li><Link href="/">AK</Link></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Header