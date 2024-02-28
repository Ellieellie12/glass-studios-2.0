import '../../App.css'

// import photo from '../../../public/images/sunvinyl.jpg'

// import phototwo from '../../../public/images/vinyltwo.jpg'
// import photothree from '../../../public/images/recording.jpg'

//styles
import styles from '../pages/About.module.css'



const About = () => {
  return ( 
    <> 
    {/* <div className={styles['img-background']}>
      <img className={styles['sun-img']} src={photo} alt="" />
    </div> */}
    <div className={styles['img-container']}>
      <div className={styles['main-container']}>
        <div className={styles['about-container']}>
          <h1 className={styles['about-title']}>Where Timeless Music Is Made </h1>
          <p className={styles['about-paragraph']}>Glass Studios is all about creating a home away from home for our clientele.</p>
        </div>
      </div>
    </div>
    </>

  );
}

export default About