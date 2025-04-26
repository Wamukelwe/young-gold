import React from 'react'
import styles from './footer.module.css'
import Image from "next/image"
const Footer = () => {
  return (
    <div className={styles.container}>
        <div>2023 Young Gold Polishers. All rights reserved</div>
        <div className={styles.social}>
            <Image src="/facebook.svg" width={15} height={15} className={styles.icon} alt="Young GP Facebook"/>
            <Image src="/instagram.svg"  width={15} height={15} className={styles.icon} alt="Young GP Instagram"/>
            <Image src="/square-x-twitter.svg" width={15} height={15} className={styles.icon} alt="Young GP Twitter"/>
        </div>
    </div>
  );
};

export default Footer