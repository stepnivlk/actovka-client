import { connect } from 'react-redux';
import Sidebar from './Sidebar';

const mapStateToProps = (state) => ({
  isAuthenticated: state.login.isAuthenticated,
})

export default connect(mapStateToProps)(Sidebar);
