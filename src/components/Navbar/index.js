import { connect } from 'react-redux';
import Navbar from './Navbar';

const mapStateToProps = ({ currentUser }) => ({
  isAuthenticated: currentUser.isAuthenticated,
  firstName: currentUser.firstName,
  lastName: currentUser.lastName,
  username: currentUser.username,
})

export default connect(mapStateToProps)(Navbar);
