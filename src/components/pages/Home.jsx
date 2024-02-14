import '../../App.css'

//styles
import styles from '../pages/Home.module.css'

//components

const Home = () => {

  return (  
    <>
      <div className={styles['home-container']}>
        {/* <h1 className={styles['home-title']}>GLASS STUDIOS 2.0</h1> */}
        <svg viewBox="0 0 960 300">
        <symbol className={styles['title']} id="s-text">
          <text textAnchor="middle" x="50%" y="80%">GLASS STUDIOS 2.0 </text>
          <text textAnchor="middle" x="52%" y="80%">GLASS STUDIOS 2.0 </text>
          
        </symbol>

        <g className= "g-ants">
          <use xlinkHref="#s-text" className="text-copy"></use>
          <use xlinkHref="#s-text" className="text-copy"></use>
          <use xlinkHref="#s-text" className="text-copy"></use>
          <use xlinkHref="#s-text" className="text-copy"></use>
          <use xlinkHref="#s-text" className="text-copy"></use>
        </g>
      </svg>

        {/* <p className={styles['home-slogan']}>"Where timeless music is made"</p> */}
      </div>
    </>
  )
}

export default Home