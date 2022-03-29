import Image from "next/image"
import styles from '../../styles/Product.module.css'

export const Product = () => {
    const pizza = {
        id: 1,
        img: '/img/pizza/png',
        name: "PizzaRoni",
        price: [19.9, 23.9, 27.9],
        desc:"Succulent Pepperoni Pizza topped with fresh Mozzarella."
    }

  return (
    <div className={styles.container}>
       <div className={styles.left}>
       <div className={styles.imgContainer}>
           <Image src={pizza.img} layout="fill" objectFit="contain" alt="" />
       </div>
       </div>
       <div className={styles.right}>
           <h1 className={styles.title}>{pizza.name}</h1>
       </div>

    </div>
  )
}
