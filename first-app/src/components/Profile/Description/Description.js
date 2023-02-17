import classes from './Description.module.css'

export function ProfileDescription(){
  return(
  <div className={classes.profileDescription}>
    <div className={classes.profilePhoto}>
      <img src = 'https://s13.stc.yc.kpcdn.net/share/i/instagram/B44solahwlo/wr-1280.webp' alt=''></img>
    </div>
    <div className={classes.profileMain_description}>
      <span className={classes.profileName}>John Doe</span>
      <span className={classes.profileText}>Date of birth: 2 january</span>
      <span className={classes.profileText}>City: Minsk</span>
      <span className={classes.profileText}>Education: BSUIR</span>
      <span className={classes.profileText}>Web Site: none</span>
      </div>
  </div>
  )
}