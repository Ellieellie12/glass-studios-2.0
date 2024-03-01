import '../../App.css'

import photo from '/images/aboutpage.jpg'

// import phototwo from '../../../public/images/vinyltwo.jpg'
// import photothree from '../../../public/images/recording.jpg'

//styles
import styles from '../pages/About.module.css'



const About = () => {
  return ( 
    <> 
      <div className={styles['main-container']}>
        <img className={styles['grad-img']} src={photo} alt='gradient blue and green backdrop' />
          <h1 className={styles['about-title']}>Where Timeless Music Is Made </h1>
          <p className={styles['about-paragraph']}>Glass Studios is all about creating a home away from home for our clientele.</p>
      </div>
    </>

  );
}

export default About