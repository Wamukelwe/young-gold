import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import Button from '@/components/Button/Button'
const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src="https://images.pexels.com/photos/9324330/pexels-photo-9324330.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
        fill={true} 
        alt=''
        className={styles.img}
        />
        <div className={styles.imgText}>
        <h1 className={styles.imgTitle}> Allow us to introduce ourselves</h1>
        <h2 className={styles.imgDesc}> A better future starts today</h2>
      </div>
      </div>
      
<div className={styles.textContainer}>
<div className={styles.item}>
  <h1 className={styles.title}>Who Are We?</h1>
  <p className={styles.desc}>
  Founded in 2017, Young Gold Polishers foundation is a Public
Benefit Organisation and Non-profit Organisation according to the
Non-profit Organisation Act of 1997 of South Africa established by
dedicated entrepreneurs to empower and groom the youth of South
Africa to actively contribute towards achieving Sustainable
Development Goals (SDGs) 2, 3, 4, and 15.
<br/>
<br/>
We recognize the potential of young individuals to become the
driving force behind positive societal change, and we are committed
to equipping them with the skills, knowledge, and opportunities they
need to create a sustainable and inclusive future not only for
themselves but for the communit they are a part of too
  </p>
<Button url="/contact" text="Contact"/>
</div>
<div className={styles.item}>
  <h1 className={styles.title}>What do we do?</h1>
  <p className={styles.desc}>
  Promote Environmental Cleanliness: We endeavor to enhance the quality of local communities by implementing innovative programs focused on cleaning and revitalizing neglected areas, thereby contributing to a cleaner environment.
Empower Youth through Agriculture: Our commitment lies in fostering youth employment by creating opportunities within the agricultural sector, encouraging skill development, and enabling sustainable livelihoods.
<br/>
Cultivate Environmental Stewardship: We provide mentorship, guidance, and pathways to actively participate in environmental conservation, nurturing a generation of individuals dedicated to preserving our planet.
Equip Youth with Essential Skills: Through educational initiatives, we equip young individuals with life skills and academic support, ensuring their personal growth and future success.
<br/>
Revitalize Recreational Spaces: Identifying and renovating abandoned recreational spaces, we aim to transform these areas into valuable community assets, accessible to those who will benefit the most.
Forge Collaborative Partnerships: We prioritize cooperation with governmental bodies and diverse organizations, working collectively to accomplish our primary objectives and amplify our impact.
  </p>
  <Button url="/contact" text="Contact" />
</div>
</div>
    </div>
  )
}

export default About