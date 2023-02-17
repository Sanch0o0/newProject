import classes from './Header.module.css'

export function Header() {
  return (
    <div className={classes.header}>
      <div className={classes.headerLogo}>
        <img src='https://img.favpng.com/3/25/19/computer-network-global-network-computer-icons-logo-png-favpng-uiupzDyGz4Ks1aPpLdBEF8gwz.jpg' alt=''></img>
      </div>
      <input className={classes.headerInput}></input>
      <div className={classes.headerButtonsBox}>
        <div className={classes.headerButton}>
          <img src='https://www.freepnglogos.com/uploads/logo-home-png/chimney-home-icon-transparent-1.png' alt=''></img>
        </div>
        <div className={classes.headerButton}>
          <img src='https://e7.pngegg.com/pngimages/725/940/png-clipart-vimeo-youtube-logo-video-youtube-angle-triangle.png' alt=''></img>
        </div>
        <div className={classes.headerButton}>
          <img src='https://www.citypng.com/public/uploads/preview/download-hd-shopping-cart-black-logo-icon-png-11640441685ymd041qjws.png' alt=''></img>
        </div>
      </div>
      <div className={classes.autoWidth}></div>
      <div className={classes.headerSettingButton}>
          <img src='https://www.iconpacks.net/icons/2/free-settings-icon-3110-thumb.png' alt=''></img>
      </div>
    </div>
  );
}