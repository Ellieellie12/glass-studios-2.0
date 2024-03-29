import '../../App.css'

//styles 
import styles from '../pages/Studios.module.css'
// import styles from '../Carditem/CardItem.module.css'

//components
import CardItem from '../Carditem/CardItem'

const Studios = () => {
  return ( 
    <>
    <div className={styles['cards']}>
      <h1 className={styles['studio-title']}>STUDIOS</h1>
      <div className={styles['studio-card-container']}>
        <div className={styles['card-wrapper']}>
          <ul className={styles['card-items']}>
            <CardItem 
            src='images/temp.jpg'
            text='Studio 1'
            path='/studioone'
            className={styles['temp-image']}
            />
            <CardItem 
            src='images/temp.jpg'
            text='Studio 1'
            path='/studioone'
            className={styles['temp-image']}
            />
            <CardItem 
            src='images/temp.jpg'
            text='Studio 1'
            path='/studioone'
            className={styles['temp-image']}
            />
            <CardItem 
            src='images/temp.jpg'
            text='Studio 1'
            path='/studioone'
            className={styles['temp-image']}
            />
            <CardItem 
            src='images/temp.jpg'
            text='Studio 1'
            path='/studioone'
            className={styles['temp-image']}
            />

          </ul>

        </div>
      </div>
    </div>

    </>


  )
}

export default Studios