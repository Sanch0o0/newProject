import classes from './Friends.module.css';
import { Friend } from './Friend/Friend';
import axios from 'axios';

export class Friends extends React.Component {

  componentDidMount(){
    if (this.props.users.length === 0) {
      axios.get('https://social-network.samuraijs.com/api/1.0/users?page=2&count=1')
        .then(response => {
          this.props.setUsers(response.data.items)
        })
    }
  }

  render() {
    return (
      <div className={classes.friendsContainer}>
        <div className={classes.headerText}>Friends</div>
        <div className={classes.friends}>
          {this.props.users.map(user =>
            <Friend
              follow={this.props.follow}
              unfollow={this.props.unFollow}
              user={user}
              id={user.id}
              key={user.id} />)}
        </div>
      </div>
    )
  }
}