import { NavLink } from 'react-router-dom';
import classes from './Navbar.module.css'

export function Navbar() {
  return (
    <div className={classes.navbarContainer}>
      <div className={classes.navbarList}>
        <div className={classes.navbarListElement}>
          <NavLink to='/profile'>Profile</NavLink>
        </div>
        <div className={classes.navbarListElement}>
          <NavLink to='/friends'>Friends</NavLink>
        </div>
        <div className={classes.navbarListElement}>
          <NavLink to='/messages'>Messages</NavLink>
        </div>
        <div className={classes.navbarListElement}>
          <NavLink to='/video'>Video</NavLink>
        </div>
        <div className={classes.navbarListElement}>
          <NavLink to='/music'>Music</NavLink>
        </div>
        <div className={classes.navbarListElement}>
          <NavLink to='/settings'>Settings </NavLink>
        </div>
        <div className={classes.navbarListElement}>
          <NavLink to='/chat'>Chat </NavLink>
        </div>
      </div>
    </div>
  );
}