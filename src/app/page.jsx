import Image from 'next/image'
import styles from './page.module.css'
import GP from 'public/young_gp.png'
import Button from '@/components/Button/Button'

export default function Home() {
  return (
  <div className={styles.container}>
  <div className={styles.item}>
    <h1 className ={styles.title}>Better tomorrow for all</h1>
    <p className={styles.desc}>
      We strive to keep our communities clean and create a safe haven for our youth. Proctect the Earth and ensure a better for tomorrow
    </p>
    <Button url="/portfolio" text="See our work"/>
    </div>
    <div className={styles.item}>
    <Image src={GP} alt="" className={styles.img} />
      </div> 
    
  </div>
  )
}
