import React from 'react'
import Link from 'next/link'

import { GiHamburgerMenu } from 'react-icons/gi'
import styles from '../styles/Header.module.scss'

const Header = () => {
  return (
    <div className={styles.navBarContainer}>
        <Link href="/"><GiHamburgerMenu/></Link>
        <div className={styles.navBarLinksContaine}>
            <ul>
                <li><Link href="/">Profil</Link></li>
                <li><Link href="/">Kursy</Link></li>
                <li><Link href="/">Lekcja</Link></li>
            </ul>
        </div>
    </div>
  )
}

export default Header