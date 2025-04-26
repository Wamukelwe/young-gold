import React from 'react'
import styles from './page.module.css'
import Link from 'next/link'

const Portfolio = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.selectTitle}>Choose a gallery</h1>
    <div className={styles.items}>
      <Link href="/portfolio/illustrations" className={styles.item}>
        <span className={styles.title}>Illstrations</span>
      </Link>
      <Link href="/portfolio/Projects" className={styles.item}>
        <span className={styles.title}>Project</span>
      </Link>
      <Link href="/portfolio/Programmes" className={styles.item}>
        <span className={styles.title}>Programmes</span>
      </Link>
    </div>
    </div>
  )
}

export default Portfolio