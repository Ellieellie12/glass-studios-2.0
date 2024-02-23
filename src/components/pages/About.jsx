import '../../App.css'

import photo from '../../../public/images/vinyl.jpg'

import phototwo from '../../../public/images/vinyltwo.jpg'
//styles
import styles from '../pages/About.module.css'


const About = () => {
  return ( 
    <> 
      <div className={styles['about-container']}>
  
          <img className={styles['vinyl-img']} src={phototwo} alt='pink and yellow vinyl'/>
        
        <h1 className={styles['about-title']}>Where Timeless Music Is Made </h1>
        <p className={styles['about-paragraph']}>Glass Studios is all about creating a home away from home for our clientele.</p>
      </div>
    </>

  );
}

export default About