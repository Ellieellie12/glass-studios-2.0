import '../../App.css'

//styles
import styles from '../pages/Home.module.css'

//components

const Home = () => {

  return (  
    <>
      <h1 className={styles['home-title']}>GLASS STUDIOS 2.0</h1>
      <p className={styles['home-slogan']}>"Where timeless music is made"</p>
    </>
  )
}

export default Home