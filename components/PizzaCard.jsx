import styles from '../styles/PizzaCard.module.css';
import Image from 'next/image';

export const PizzaCard = () => {
  return (
    <div className={styles.container}>
        <Image src='/image/pizza.png' alt='' width='500' height='500'/>
        <h1 className={styles.title}>Fiori Di Zucca</h1>
        <span className={styles.price}>$19.90</span>
        <p className={styles.desc}>
            Beautiful Pepperoni Pizza, Topped With Fresh Mozzarella!
        </p>
    </div>
  )
}
