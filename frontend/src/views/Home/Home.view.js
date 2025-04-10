import React from 'react';
import Navigation from '../../components/Navigation/Navigation.js'
import styles from './Home.module.css'



const Home = () => {

return (
    <Navigation>
        <div className={styles.container}></div>
        <h1>HOME</h1>
    </Navigation>
    
)
}

export default Home;