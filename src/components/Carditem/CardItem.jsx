import { NavLink } from 'react-router-dom'


//styles
import styles from '../Carditem/CardItem.module.css'



const CardItem = (props) => {
  return ( 
    <>
      <li className={styles['cards-item']}>
        <NavLink className={styles['card-link']}>
          <figure className={styles['pic-wrap']} >
            <img 
            src='' 
            alt='studio image' 
            className={styles['studio-image']}
            />
          </figure>
          <div className={styles['card-info']}>
            <h4 className={styles['card-text']}></h4>

          </div>
        </NavLink>
        
      </li>  
    
    </>
  )
}

export default CardItem