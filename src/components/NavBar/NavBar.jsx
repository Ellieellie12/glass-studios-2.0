import { NavLink } from 'react-router-dom'

//styles
import styles from '../NavBar/NavBar.module.css'



const NavBar = () => {

  return (
  <> 
    <nav className='nav-group'>
      <div className='nav-container'>
        <NavLink to='/'> Home 
        </NavLink>
        <NavLink to='/'> About 
        </NavLink>
        <NavLink to='/'> Studios 
        </NavLink>
        <NavLink to='/'> Merch 
        </NavLink>
        <NavLink to='/'> Contact
        </NavLink>
      </div>
    </nav>
  </>
  )
}
export default NavBar