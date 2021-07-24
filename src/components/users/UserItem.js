import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const UserItem = ({ user: { avatar_url, login, html_url } }) => {
  return (
    <div className="card text-center">
      <img src={avatar_url} alt="" className="round-img" style={{ width: '60px' }} />
      <h3>{login}</h3>
      <div>
        <Link to={`/user/${login}`} className="btn btn-dark brn-sm my-1">
          More
        </Link>
      </div>
    </div>
  );
};

/* 
Below is the class version of the UserItem functional component above
Notice the key differences in the functional version are that there is 
no render function needed anymore, and instead of this.props.user, we 
are using props.user, and passing the props variable as an argument 
*/

// class UserItem extends Component {
//   render() {
//     const { avatar_url, login, html_url } = this.props.user;
//     return (
//       <div className="card text-center">
//         <img src={avatar_url} alt="" className="round-img" style={{ width: '60px' }} />
//         <h3>{login}</h3>
//         <div>
//           <a href={html_url} className="btn btn-dark brn-sm my-1">
//             More
//           </a>
//         </div>
//       </div>
//     );
//   }
// }

UserItem.propTypes = {
  user: PropTypes.object.isRequired
};

export default UserItem;
