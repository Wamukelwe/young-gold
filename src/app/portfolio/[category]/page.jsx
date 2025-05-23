"use client"

import React from 'react'
import styles from './page.module.css'
import Link from 'next/link'

const Portfolio = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.selectTitle}>Choose a gallery</h1>
      <div className={styles.items}>
        <Link href="/portfolio/illustrations" legacyBehavior>
          <a className={styles.item}>
            <span className={styles.title}>Illustrations</span>
          </a>
        </Link>

        <Link href="/portfolio/Projects" legacyBehavior>
          <a className={styles.item}>
            <span className={styles.title}>Projects</span>
          </a>
        </Link>

        <Link href="/portfolio/Programmes" legacyBehavior>
          <a className={styles.item}>
            <span className={styles.title}>Programmes</span>
          </a>
        </Link>
      </div>
    </div>
  )
}

export default Portfolio
