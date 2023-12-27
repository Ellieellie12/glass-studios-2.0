import { NavLink } from 'react-router-dom'
// import {Link} from 'react-router-dom'
//styles
// import styles from '../NavBar/NavBar.module.css'



const NavBar = () => {

  return (
  <> 
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
  </>
  )
}
export default NavBar