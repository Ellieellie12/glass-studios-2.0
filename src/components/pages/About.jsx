import '../../App.css'

//styles
import styles from '../pages/About.module.css'


const About = () => {
  return ( 
    <> 
      <div className={styles['about-container']}>
        <h1 className={styles['about-title']}>About Us </h1>
        <p className={styles['about-paragraph']}>Glass Studios is all about creating a home away from home for the clientele...</p>
      </div>
    </>

  );
}

export default About