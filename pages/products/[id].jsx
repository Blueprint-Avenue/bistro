import Image from "next/image"
import { useState } from "react";
import styles from '../../styles/Product.module.css'

const Product = () => {

    const [size, setSize] = useState(0);

    const pizza = {
        id: 1,
        img: '/image/pizza.png',
        name: "PizzaRoni",
        price: [19.90, 23.90, 27.90],
        desc: "Succulent Pepperoni Pizza topped with fresh Mozzarella."
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
                <span className={styles.price}>${pizza.price[size]}</span>
                <p className={styles.desc}>${pizza.desc}</p>
                <h3 className={styles.choose}>Choose Your Size:</h3>
                <div className={styles.sizes}>
                    <div className={styles.size} onClick={()=> setSize(0)}>
                        <Image src='/image/size.png' layout="fill" alt="" />
                        <span className={styles.number}>Small</span>
                    </div>
                    <div className={styles.size} onClick={()=> setSize(1)}>
                        <Image src='/image/size.png' layout="fill" alt="" />
                        <span className={styles.number}>Medium</span>
                    </div>
                    <div className={styles.size} onClick={()=> setSize(2)}>
                        <Image src='/image/size.png' layout="fill" alt="" />
                        <span className={styles.number}>Large</span>
                    </div>
                </div>
                <h3 className={styles.choose}>Choose Additional Ingredients:</h3>
                <div className={styles.ingredients}>
                <div className={styles.option}>
                    <input
                    type="checkbox"
                    id="double"
                    name="double"
                    className={styles.checkbox}
                    />
                    <label htmlFor="double">Double Ingredients</label>
                </div>
                <div className={styles.option}>
                    <input
                    type="checkbox"
                    id="cheese"
                    name="cheese"
                    className={styles.checkbox}
                    />
                    <label htmlFor="cheese">Extra Cheese</label>
                </div>
                <div className={styles.option}>
                    <input
                    type="checkbox"
                    id="spicy"
                    name="spicy"
                    className={styles.checkbox}
                    />
                    <label htmlFor="spicy">Spicy Sauce</label>
                </div>
                <div className={styles.option}>
                    <input
                    type="checkbox"
                    id="garlic"
                    name="garlic"
                    className={styles.checkbox}
                    />
                    <label htmlFor="garlic">Garlic Crust</label>
                </div>
                <div className={styles.option}>
                    <input
                    type="checkbox"
                    id="olives"
                    name="olives"
                    className={styles.checkbox}
                    />
                    <label htmlFor="olives">Add Olives</label>
                </div>
                <div className={styles.option}>
                    <input
                    type="checkbox"
                    id="pineapples"
                    name="pineapples"
                    className={styles.checkbox}
                    />
                    <label htmlFor="pineapples">Add Pineapples</label>
                </div>
                </div>
                <div className={styles.add}>
                    <input type='number' defaultValue={1} className={styles.quantity}></input>
                    <button className={styles.button}>Add to Cart</button>
                </div>
            </div>

        </div>
    )
}

export default Product;
