import React from 'react';
import styles from './page.module.css';

const Contact = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Contact Us</h1>
      <p className={styles.subtitle}>
        If you have any questions or feedback, please feel free to contact us:
      </p>
      <ul className={styles.contactList}>
        <li>Email: dim4.mphou@gmail.com</li>
        <li>Phone: +277 382 15660</li>
        <li>Address: Savoy Estate</li>
      </ul>
    </div>
  );
};

export default Contact;
