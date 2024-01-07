import { NavLink } from 'react-router-dom'

//styles
import styles from '../NavBar/NavBar.module.css'




const NavBar = () => {

  return (
  <> 
    <nav className={styles['nav']}>
      <div className={styles['nav-container']}>
        {/* <NavLink className={styles['nav-logo']}>
          <img src={} alt="" />
        </NavLink> */}
        <ul className={styles['nav-list']}>
          <li className={styles['nav-items']}>
            <NavLink to='/' className={styles['nav-links']}> Home 
            </NavLink>
          </li>
          <li className={styles['nav-items']}>
            <NavLink to='/about' className={styles['nav-links']}> About 
            </NavLink>
          </li>
          <li className={styles['nav-items']}>
            <NavLink to='/studios' className={styles['nav-links']}> Studios 
            </NavLink>
          </li>
          <li className={styles['nav-items']}>
            <NavLink to='/merchandise' className={styles['nav-links']}> Merch 
            </NavLink>
          </li>
          <li className={styles['nav-items']}>
            <NavLink to='/contact' className={styles['nav-links']}> Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  </>
  )
}
export default NavBar