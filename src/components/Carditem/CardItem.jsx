import { NavLink } from 'react-router-dom'


//styles
import styles from '../Carditem/CardItem.module.css'



const CardItem = (props) => {
  return ( 
    <>
      <li className={styles['cards-list-item']}>
        <NavLink className={styles['card-link']} to={props.path}>
          <figure className={styles['studio-image-wrap']} >
            <img 
            src={props.src}
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