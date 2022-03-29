import styles from '../styles/Footer.module.css';
import Image from 'next/image';

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Image src='/image/bg.png' layout='fill' alt='' />
      </div>
      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.motto}>
            OH YES, WE DID MACKIE PIZZA, WELL BAKED SLICE OF PIZZA.
          </h2>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>FIND OUR RESTAURANTS</h1>
          <p className={styles.text}>
            3343 Peachtree RD NE STE 145.
            <br /> Atlanta GA, 30326
            <br /> (123) 456-7890
          </p>
          <p className={styles.text}>
            3343 Peachtree RD NE STE 145.
            <br /> Atlanta GA, 30326
            <br /> (123) 456-7890
          </p>
          <p className={styles.text}>
            3343 Peachtree RD NE STE 145.
            <br /> Atlanta GA, 30326
            <br /> (123) 456-7890
          </p>
          <p className={styles.text}>
            3343 Peachtree RD NE STE 145.
            <br /> Atlanta GA, 30326
            <br /> (123) 456-7890
          </p>
        </div>
      <div className={styles.card}>
      <h1 className={styles.title}>WORKING HOURS</h1>
      <p className={styles.text}>
        MONDAY - FRIDAY
        <br /> 9:00am - 10:00pm
      </p>
      <p className={styles.text}>
        SATURDAY - SUNDAY
        <br /> 12:00pm - 12:00pm
      </p>
      </div>
    </div>
    </div >
  )
}

export default Footer
