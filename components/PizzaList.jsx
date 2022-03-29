import React from 'react'
import styles from '../styles/PizzaList.module.css';
import { PizzaCard } from './PizzaCard';

const PizzaList = () => {
  return (
    <div className={styles.container}>
        <h1 className={styles.title}>THE BEST PIZZA IN THE CITY</h1>
        <p className={styles.desc}>
            Mac's Bistro takes the world by storm, it is the juiciest, the cheesiest, the most magnificant pizzeria in the dear here city. So enjoy this thrill ride.
        </p>
        <div className={styles.wrapper}>
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        </div>
    </div>
  )
}

export default PizzaList;
