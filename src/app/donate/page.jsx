import React from 'react';
import styles from './page.module.css';
import Image from 'next/image';

const Donate = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src="https://images.pexels.com/photos/6347738/pexels-photo-6347738.jpeg?auto=compress&cs=tinysrgb&w=600" 
        fill={true} 
        alt=''
        className={styles.img}
        /></div>
      <h1 className={styles.desc}>Make a Donation</h1>
      <div className={styles.bankDetails}>
        <p>Bank Name: Tyme Bank</p>
        <p>Account Name: Young Gold Polishers</p>
        <p>Account Number: 53000649081</p>
        <p>Branch Code: 678910</p>
        <p>Reference: Your Donation Reference</p>
      </div>
    </div>
  );
};

export default Donate;
