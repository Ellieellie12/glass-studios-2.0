import '../../App.css'

//styles 
import styles from '../pages/Studios.module.css'

//components
import CardItem from '../Carditem/CardItem'

const Studios = () => {
  return ( 
    <>
    <div>
      <h1 className={styles['studio-title']}>STUDIOS</h1>
      <div className={styles['studio-card-container']}>
        <div className={styles['card-wrapper']}>
          <ul className={styles['card-item']}>
            <CardItem 
            src='blue.jpg'
            text='Studio 1'
            path='/studioone'

            />

          </ul>

        </div>
      </div>
    </div>

    </>


  )
}

export default Studios