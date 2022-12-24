import React from 'react'

import styles from '../styles/Footer.module.scss'

const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.columns}>
        <div className={styles.column}>
          <h3>Główne</h3>
          <ul>
            <li>Profil</li>
            <li>Kursy</li>
            <li>Lekcja</li>
          </ul>
        </div>
        <div className={styles.column}>
          <h3>Kursy</h3>
          <ul>
            <li>UEiTP</li>
            <li>PEiE</li>
            <li>AK</li>
          </ul>
        </div>
        <div className={styles.column}>
          <h3>Konto</h3>
          <ul>
            <li>Zaloguj</li>
            <li>Ucz się</li>
          </ul>
        </div>
      </div>
      <div className={styles.copyright}>
        <p>Copright Wojtek</p>
      </div>
    </div>
  )
}

export default Footer